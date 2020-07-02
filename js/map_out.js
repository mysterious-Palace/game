  function pd()
  {
    for(var i=archive["x"]-7,X=0;i<=archive["x"]+7;i++,X++)
      for(var j=archive["y"]-7,Y=0;j<=archive["y"]+7;j++,Y++)
        if(i>=0&&i<37&&j>=0&&j<119)
        {
          if(i==archive["x"]&&j==archive["y"])
            document.getElementById(String(X*15+Y)).innerHTML = 
              "<img src=\"/file/img/mpgame/reng.png\" width=\"30\" height=\"30\" />";
          else if(map[i][j]=='#')
             document.getElementById(String(X*15+Y)).innerHTML = 
              "<img src=\"/file/img/mpgame/qiang.png\" width=\"30\" height=\"30\" />";
          else if(map[i][j]==' ')
            document.getElementById(String(X*15+Y)).innerHTML = 
              "<img src=\"/file/img/mpgame/bai.png\" width=\"30\" height=\"30\" />";
          else if(map[i][j]=='1')
            document.getElementById(String(X*15+Y)).innerHTML = 
              "<img src=\"/file/img/mpgame/yaoshi1.png\" width=\"30\" height=\"30\" />";
          else if(map[i][j]=='2')
            document.getElementById(String(X*15+Y)).innerHTML = 
              "<img src=\"/file/img/mpgame/yaoshi2.png\" width=\"30\" height=\"30\" />";
          else if(map[i][j]=='3')
            document.getElementById(String(X*15+Y)).innerHTML = 
              "<img src=\"/file/img/mpgame/yaoshi3.png\" width=\"30\" height=\"30\" />";
          else
            document.getElementById(String(X*15+Y)).innerHTML = 
              "<img src=\"/file/img/mpgame/"/*暂无图标*/+String(map[i][j])+".png\" width=\"30\" height=\"30\" />";
        }
        else
          document.getElementById(String(X*15+Y)).innerHTML = 
            "<img src=\"/file/img/mpgame/qiang.png\" width=\"30\" height=\"30\" />";
    document.getElementById("bian").innerHTML = 
      "<button type=\"button\" class=\"button\" onclick=\"drcd()\">导入存档</button>"+
      "<button type=\"button\" class=\"button\" onclick=\"dccd()\">导出存档</button>"+
      "<br/>"+
      "<h3>&nbsp;状态栏</h3>";
    document.getElementById("bian").innerHTML +=
      "&nbsp;<b>行</b>:"+String(archive["x"])+" <b>列</b>:"+String(archive["y"])+"<br/>";
    document.getElementById("bian").innerHTML +=
      "&nbsp;<b>HP</b>:"+String(archive["HP"])+"<br/>";
    document.getElementById("bian").innerHTML +=
      "&nbsp;<b>ATK</b>:"+String(archive["ATK"])+"<br/>";
    document.getElementById("bian").innerHTML +=
      "&nbsp;<b>DEF</b>:"+String(archive["DEF"])+"<br/>";
    document.getElementById("bian").innerHTML +=
      "&nbsp;<b>FirstKey</b>:"+String(archive["FirstKey"])+"<br/>";
    document.getElementById("bian").innerHTML +=
      "&nbsp;<b>SecondKey</b>:"+String(archive["SecondKey"])+"<br/>";
    document.getElementById("bian").innerHTML +=
      "&nbsp;<b>ThirdKey</b>:"+String(archive["ThirdKey"])+"<br/>";
    document.getElementById("bian").innerHTML +=
      "&nbsp;<b>Weapons</b>:"+String(archive["Weapons"])+"<br/>";
    document.getElementById("bian").innerHTML +=
      "&nbsp;<b>Armor</b>:"+String(archive["Armor"])+"<br/>";
    document.getElementById("bian").innerHTML +=
      "&nbsp;<b>GOLD</b>:"+String(archive["GOLD"])+"<br/>";
  }
