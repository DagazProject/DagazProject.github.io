#!/usr/bin/env python3
"""
https://chat.deepseek.com/share/suh2qdzs4cmz7ap5kt
Шахматная фигура «Василиск» — атакующая кобра.
Симметричный капюшон + рельеф чешуи по всему телу.
GLTF: Y-up, uint16, base64-buffer, metallic=0.1, roughness=0.8.
"""
import base64, json, math, struct

# ---------- vector helpers ----------
def vadd(a,b): return (a[0]+b[0],a[1]+b[1],a[2]+b[2])
def vsub(a,b): return (a[0]-b[0],a[1]-b[1],a[2]-b[2])
def vmul(a,s): return (a[0]*s,a[1]*s,a[2]*s)
def vdot(a,b): return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]
def vcrs(a,b): return (a[1]*b[2]-a[2]*b[1],
                       a[2]*b[0]-a[0]*b[2],
                       a[0]*b[1]-a[1]*b[0])
def vlen(a):   return math.sqrt(vdot(a,a))
def vnrm(a):
    l=vlen(a); return (a[0]/l,a[1]/l,a[2]/l) if l>1e-12 else (0,0,1)
def vrot(v,axis,ang):
    c,s=math.cos(ang),math.sin(ang)
    return vadd(vadd(vmul(v,c),vmul(vcrs(axis,v),s)),
                vmul(axis,vdot(axis,v)*(1-c)))

# ---------- mesh accumulator ----------
P,N,T,I=[],[],[],[]
def addv(p,n,uv):
    i=len(P); P.append(p); N.append(vnrm(n)); T.append(uv); return i
def addq(a,b,c,d): I.extend([a,b,c, a,c,d])

# ============================================================
# PRIMITIVES
# ============================================================
def add_cylinder(y0,y1,r0,r1,seg=32):
    bot,top=[],[]
    for j in range(seg):
        a=2*math.pi*j/seg; ca,sa=math.cos(a),math.sin(a)
        bot.append(addv((ca*r0,y0,sa*r0),(ca,0,sa),(j/seg,0.0)))
        top.append(addv((ca*r1,y1,sa*r1),(ca,0,sa),(j/seg,1.0)))
    for j in range(seg):
        j2=(j+1)%seg
        addq(bot[j],bot[j2],top[j2],top[j])
    c=addv((0,y0,0),(0,-1,0),(0.5,0.5))
    for j in range(seg):
        j2=(j+1)%seg; I.extend([c,bot[j2],bot[j]])
    c=addv((0,y1,0),(0,1,0),(0.5,0.5))
    for j in range(seg):
        j2=(j+1)%seg; I.extend([c,top[j],top[j2]])

def catmull_rom(pts,n_per=4):
    n=len(pts); ext=[pts[0]]+list(pts)+[pts[-1]]; out=[]
    for i in range(n-1):
        p0,p1,p2,p3=ext[i],ext[i+1],ext[i+2],ext[i+3]
        for s in range(n_per):
            t=s/n_per; t2=t*t; t3=t2*t
            out.append(tuple(
                0.5*((2*p1[k])+(-p0[k]+p2[k])*t+
                     (2*p0[k]-5*p1[k]+4*p2[k]-p3[k])*t2+
                     (-p0[k]+3*p1[k]-3*p2[k]+p3[k])*t3)
                for k in range(len(p1))))
    out.append(pts[-1]); return out

