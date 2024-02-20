print "<!DOCTYPE html>\n";
print "<html>\n";
print "  <head>\n";
print "    <META http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\n";
print "    <META name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n";
print "    <link rel=\"stylesheet\" href=\"css/map.css\"/>\n";
print "    <link rel=\"stylesheet\" href=\"css/bootstrap.min.css\"/>\n";
print "    <title>Dagaz Release 1.4.1</title>\n";
print "  </head>\n";
print "  <body>\n";
print "    <div class=\"divGameIconWrap\">\n";

while (<>) {
  if (/^[^;]+;([^;]*);([^;]+);([^;]*);([^;]+)/) {
      my $name = $1;
      my $href = $2;
      my $rule = $3;
      my $view = $4;
      print "      <div class=\"divGameIcon\">\n";
      print "        <a href=\"$href\">\n";
      print "          <img src=\"upload/$view.png\">\n";
      print "        </a>\n";
      if ($name) {
          print "        <p>\n";
          if ($rule) {
              print "          <a target=\"_blank\" href=\"$rule\">\n";
          }
          if ($href =~ /index-map/) {
              print "            <b>$name ...</b>\n";
          } else {
              print "            <b>$name</b>\n";
          }
          if ($rule) {
              print "          </a>\n";
          }
          print "        </p>\n";
      }
      print "      </div>\n";
  }
}

print "    </div>\n";
print "  </body>\n";
print "</html>\n";
