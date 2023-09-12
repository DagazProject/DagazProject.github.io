while (<>) {
  if (/^([^;]+);([^;]+);([^;]+);([^;]*);([^;]+);(.*)/) {
      my $sect = $1;
      my $name = $2;
      my $href = $3;
      my $rule = $4;
      my $thmb = $5;
      my $auth = $6;
      $name =~ s/\'/\'\'/g;
      $rule =~ s/\'/\'\'/g;
      print "insert into tmp(sect, name, href, rule, thmb, auth) values('$sect', '$name', '$href', '$rule', '$thmb', '$auth');\n";
  }
}
