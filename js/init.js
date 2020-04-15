document.write("<style>\n");
for(var i=0;i<15;i++)
{
  document.write(".i"+String(i)+" {\n");
  document.write("  position:absolute;\n");
  document.write("  left:5px;\n");
  document.write("  top:"+String(i*30+5)+"px\n");
  document.write("}\n");
}
document.write("</style>\n");
document.write("<div class=\"ditu\" style=\"border:1px solid #96C2F1; background-color:#EFF7FF;position:absolute; left:265px; top:5px; width:460px; height:460px;\">\n");
document.write("<table cellspacing=\"0\" cellpadding=\"0\">\n");
for(var i=0;i<15;i++)
{
  document.write("<tr class=\"i"+String(i)+"\">\n");
  for(var j=0;j<15;j++)
    document.write("<td id=\""+String(i*15+j)+"\" class=\"MAP\"></td>\n");
  document.write("</tr>\n");
}
document.write("</table>\n");
document.write("</div>\n");