def add_sweep(spine, radii, hood, seg=32,
              hood_ex=3.2, hood_ez=0.55,
              scale_amp=0.14, scale_NU=12, scale_NV=30):
    """
    spine, radii, hood — массивы одинаковой длины.
    hood[i]∈[0..1] — фактор раскрытия капюшона в i-м кольце.
    scale_amp — амплитуда чешуи как доля локального радиуса.
    """
    n = len(spine)

    # ---- касательные ----
    tans = []
    for i in range(n):
        if i == 0:     t = vsub(spine[1], spine[0])
        elif i == n-1: t = vsub(spine[i], spine[i-1])
        else:          t = vsub(spine[i+1], spine[i-1])
        tans.append(vnrm(t))

    # ---- параллельный перенос репера ----
    up = (0, 1, 0)
    if abs(vdot(tans[0], up)) > 0.9: up = (1, 0, 0)
    n0 = vnrm(vsub(up, vmul(tans[0], vdot(up, tans[0]))))
    frames = [n0]
    for i in range(1, n):
        pn = frames[-1]; t0, t1 = tans[i-1], tans[i]
        ax = vcrs(t0, t1)
        if vlen(ax) < 1e-9:
            cn = pn
        else:
            cn = vrot(pn, vnrm(ax), math.acos(max(-1, min(1, vdot(t0, t1)))))
        cn = vnrm(vsub(cn, vmul(t1, vdot(cn, t1))))
        frames.append(cn)

    # ---- строим сетку (i×j) вершин с чешуёй ----
    grid = [[None]*seg for _ in range(n)]
    for i in range(n):
        t, nr = tans[i], frames[i]
        b = vcrs(t, nr)
        r = radii[i]
        s = hood[i]
        ex = 1 + s * (hood_ex - 1)
        ez = 1 - s * (1 - hood_ez)
        v_ = i / (n - 1)
        for j in range(seg):
            a = 2 * math.pi * j / seg
            ca, sa = math.cos(a), math.sin(a)

            # --- рельеф чешуи: ромбическая решётка ---
            # A — периодична по кольцу (12 «чешуек» вокруг),
            # B — периодична вдоль позвоночника (30 рядов).
            # Формула (0.5+0.5·cosA)(0.5+0.5·cosB) даёт пирамидки в узлах
            # и обнуляется в середине клетки, поэтому поверхность
            # непрерывна на стыках и симметрична относительно j→seg−j.
            A = 2 * math.pi * scale_NU * (j / seg)
            B = 2 * math.pi * scale_NV * v_
            bump = (0.5 + 0.5*math.cos(A)) * (0.5 + 0.5*math.cos(B))
            r_mod = r * (1.0 + scale_amp * bump)

            off0 = vadd(vmul(nr, ca * r_mod), vmul(b, sa * r_mod))
            # мировая нормировка капюшона (X вширь, Z вплоть)
            off = (off0[0] * ex, off0[1], off0[2] * ez)
            p = vadd(spine[i], off)
            grid[i][j] = (p, (j / seg, v_))

    # ---- вычисляем нормали через конечные разности ----
    vidx = [[0]*seg for _ in range(n)]
    for i in range(n):
        im = max(i-1, 0); ip = min(i+1, n-1)
        for j in range(seg):
            jm = (j-1) % seg; jp = (j+1) % seg
            du = vsub(grid[i][jp][0], grid[i][jm][0])   # вдоль кольца
            dv = vsub(grid[ip][j][0], grid[im][j][0])   # вдоль позвоночника
            nm = vcrs(du, dv)
            radial = vsub(grid[i][j][0], spine[i])
            if vlen(nm) < 1e-12 or vdot(nm, radial) < 0:
                nm = radial if vlen(radial) > 1e-9 else (0, 1, 0)
            vidx[i][j] = addv(grid[i][j][0], vnrm(nm), grid[i][j][1])

    # ---- квады ----
    for i in range(n-1):
        for j in range(seg):
            j2 = (j+1) % seg
            addq(vidx[i][j], vidx[i][j2], vidx[i+1][j2], vidx[i+1][j])

    # ---- крышки ----
    c = addv(spine[0], vmul(tans[0], -1), (0.5, 0.0))
    for j in range(seg):
        j2 = (j+1) % seg; I.extend([c, vidx[0][j2], vidx[0][j]])
    c = addv(spine[-1], tans[-1], (0.5, 1.0))
    for j in range(seg):
        j2 = (j+1) % seg; I.extend([c, vidx[-1][j], vidx[-1][j2]])

