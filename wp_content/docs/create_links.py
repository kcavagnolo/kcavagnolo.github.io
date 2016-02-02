f = open('dsci_links')
o = open('nlinks.html', 'w')
a = "<!DOCTYPE html>\n<html>\n<body>\n"
o.write(a)
i = 1
for l in f:
    l = l.strip()
    l = l.split()
    s = l[0]
    l = l[1]
    o.write('<a href="'+str(l)+'">'+str(i)+" "+str(s)+'</a><br>\n')
    i += 1
a = "</body>\n</html>\n"
o.write(a)
f.close()
o.close()
