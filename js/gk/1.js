  function caozuo(fx/*方向*/)
  {
    if(fx=="shang")//上
    {
      if(map[archive["x"]-1][archive["y"]]!='#')
        archive["x"]--;
    }
    else if(fx=="xia")//下
    {
      if(map[archive["x"]+1][archive["y"]]!='#')
        archive["x"]++;
    }
    else if(fx=="zuo")//左
    {
      if(map[archive["x"]][archive["y"]-1]!='#')
        archive["y"]--;
    }
    else if(fx=="you")//右
    {
      if(map[archive["x"]][archive["y"]+1]!='#')
        archive["y"]++;
    }
    else if(fx=="zhong")
    {
      /*暂无*/
    }
    pd();
  }