def add_sphere(center,radius,scale=(1,1,1),seg=16,rings=10,align_x=None):
    rot=None
    if align_x is not None:
        ex=vnrm(align_x); up=(0,1,0)
        if abs(vdot(ex,up))>0.9: up=(1,0,0)
        ey=vnrm(vsub(up,vmul(ex,vdot(up,ex)))); ez=vcrs(ex,ey)
        rot=[ex,ey,ez]
    def to_world(loc):
        p=(loc[0]*scale[0],loc[1]*scale[1],loc[2]*scale[2])
        if rot:
            p=(sum(rot[k][0]*p[k] for k in range(3)),
               sum(rot[k][1]*p[k] for k in range(3)),
               sum(rot[k][2]*p[k] for k in range(3)))
        return vadd(center,p)
    def n_world(loc):
        n=(loc[0]/scale[0],loc[1]/scale[1],loc[2]/scale[2]); n=vnrm(n)
        if rot:
            n=(sum(rot[k][0]*n[k] for k in range(3)),
               sum(rot[k][1]*n[k] for k in range(3)),
               sum(rot[k][2]*n[k] for k in range(3)))
        return vnrm(n)
    top=addv(to_world((0,radius,0)),n_world((0,1,0)),(0.5,0.0))
    bot=addv(to_world((0,-radius,0)),n_world((0,-1,0)),(0.5,1.0))
    rows=[]
    for i in range(1,rings):
        th=math.pi*i/rings
        y=radius*math.cos(th); rr=radius*math.sin(th); row=[]
        for j in range(seg):
            ph=2*math.pi*j/seg
            x=rr*math.cos(ph); z=rr*math.sin(ph)
            row.append(addv(to_world((x,y,z)),n_world((x,y,z)),
                            (j/seg,i/rings)))
        rows.append(row)
    first=rows[0]
    for j in range(seg):
        j2=(j+1)%seg
        I.extend([top,first[j2],first[j]])
    for i in range(len(rows)-1):
        r0,r1=rows[i],rows[i+1]
        for j in range(seg):
            j2=(j+1)%seg
            addq(r0[j],r0[j2],r1[j2],r1[j])
    last=rows[-1]
    for j in range(seg):
        j2=(j+1)%seg
        I.extend([bot,last[j],last[j2]])

def add_tube(start,end,radius,seg=6):
    d=vsub(end,start); L=vlen(d)
    if L<1e-9: return
    t=vmul(d,1/L); up=(0,1,0)
    if abs(vdot(t,up))>0.9: up=(1,0,0)
    n=vnrm(vsub(up,vmul(t,vdot(up,t)))); b=vcrs(t,n)
    r0,r1=[],[]
    for j in range(seg):
        a=2*math.pi*j/seg; ca,sa=math.cos(a),math.sin(a)
        off=vadd(vmul(n,ca*radius),vmul(b,sa*radius))
        r0.append(addv(vadd(start,off),vnrm(off),(j/seg,0.0)))
        r1.append(addv(vadd(end,  off),vnrm(off),(j/seg,1.0)))
    for j in range(seg):
        j2=(j+1)%seg
        addq(r0[j],r0[j2],r1[j2],r1[j])
    c=addv(start,vmul(t,-1),(0.5,0.5))
    for j in range(seg):
        j2=(j+1)%seg; I.extend([c,r0[j2],r0[j]])
    c=addv(end,t,(0.5,0.5))
    for j in range(seg):
        j2=(j+1)%seg; I.extend([c,r1[j],r1[j2]])

def add_cone(base,tip,r_base,seg=8):
    d=vsub(tip,base); L=vlen(d)
    if L<1e-9: return
    t=vmul(d,1/L); up=(0,1,0)
    if abs(vdot(t,up))>0.9: up=(1,0,0)
    n=vnrm(vsub(up,vmul(t,vdot(up,t)))); b=vcrs(t,n)
    base_ring=[]
    for j in range(seg):
        a=2*math.pi*j/seg; ca,sa=math.cos(a),math.sin(a)
        off=vadd(vmul(n,ca*r_base),vmul(b,sa*r_base))
        base_ring.append(addv(vadd(base,off),vnrm(off),(j/seg,0.0)))
    tip_v=addv(tip,t,(0.5,1.0))
    for j in range(seg):
        j2=(j+1)%seg
        I.extend([base_ring[j],base_ring[j2],tip_v])
    c=addv(base,vmul(t,-1),(0.5,0.5))
    for j in range(seg):
        j2=(j+1)%seg
        I.extend([c,base_ring[j2],base_ring[j]])

# ============================================================
# ПОСТРОЕНИЕ ФИГУРЫ
# ============================================================
add_cylinder(0.02, 0.30, 0.72, 0.55, seg=32)

# Спина: X=0 в области шеи и капюшона (y ≥ 1.18) — ГАРАНТИЯ симметрии.
spine_ctrl = [
    # --- клубок (может быть несимметричным) ---
    ( 0.42, 0.32,  0.00),
    ( 0.38, 0.38,  0.28),
    ( 0.15, 0.43,  0.42),
    (-0.15, 0.47,  0.32),
    (-0.38, 0.51,  0.05),
    (-0.35, 0.55, -0.22),
    (-0.10, 0.58, -0.35),
    ( 0.20, 0.61, -0.28),
    ( 0.30, 0.66, -0.05),
    # --- переход: X плавно приходит к нулю ---
    ( 0.18, 0.82,  0.12),
    ( 0.08, 1.00,  0.18),
    ( 0.00, 1.18,  0.08),
    # --- S-образная шея + капюшон: строго в плоскости X=0 ---
    ( 0.00, 1.35, -0.08),
    ( 0.00, 1.52, -0.10),
    ( 0.00, 1.68, -0.02),
    ( 0.00, 1.82,  0.08),
    ( 0.00, 1.94,  0.14),
    ( 0.00, 2.06,  0.18),
    ( 0.00, 2.16,  0.26),
    ( 0.00, 2.22,  0.38),
]
radii_ctrl = [
    0.02, 0.06, 0.11, 0.15, 0.18, 0.19, 0.195, 0.20, 0.20,
    0.19, 0.18, 0.17, 0.16, 0.155, 0.15, 0.145,
    0.14, 0.135,
    0.12, 0.10,
]

spine = catmull_rom(spine_ctrl, n_per=5)
radii = [r[0] for r in catmull_rom([(r,) for r in radii_ctrl], n_per=5)]

def smoothstep(a,b,x):
    t=max(0,min(1,(x-a)/(b-a))); return t*t*(3-2*t)
def hood_profile(t):
    t0,tp1,tp2,t1 = 0.76, 0.84, 0.90, 0.97
    if t<t0 or t>t1: return 0.0
    if t<tp1: return smoothstep(t0,tp1,t)
    if t>tp2: return 1.0 - smoothstep(tp2,t1,t)
    return 1.0

n_rings = len(spine)
hood = []
for i in range(n_rings):
    t = i/(n_rings-1)
    dy = abs(vnrm(vsub(spine[min(i+1,n_rings-1)],
                       spine[max(i-1,0)]))[1])
    hood.append(hood_profile(t) * dy)

add_sweep(spine, radii, hood, seg=32,
          hood_ex=3.2, hood_ez=0.55,
          scale_amp=0.14, scale_NU=12, scale_NV=30)

# --- Голова ---
head_tan = vnrm(vsub(spine_ctrl[-1], spine_ctrl[-3]))
head_center = vsub(spine[-1], vmul(head_tan, 0.06))

add_sphere(head_center, 0.12,
           scale=(1.9, 0.75, 1.15),
           seg=18, rings=12, align_x=head_tan)

up_ref = (0,1,0)
if abs(vdot(head_tan, up_ref)) > 0.9: up_ref = (1,0,0)
head_up   = vnrm(vsub(up_ref, vmul(head_tan, vdot(up_ref, head_tan))))
head_side = vcrs(head_tan, head_up)

# --- Глаза ---
for s in (1,-1):
    ec = vadd(head_center,
              vadd(vmul(head_tan, 0.10),
                   vadd(vmul(head_up,  0.075),
                        vmul(head_side, 0.085*s))))
    add_sphere(ec, 0.026, seg=12, rings=8)

# --- Клыки ---
for s in (1,-1):
    fb = vadd(head_center,
              vadd(vmul(head_tan, 0.16),
                   vadd(vmul(head_up, -0.035),
                        vmul(head_side, 0.045*s))))
    fd = vnrm(vadd(vmul(head_tan, 0.35), vmul(head_up, -0.9)))
    ft = vadd(fb, vmul(fd, 0.085))
    add_cone(fb, ft, 0.014, seg=8)

# --- Язык ---
t_root = vadd(head_center,
              vadd(vmul(head_tan, 0.20), vmul(head_up, -0.04)))
t_fork = vadd(t_root, vmul(head_tan, 0.075))
add_tube(t_root, t_fork, 0.009, seg=6)
for s in (1,-1):
    tip_dir = vnrm(vadd(vmul(head_tan,0.7), vmul(head_side,0.55*s)))
    t_tip = vadd(t_fork, vmul(tip_dir, 0.06))
    add_tube(t_fork, t_tip, 0.006, seg=6)

# ============================================================
# НОРМАЛИЗАЦИЯ под bbox эталона
# ============================================================
xs=[p[0] for p in P]; ys=[p[1] for p in P]; zs=[p[2] for p in P]
minx,maxx=min(xs),max(xs); miny,maxy=min(ys),max(ys)
minz,maxz=min(zs),max(zs)
cx=(minx+maxx)/2; cz=(minz+maxz)/2
cur_h=maxy-miny; cur_x=max(abs(minx-cx),abs(maxx-cx)); cur_z=max(abs(minz-cz),abs(maxz-cz))
TARGET_H,TARGET_X,TARGET_Z=2.64,0.76,0.76
sc=min(TARGET_H/cur_h,
       TARGET_X/cur_x if cur_x>0 else 1.0,
       TARGET_Z/cur_z if cur_z>0 else 1.0)
P[:] = [((x-cx)*sc, (y-miny)*sc+0.02, (z-cz)*sc) for x,y,z in P]

# ============================================================
# GLTF
# ============================================================
def pad4(b):
    r=len(b)%4; return b+b"\x00"*((4-r)%4)

pos_b=pad4(b"".join(struct.pack("<3f",*p) for p in P))
uv_b =pad4(b"".join(struct.pack("<2f",*t) for t in T))
nrm_b=pad4(b"".join(struct.pack("<3f",*n) for n in N))
idx_b=pad4(b"".join(struct.pack("<H", i) for i in I))
buf=pos_b+uv_b+nrm_b+idx_b
o_pos,o_uv=0,len(pos_b)
o_nrm,o_idx=o_uv+len(uv_b), o_uv+len(uv_b)+len(nrm_b)

xs=[p[0] for p in P]; ys=[p[1] for p in P]; zs=[p[2] for p in P]

gltf={
    "asset":{"version":"2.0","generator":"BasiliskChessPiece r2"},
    "scenes":[{"name":"AuxScene","nodes":[0]}],
    "scene":0,
    "nodes":[{"mesh":0}],
    "bufferViews":[
        {"buffer":0,"byteOffset":o_pos,"byteLength":len(pos_b),
         "target":34962,"byteStride":12},
        {"buffer":0,"byteOffset":o_uv, "byteLength":len(uv_b),
         "target":34962,"byteStride":8},
        {"buffer":0,"byteOffset":o_nrm,"byteLength":len(nrm_b),
         "target":34962,"byteStride":12},
        {"buffer":0,"byteOffset":o_idx,"byteLength":len(idx_b),
         "target":34963},
    ],
    "buffers":[{
        "byteLength":len(buf),
        "uri":"data:application/octet-stream;base64,"
              +base64.b64encode(buf).decode("ascii")
    }],
    "accessors":[
        {"bufferView":0,"componentType":5126,"count":len(P),
         "max":[max(xs),max(ys),max(zs)],
         "min":[min(xs),min(ys),min(zs)],"type":"VEC3"},
        {"bufferView":1,"componentType":5126,"count":len(T),
         "max":[1.0,1.0],"min":[0.0,0.0],"type":"VEC2"},
        {"bufferView":2,"componentType":5126,"count":len(N),
         "max":[1.0,1.0,1.0],"min":[-1.0,-1.0,-1.0],"type":"VEC3"},
        {"bufferView":3,"componentType":5123,"count":len(I),
         "max":[len(P)-1],"min":[0],"type":"SCALAR"},
    ],
    "materials":[{"pbrMetallicRoughness":{
        "metallicFactor":0.1,"roughnessFactor":0.8
    }}],
    "meshes":[{"primitives":[{
        "mode":4,
        "attributes":{"POSITION":0,"TEXCOORD_0":1,"NORMAL":2},
        "indices":3,"material":0
    }]}],
}

with open("basilisk.gltf","w") as f:
    json.dump(gltf,f,separators=(",",":"))

print(f"OK: basilisk.gltf ({len(P)} verts, {len(I)//3} tris, "
      f"{len(buf)} bytes)")
