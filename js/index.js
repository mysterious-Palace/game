var name;
var ks;
var GAMEOVER;
var HP=100;       // 血量
var ATK=10;       // 攻击力
var DEF=10;       // 防御力
var FirstKey=0;   // 1号钥匙
var SecondKey=0;  // 2号钥匙
var ThirdKey=0;   // 3号钥匙
var Weapons=0;    // 武器
var Armor=0;      // 防具
var GOLD=0;       // 金钱
var tf=-1;        // 天赋
var bzcs=0;
var bz=0;
var si0=0;
var mmm=0;
var Wen1=0;
var zb=3;
var zd=0;
var jjj=0;
var jjjj=0;
var x=1,y=20;
var aHP=30;
var AHP=70;
var bHP=56;
var BHP=48;
var cHP=500;
var CHP=30;
var dHP=160;
var DHP=300;
var eHP=600;
var EHP=900;
var MHP=100000;
var aATK=15;
var AATK=22;
var bATK=24;
var BATK=181;
var cATK=25;
var CATK=999;
var dATK=97;
var DATK=666;
var eATK=999;
var EATK=1000;
var MATK=5000;
var aDEF=4;
var ADEF=8;
var bDEF=7;
var BDEF=0;
var cDEF=15;
var CDEF=0;
var dDEF=16;
var DDEF=50;
var eDEF=70;
var EDEF=100;
var MDEF=5000;
var aGOLD=1;
var AGOLD=3;
var bGOLD=2;
var BGOLD=5;
var cGOLD=6;
var CGOLD=8;
var dGOLD=8;
var DGOLD=100;
var eGOLD=100;
var EGOLD=300;
var MGOLD=10000;
var map=new Array(
                   " _________________ ####################################################################################################",
                   "|                 |#    1   !  ?# +   + |CCC#       U        CC  !        +2b#]*! @@!             ?#?3?#     操作     #",
                   "|                 |##########   #   X   |aaa###################  ###########]#### ##################   #上下左右键移动#",
                   "|                 |#            # +   + #   ] # + # + # + # ] #  aaaa        @ #? #  1  +  1  =  ? #   # (&)表示人--你#",
                   "|                 |#   ##################   # # #*# # #*# # # #  ###########!#  # #    这是题目    #   # (b)键打开说明#",
                   "|                 |#       112              # A # A # A # A # c  #       ab  ## # #   选项在下面   #   # (z)初始化游戏#",
                   "|                 |#   ############ ##############################@### #######  # ##################   # (a)使用天赋技#",
                   "|                 |#===#          # #              B      (    ]2#   # #?aaaa  ## c**2转角遇到爱!!!#   #注：用英文输入#",
                   "|                 |#              # #ababababababab######C#A######   #+#?aaaa   # ##################   ################",
                   "|                 |#===############A#   c 212 c    #      #      #   ########## # #   A:2     <--- #ABC%  |*|*|*|*|*|*#",
                   "|                 |# ? C*]    (A+A2+#bababababababa#  ++  #  ++  #   B # C # c  # #   B:10    这是 #   #  #############",
                   "|                 |################## ############ #      #      # 2 # # # # # ## #   c:田    选项 #   #  |]|]|]|]|]|]#",
                   "|                 |#   A       *                   #AA#########CC# * # # # # #  # ##################   #  #############",
                   "|                 |#   A       *                   %      )      # * # c # C ##   !d1              d   #  |+|+|+|+|+|+#",
                   "|                 |#   #############################!!!##############################################@#################",
                   "|                 |#          12       C          ?#                                                   #魔鬼长廊(小心)#",
                   "|_________________|############################## ################################################################### #",
                   "#                                              *]+ #33#aaa#aaa#aaa#aaa#aaa#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#",
                   "#%# ################################################ ##a#a#a#a#a#a#a#a#a#a#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#",
                   "#@#              C+*+*Cd?12#     #?3%3C%3C%3C%3C%3++1aaa#aaa#aaa#aaa#aaa#a%C++C++C++C++C++C++C++C++C++C++C++C++C++C++ #",
                   "#!######=####### ###########12321#################################################################################### #",
                   "#*a]+#*A d)+a**# #作者不会+#aaaaa#+####?#####?##************************###?#####?###12+*]aaaaaaaaaaaaaaaaaaa!CBAdcb# #",
                   "#a*b+#B* a!aa]]# #留下无用+#*****#?#EEEEE#EEEEE#]]]]]]]]]]]]]]]]]]]]]]]]#EEEEE#EEEEE#设计师不会设计两个连着的墙CBAdcba#",
                   "#]b*+#*C +(da++# #空格哦+++#bbbbb#+#eeEee#eeEee#++++++++++++++++++++++++#eeEee#eeEee#12+*]aaaaaaaaaaaaaaaaaaa!CBAdcb#a#",
                   "################ #=-=?@+@dd#+++++#?#DeeeD#DeeeD#++++++++++++++++++++++++#DeeeD#DeeeD#################################a#",
                   "#                ########dd#ccccc#+#DDDDD#DDDDD#]]]]]]]]]]]]]]]]]]]]]]]]#DDDDD#DDDDD# 商店 #B*B+Ad% ?<--300￥买钥匙3#1#",
                   "#!aaaaaaaaaaaaaaa#         !]]]]]#?#DDDDD#DDDDD#************************#DDDDD#DDDDD########*B*A+A# ?<--200￥买钥匙2#2#",
                   "#                #ddddddddddd#####E###%#####%#############====#############%####%###?EEEEEE!B*B+A@# ?<--100￥买钥匙1#a#",
                   "#bbbbbbbbbbbbbbb!#################                                               |?M<--BOOS######!###################a#",
                   "#                #接受涅槃重生吗?# ################################################?# 0000    0   0       0 0#重生点#a#",
                   "#@ccccccccccccccc#若接受,选A     # #生#                                             #      0  0 00   000000 0#?<----#C#",
                   "#                #若不接受,选B   # #死# ########################################### # 0 0   0 0    0  0   0 0    (  #C#",
                   "#ddddddddddddddd%#################?#门# #   #   #   #   #   #   #   #   #           # 0  0  0 0000  0 0 0 0 0 ##### #C#",
                   "#                #  ++A         ?# #->#?#?#   #   #   #   #   #   #   #   ###########  0  000       0   0 0   #?% # #1#",
                   "#!CCCCCCCCCCCCCC!# ############### ########################################?<-重生点#  000000000000000 00 0 0 #?@ # #2#",
                   "#++++++?C++++++++!  ++B         ?#    ] ] ] * * * + + + ] ] ] * * * + + +             0                 0   0 #?! C@!?#",
                   "#######################################################################################################################"
);
void Cout(y,x,str)
{
  
}
void tfsc()
{
  Cmd.HideCursor();
  if(tf==-1)
  {
    Seed();
    ifstream inf;
    ofstream outf;
    outf.open("D:\\mysterious_Palace\\game_archive\\system_tf.zsjm");
    outf<<rand()%5;
    outf.close();
    inf.open("D:\\mysterious_Palace\\game_archive\\system_tf.zsjm");
    inf>>tf;
    inf.close();
  }
  if(tf==0)
  {
    Cout(0,11,"| 天赋:治愈       |");
    Cout(0,12,"| 花费1ATK和1DEF  |");
    Cout(0,13,"| 提升10HP        |");
    Cout(0,14,"| ATK>0并且DEF>0  |");
    Cout(0,15,"| 即可使用        |");
  }
  if(tf==1)
  {
    Cout(0,11,"| 天赋:自爆("+varToString(zb)+"次)  |");
    Cout(0,12,"| 将HP化为1,摧毁  |");
    Cout(0,13,"| 以自身为中心的  |");
    Cout(0,14,"| 5*7区域         |");
    Cout(0,15,"| HP>=70即可使用  |");
  }
  if(tf==2)
  {
    Cout(0,11,"| 天赋:中毒       |");
    Cout(0,12,"| 加油吧!年轻人   |");
    Cout(0,13,"| 希望你能抗毒哦  |");
    Cout(0,14,"| 走一步,掉一滴血 |");
    Cout(0,15,"|(每掉十滴有惊喜!)|");
    GAMEOVER='2';
    zd++;
    if(zd%10==1)
    {
      ATK++;
      DEF++;
    }
    HP--;
  }
  if(tf==3)
  {
    Cout(0,11,"| 天赋:无         |");
    Cout(0,12,"|                 |");
    Cout(0,13,"|                 |");
    Cout(0,14,"|                 |");
    Cout(0,15,"|                 |");
  }
  if(tf==4)
  {
    Cout(0,11,"| 天赋:无         |");
    Cout(0,12,"|                 |");
    Cout(0,13,"|                 |");
    Cout(0,14,"|                 |");
    Cout(0,15,"|                 |");
  }
  if(tf==5)
  {
    Cout(0,11,"| 天赋:战神降临   |");
    Cout(0,12,"| 条件:HP>5000    |");
    Cout(0,13,"| [不然会死]      |");
    Cout(0,14,"| ATK+99999,DEF=0 |");
    Cout(0,15,"| HP+5000         |");
  }
}
var tj,jj,sj;
var td,jd,sd;
var qt_tot=0;
var qt[101];
void jrwp(var a)
{
  qt[++qt_tot]=a;
}
void jz(var b)
{
  if(b=="铁剑")
    tj++;
  if(b=="金剑")
    jj++;
  if(b=="圣剑")
    sj++;
  if(b=="铁盾")
    td++;
  if(b=="金盾")
    jd++;
  if(b=="圣盾")
    sd++;
}
void wupin()
{
  Cout(0,0, "------------------------------------------------------------------------------------------------------------------------");
  Cout(0,1, "|                                                                                                                      |");
  Cout(0,2, "|                                                                                                                      |");
  Cout(0,3, "|                                                                                                                      |");
  Cout(0,4, "|                                                                                                                      |");
  Cout(0,5, "|                                                                                                                      |");
  Cout(0,6, "|                                                                                                                      |");
  Cout(0,7, "|                                                                                                                      |");
  Cout(0,8, "|                                                                                                                      |");
  Cout(0,9, "|                                                                                                                      |");
  Cout(0,10,"|                                                                                                                      |");
  Cout(0,11,"|                                                                                                                      |");
  Cout(0,12,"|                                                                                                                      |");
  Cout(0,13,"|                                                                                                                      |");
  Cout(0,14,"|                                                                                                                      |");
  Cout(0,15,"|                                                                                                                      |");
  Cout(0,16,"|                                                                                                                      |");
  Cout(0,17,"|                                                                                                                      |");
  Cout(0,18,"|                                                                                                                      |");
  Cout(0,19,"|                                                                                                                      |");
  Cout(0,20,"|                                                                                                                      |");
  Cout(0,21,"|                                                                                                                      |");
  Cout(0,22,"|                                                                                                                      |");
  Cout(0,23,"|                                                                                                                      |");
  Cout(0,24,"|                                                                                                                      |");
  Cout(0,25,"|                                                                                                                      |");
  Cout(0,26,"|                                                                                                                      |");
  Cout(0,27,"|                                                                                                                      |");
  Cout(0,28,"|                                                                                                                      |");
  Cout(0,29,"|                                                                                                                      |");
  Cout(0,30,"|                                                                                                                      |");
  Cout(0,31,"------------------------------------------------------------------------------------------------------------------------");
  for(var o=32; o<=37; o++)
    Cout(0,o,"                                                                                                                       ");
  var tot=0;
  Cout(1,++tot,"                                                      ***物品栏***");
  Cout(1,++tot,"获得武器/防具：");
  if(!(tj+jj+sj+td+jd+sd))
    Cout(1,++tot," 无");
  else
  {
    if(tj)
      Cout(1,++tot," U [铁剑] ： ATK+10  DEF+1    拥有"+varToString(tj)+"个");
    if(jj)
      Cout(1,++tot," V [金剑] ： ATK+50  DEF+5    拥有"+varToString(jj)+"个");
    if(sj)
      Cout(1,++tot," U [圣剑] ： ATK+100 DEF+10   拥有"+varToString(sj)+"个");
    if(td)
      Cout(1,++tot," U [铁盾] ： ATK+1  DEF+10    拥有"+varToString(td)+"个");
    if(jd)
      Cout(1,++tot," V [金盾] ： ATK+5  DEF+50    拥有"+varToString(jd)+"个");
    if(sd)
      Cout(1,++tot," U [圣盾] ： ATK+10 DEF+100   拥有"+varToString(sd)+"个");
  }
  Cout(1,++tot,"其他物品：");
  if(qt_tot==0)
    Cout(1,++tot," 无");
  else
    for(var i=tot+1,j=1; i<=30&&j<=qt_tot; i++,j++)
      Cout(1,i,qt[j]);
}
  ifstream inf;
  system ("md D:\\mysterious_Palace\\game_archive");
  Cmd.Clear();
  Cmd.Size(122,61);
  Cmd.HideCursor();//隐藏光标
  Cmd.Clear();
  if(tf==2)
  {
    HP+=36,map[5][62]='c';
    map[1][87]='+',map[1][91]='+',map[1][95]='d';
  }
  else
  {
    HP+=45;
    map[5][62]='b',map[1][86]='b',map[1][87]='b',map[1][88]='b',map[1][91]='+',map[1][94]='b',map[1][95]='b',map[1][96]='b';
    map[10][26]='+',map[10][27]='+',map[10][28]='+';
  }
  for(var i=0; i<37; i++)
  {
    for(var j=0; j<121; j++)
      if((i==25||i==26||i==27)&&(j==105||j==106))
        cout<<'0';
      else
      {
        if(map[i][j]=='0')
          map[i][j]=' ',si0=1;
        cout<<map[i][j];
        if(si0==1)
          map[i][j]='0';
        si0=0;
      }
    cout<<endl;
  }
  map[28][32]=' ',map[27][32]=' ';
  inf.open("D:\\mysterious_Palace\\game_archive\\system_tf.zsjm");
  inf>>tf;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_X.zsjm");
  inf>>x;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_Y.zsjm");
  inf>>y;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_HP.zsjm");
  inf>>HP;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_ATK.zsjm");
  inf>>ATK;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_DEF.zsjm");
  inf>>DEF;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_FirstKey.zsjm");
  inf>>FirstKey;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_SecondKey.zsjm");
  inf>>SecondKey;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_ThirdKey.zsjm");
  inf>>ThirdKey;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_Weapons.zsjm");
  inf>>Weapons;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_Armor.zsjm");
  inf>>Armor;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_GOLD.zsjm");
  inf>>GOLD;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_name.zsjm");
  inf>>name;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_ks.zsjm");
  inf>>ks;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_tj.zsjm");
  inf>>tj;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_jj.zsjm");
  inf>>jj;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_sj.zsjm");
  inf>>sj;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_td.zsjm");
  inf>>td;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_jd.zsjm");
  inf>>jd;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_sd.zsjm");
  inf>>sd;
  inf.close();
  inf.open("D:\\mysterious_Palace\\game_archive\\system_qt.zsjm");
  while(getline(inf,qt[++qt_tot]));
  qt_tot--;
  inf.close();
  map[x][y]=' ';
  Cout(y,x,"&");
  while(1)
  {
    Cout(0,1,"| ");
    if(ks==-1)
    {
      color(4);
      cout<<name<<"-[红名]";
      color(7);
    }
    if(ks==0)
    {
      color(1);
      cout<<name<<"-[蓝名]";
      color(7);
    }
    if(ks==1)
    {
      color(5);
      cout<<name<<"-[紫名]";
      color(7);
    }
    Cout(0,2,"| HP:             |");
    Cout(0,2,"| HP:"+varToString(HP));
    Cout(0,3,"| ATK:            |");
    Cout(0,3,"| ATK:"+varToString(ATK));
    Cout(0,4,"| DEF:            |");
    Cout(0,4,"| DEF:"+varToString(DEF));
    Cout(0,5,"| 1号钥匙:        |");
    Cout(0,5,"| 1号钥匙:"+varToString(FirstKey));
    Cout(0,6,"| 2号钥匙:        |");
    Cout(0,6,"| 2号钥匙:"+varToString(SecondKey));
    Cout(0,7,"| 3号钥匙:        |");
    Cout(0,7,"| 3号钥匙:"+varToString(ThirdKey));
    Cout(0,8,"| 武器:"+varToString(Weapons)+"个");
    Cout(0,9,"| 防具:"+varToString(Armor)+"个");
    Cout(0,10,"| 金钱:           |");
    Cout(0,10,"| 金钱:"+varToString(GOLD));
    tfsc();
    for(var d=0; d<1; d++)
    {
      var c=Cmd.GetKey();
      if(c==48&&jjj==0)
      {
        Cout(0,0, "------------------------------------------------------------------------------------------------------------------------");
        Cout(0,1, "|                                                                                                                      |");
        Cout(0,2, "|                                                                                                                      |");
        Cout(0,3, "|                                                                                                                      |");
        Cout(0,4, "|                                                                                                                      |");
        Cout(0,5, "|                                                                                                                      |");
        Cout(0,6, "|                                                                                                                      |");
        Cout(0,7, "|                                                                                                                      |");
        Cout(0,8, "|                                                                                                                      |");
        Cout(0,9, "|                                                                                                                      |");
        Cout(0,10,"|                                                                                                                      |");
        Cout(0,11,"|                                                                                                                      |");
        Cout(0,12,"|                                                                                                                      |");
        Cout(0,13,"|                                                                                                                      |");
        Cout(0,14,"|                                                                                                                      |");
        Cout(0,15,"|                                                                                                                      |");
        Cout(0,16,"|                                                                                                                      |");
        Cout(0,17,"|                                                                                                                      |");
        Cout(0,18,"|                                                                                                                      |");
        Cout(0,19,"|                                                                                                                      |");
        Cout(0,20,"|                                                                                                                      |");
        Cout(0,21,"|                                                                                                                      |");
        Cout(0,22,"|                                                                                                                      |");
        Cout(0,23,"|                                                                                                                      |");
        Cout(0,24,"|                                                                                                                      |");
        Cout(0,25,"|                                                                                                                      |");
        Cout(0,26,"|                                                                                                                      |");
        Cout(0,27,"|                                                                                                                      |");
        Cout(0,28,"|                                                                                                                      |");
        Cout(0,29,"|                                                                                                                      |");
        Cout(0,30,"|                                                                                                                      |");
        Cout(0,31,"------------------------------------------------------------------------------------------------------------------------");
        Cout(1,1, "游戏介绍:                                                                                                             ");
        Cout(1,2, "这可不仅仅是个迷宫，更是一个闯关和坑爹游戏，里面有很多陷阱、道具、怪物（虽然全部用了符号表示）等着你，你要利用你的智商");
        Cout(1,3, "（连250都不如的249）杀出去，杀出这个鬼地方，活下来。                                                                  ");
        Cout(1,4, "----------------------------------------------------------------------------------------------------------------------");
        Cout(1,5, "游戏说明:                                                                                                             ");
        Cout(1,6, "   a b c d e A B C D E 表示怪物。(注意:怪物也可能是隐藏的,你看不见,要小心别被阴)                                      ");
        Cout(1,7, "   U V W 分别表示铁剑、金剑、圣剑。                                                                                   ");
        Cout(1,8, "   X Y Z 分别表示铁盾、金盾、圣盾。                                                                                   ");
        Cout(1,9, "   1 2 3是钥匙，！@ % 表示对应的门。                                                                                  ");
        Cout(1,10,"   HP 是血量，当血量为零时，游戏结束。                                                                                ");
        Cout(1,11,"   ATK 是攻击力，攻击力越高，对怪物的伤害越高。                                                                       ");
        Cout(1,12,"   DEF 是防御力，防御力越高，受到的伤害越少。                                                                         ");
        Cout(1,13,"   * 是攻击宝石，能加2点攻击力。                                                                                      ");
        Cout(1,14,"   ] 是防御宝石，能加2点防御力。                                                                                      ");
        Cout(1,15,"   + 是血瓶，能加200点血量。                                                                                          ");
        Cout(1,16,"   | = 是特殊门，只能在特定的情况下打开。                                                                             ");
        Cout(1,17,"   ) ( 是单向门，只能从开着的一侧走到闭着的一侧。                                                                     ");
        Cout(1,18,"   ?是机关，有好的也有坏的，可能能开启特殊门，也有可能飞到神秘地点，还有可能直接GAMEOVER，甚至......                  ");
        Cout(1,19,"----------------------------------------------------------------------------------------------------------------------");
        Cout(1,20,"各怪物战斗力:                                                                                                         ");
        Cout(1,21,"  a: HP="+varToString(aHP)+", ATK="+varToString(aATK)+", DEF="+varToString(aDEF)+", GOLD="+varToString(aGOLD)+";");
        Cout(1,22,"  b: HP="+varToString(bHP)+", ATK="+varToString(bATK)+", DEF="+varToString(bDEF)+", GOLD="+varToString(bGOLD)+";");
        Cout(1,23,"  c: HP="+varToString(cHP)+", ATK="+varToString(cATK)+", DEF="+varToString(cDEF)+", GOLD="+varToString(cGOLD)+";");
        Cout(1,24,"  d: HP="+varToString(dHP)+", ATK="+varToString(dATK)+", DEF="+varToString(dDEF)+", GOLD="+varToString(dGOLD)+";");
        Cout(1,25,"  e: HP="+varToString(eHP)+", ATK="+varToString(eATK)+", DEF="+varToString(eDEF)+", GOLD="+varToString(eGOLD)+";");
        Cout(1,26,"  A: HP="+varToString(AHP)+", ATK="+varToString(AATK)+", DEF="+varToString(ADEF)+", GOLD="+varToString(AGOLD)+";");
        Cout(1,27,"  B: HP="+varToString(BHP)+", ATK="+varToString(BATK)+", DEF="+varToString(BDEF)+", GOLD="+varToString(BGOLD)+";");
        Cout(1,28,"  C: HP="+varToString(CHP)+", ATK="+varToString(CATK)+", DEF="+varToString(CDEF)+", GOLD="+varToString(CGOLD)+";");
        Cout(1,29,"  D: HP="+varToString(DHP)+", ATK="+varToString(DATK)+", DEF="+varToString(DDEF)+", GOLD="+varToString(DGOLD)+";");
        Cout(1,30,"  E: HP="+varToString(EHP)+", ATK="+varToString(EATK)+", DEF="+varToString(EDEF)+", GOLD="+varToString(EGOLD)+";");
        for(var o=32; o<=37; o++)
          Cout(0,o,"                                                                                                                       ");
        jjj=1;
      }
      else if(c==48&&jjj==1)
      {
        Cmd.Clear();
        map[28][32]='#',map[27][32]='#';
        if(mmm==1)
          map[7][20]='#',map[7][21]='#',map[7][22]='#';
        if(Wen1==1)
        {
          map[7][24]='1',map[7][25]='C',map[7][26]='1',map[7][27]='C',map[7][28]='1',map[7][29]='C',map[7][30]='1',map[7][31]='C',map[7][32]='1',map[7][33]='?';
          map[8][24]='C',map[8][25]='2',map[8][26]='C',map[8][27]='2',map[8][28]='C',map[8][29]='2',map[8][30]='C',map[8][31]='2',map[8][32]='C',map[8][33]='2';
        }
        for(var i=0; i<37; i++)
        {
          for(var j=0; j<121; j++)
            if((i==25||i==26||i==27)&&(j==105||j==106))
              cout<<'0';
            else
            {
              if(map[i][j]=='0')
                map[i][j]=' ',si0=1;
              cout<<map[i][j];
              if(si0==1)
                map[i][j]='0';
              si0=0;
            }
          cout<<endl;
        }
        map[28][32]=' ',map[27][32]=' ';
        if(mmm==1)
          map[7][20]=' ',map[7][21]=' ',map[7][22]=' ';
        Cout(y,x,"&");
        Cout(0,1,"| ");
        if(ks==-1)
        {
          color(4);
          cout<<name<<"-[红名]";
          color(7);
        }
        if(ks==0)
        {
          color(1);
          cout<<name<<"-[蓝名]";
          color(7);
        }
        if(ks==1)
        {
          color(5);
          cout<<name<<"-[紫名]";
          color(7);
        }
        Cout(0,2,"| HP:             |");
        Cout(0,2,"| HP:"+varToString(HP));
        Cout(0,3,"| ATK:            |");
        Cout(0,3,"| ATK:"+varToString(ATK));
        Cout(0,4,"| DEF:            |");
        Cout(0,4,"| DEF:"+varToString(DEF));
        Cout(0,5,"| 1号钥匙:        |");
        Cout(0,5,"| 1号钥匙:"+varToString(FirstKey));
        Cout(0,6,"| 2号钥匙:        |");
        Cout(0,6,"| 2号钥匙:"+varToString(SecondKey));
        Cout(0,7,"| 3号钥匙:        |");
        Cout(0,7,"| 3号钥匙:"+varToString(ThirdKey));
        Cout(0,8,"| 武器:"+varToString(Weapons)+"个");
        Cout(0,9,"| 防具:"+varToString(Armor)+"个");
        Cout(0,10,"| 金钱:           |");
        Cout(0,10,"| 金钱:"+varToString(GOLD));
        tfsc();
        jjj=0;
      }
      if(c==50&&jjjj==0)
      {
        wupin();
        jjjj=1;
      }
      else if(c==50&&jjjj==1)
      {
        Cmd.Clear();
        map[28][32]='#',map[27][32]='#';
        if(mmm==1)
          map[7][20]='#',map[7][21]='#',map[7][22]='#';
        if(Wen1==1)
        {
          map[7][24]='1',map[7][25]='C',map[7][26]='1',map[7][27]='C',map[7][28]='1',map[7][29]='C',map[7][30]='1',map[7][31]='C',map[7][32]='1',map[7][33]='?';
          map[8][24]='C',map[8][25]='2',map[8][26]='C',map[8][27]='2',map[8][28]='C',map[8][29]='2',map[8][30]='C',map[8][31]='2',map[8][32]='C',map[8][33]='2';
        }
        for(var i=0; i<37; i++)
        {
          for(var j=0; j<121; j++)
            if((i==25||i==26||i==27)&&(j==105||j==106))
              cout<<'0';
            else
            {
              if(map[i][j]=='0')
                map[i][j]=' ',si0=1;
              cout<<map[i][j];
              if(si0==1)
                map[i][j]='0';
              si0=0;
            }
          cout<<endl;
        }
        map[28][32]=' ',map[27][32]=' ';
        if(mmm==1)
          map[7][20]=' ',map[7][21]=' ',map[7][22]=' ';
        Cout(y,x,"&");
        Cout(0,1,"| ");
        if(ks==-1)
        {
          color(4);
          cout<<name<<"-[红名]";
          color(7);
        }
        if(ks==0)
        {
          color(1);
          cout<<name<<"-[蓝名]";
          color(7);
        }
        if(ks==1)
        {
          color(5);
          cout<<name<<"-[紫名]";
          color(7);
        }
        Cout(0,2,"| HP:             |");
        Cout(0,2,"| HP:"+varToString(HP));
        Cout(0,3,"| ATK:            |");
        Cout(0,3,"| ATK:"+varToString(ATK));
        Cout(0,4,"| DEF:            |");
        Cout(0,4,"| DEF:"+varToString(DEF));
        Cout(0,5,"| 1号钥匙:        |");
        Cout(0,5,"| 1号钥匙:"+varToString(FirstKey));
        Cout(0,6,"| 2号钥匙:        |");
        Cout(0,6,"| 2号钥匙:"+varToString(SecondKey));
        Cout(0,7,"| 3号钥匙:        |");
        Cout(0,7,"| 3号钥匙:"+varToString(ThirdKey));
        Cout(0,8,"| 武器:"+varToString(Weapons)+"个");
        Cout(0,9,"| 防具:"+varToString(Armor)+"个");
        Cout(0,10,"| 金钱:           |");
        Cout(0,10,"| 金钱:"+varToString(GOLD));
        tfsc();
        jjjj=0;
      }
      if(c==30&&tf==0&&ATK>0&&DEF>0)
      {
        ATK--;
        DEF--;
        HP+=10;
        Cout(0,2,"| HP:             |");
        Cout(0,2,"| HP:"+varToString(HP)+"   ");
        Cout(0,3,"| ATK:            |");
        Cout(0,3,"| ATK:"+varToString(ATK)+"   ");
        Cout(0,4,"| DEF:            |");
        Cout(0,4,"| DEF:"+varToString(DEF)+"   ");
      }
      if(c==30&&tf==1&&HP>=70&&zb>0)
      {
        Cout(y-1,x-1,"***");
        Cout(y-1,x,  "* *");
        Cout(y-1,x+1,"***");
        Sleep(100);
        Cout(y-1,x-1,"   ");
        Cout(y-1,x,  " & ");
        Cout(y-1,x+1,"   ");
        Sleep(100);
        Cout(y-2,x-2,"*****");
        Cout(y-2,x-1,"*   *");
        Cout(y-2,x,  "*   *");
        Cout(y-2,x+1,"*   *");
        Cout(y-2,x+2,"*****");
        Sleep(100);
        Cout(y-3,x-2,"       ");
        Cout(y-3,x-1,"       ");
        Cout(y-3,x,  "   &   ");
        Cout(y-3,x+1,"       ");
        Cout(y-3,x+2,"       ");
        map[x-2][y-3]=' ',map[x-2][y-2]=' ',map[x-2][y-1]=' ',map[x-2][y]=' ',map[x-2][y+1]=' ',map[x-2][y+2]=' ',map[x-2][y+3]=' ';
        map[x-1][y-3]=' ',map[x-1][y-2]=' ',map[x-1][y-1]=' ',map[x-1][y]=' ',map[x-1][y+1]=' ',map[x-1][y+2]=' ',map[x-1][y+3]=' ';
        map[x][y-3]=' ',  map[x][y-2]=' ',  map[x][y-1]=' ',  map[x][y]=' ',  map[x][y+1]=' ',  map[x][y+2]=' ',  map[x][y+3]=' ';
        map[x+1][y-3]=' ',map[x+1][y-2]=' ',map[x+1][y-1]=' ',map[x+1][y]=' ',map[x+1][y+1]=' ',map[x+1][y+2]=' ',map[x+1][y+3]=' ';
        map[x+2][y-3]=' ',map[x+2][y-2]=' ',map[x+2][y-1]=' ',map[x+2][y]=' ',map[x+2][y+1]=' ',map[x+2][y+2]=' ',map[x+2][y+3]=' ';
        HP=1;
        zb--;
        Cout(0,2,"| HP:             |");
        Cout(0,2,"| HP:"+varToString(HP)+"   ");
        Cout(0,11,"|                 |");
        Cout(0,11,"| 天赋:自爆("+varToString(zb)+"次)  |");
      }
      if(tf==2) {};
      if(tf==3) {};
      if(tf==4) {};
      if(c==44)
      {
        var xl;
        Cmd.Clear();
        cout<<"|---------------------------------|\n";
        cout<<"|                                 |\n";
        cout<<"|  是否初始化此关卡[请谨慎选择]   |\n";
        cout<<"|                                 |\n";
        cout<<"|  1.是[初始化游戏,重新开始游戏]  |\n";
        cout<<"|  2.否[返回游戏页面,继续游戏]    |\n";
        cout<<"|                                 |\n";
        cout<<"|---------------------------------|\n";
        cout<<"请输入:";
        cin>>xl;
        var x1=11,x2=12,x3=13;
        if(xl==1)
        {
          cout<<"-->-->-->-->-->-->-->-->-->-->-->\n";
          cout<<"加载中......\n";
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|                    |");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_X.zsjm");
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|■                  |");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_Y.zsjm");
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|■■                |");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_HP.zsjm");
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|■■■              |");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_ATK.zsjm");
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|■■■■            |");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_DEF.zsjm");
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|■■■■■          |");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_FirstKey.zsjm");
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|■■■■■■        |");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_SecondKey.zsjm");
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|■■■■■■■      |");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_ThirdKey.zsjm");
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|■■■■■■■■    |");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_Weapons.zsjm");
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|■■■■■■■■■  |");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_Armor.zsjm");
          Cout(0,x1,"|--------------------|");
          Cout(0,x2,"|■■■■■■■■■■|");
          Cout(0,x3,"|--------------------|");
          cout<<'\n';
          system("del D:\\mysterious_Palace\\game_archive\\system_GOLD.zsjm");
          Cmd.Clear();
          cout<<"                                \n";
          cout<<"  ******************************\n";
          cout<<"  *已成功初始化                *\n";
          cout<<"  *重开及生效[按下回车关闭游戏]*\n";
          cout<<"  ******************************\n";
          return 0;
        }
        else
        {
          Cmd.Clear();
          map[28][32]='#',map[27][32]='#';
          if(mmm==1)
            map[7][20]='#',map[7][21]='#',map[7][22]='#';
          if(Wen1==1)
          {
            map[7][24]='1',map[7][25]='C',map[7][26]='1',map[7][27]='C',map[7][28]='1',map[7][29]='C',map[7][30]='1',map[7][31]='C',map[7][32]='1',map[7][33]='?';
            map[8][24]='C',map[8][25]='2',map[8][26]='C',map[8][27]='2',map[8][28]='C',map[8][29]='2',map[8][30]='C',map[8][31]='2',map[8][32]='C',map[8][33]='2';
          }
          for(var i=0; i<37; i++)
          {
            for(var j=0; j<121; j++)
              if((i==25||i==26||i==27)&&(j==105||j==106))
                cout<<'0';
              else
              {
                if(map[i][j]=='0')
                  map[i][j]=' ',si0=1;
                cout<<map[i][j];
                if(si0==1)
                  map[i][j]='0';
                si0=0;
              }
            cout<<endl;
          }
          map[28][32]=' ',map[27][32]=' ';
          if(mmm==1)
            map[7][20]=' ',map[7][21]=' ',map[7][22]=' ';
          Cout(y,x,"&");
          Cout(0,1,"| ");
          if(ks==-1)
          {
            color(4);
            cout<<name<<"-[红名]";
            color(7);
          }
          if(ks==0)
          {
            color(1);
            cout<<name<<"-[蓝名]";
            color(7);
          }
          if(ks==1)
          {
            color(5);
            cout<<name<<"-[紫名]";
            color(7);
          }
          Cout(0,2,"| HP:             |");
          Cout(0,2,"| HP:"+varToString(HP));
          Cout(0,3,"| ATK:            |");
          Cout(0,3,"| ATK:"+varToString(ATK));
          Cout(0,4,"| DEF:            |");
          Cout(0,4,"| DEF:"+varToString(DEF));
          Cout(0,5,"| 1号钥匙:        |");
          Cout(0,5,"| 1号钥匙:"+varToString(FirstKey));
          Cout(0,6,"| 2号钥匙:        |");
          Cout(0,6,"| 2号钥匙:"+varToString(SecondKey));
          Cout(0,7,"| 3号钥匙:        |");
          Cout(0,7,"| 3号钥匙:"+varToString(ThirdKey));
          Cout(0,8,"| 武器:"+varToString(Weapons)+"个");
          Cout(0,9,"| 防具:"+varToString(Armor)+"个");
          Cout(0,10,"| 金钱:           |");
          Cout(0,10,"| 金钱:"+varToString(GOLD));
          tfsc();
        }
      }
      if(c==25)
      {
        var xl;
        Cmd.Clear();
        cout<<"-------------[作者专用]------------\n";
        cout<<"请输入解锁密码:";
        cin>>xl;
        if(xl=="mp-gly")
        {
          Cout(0,1,"请输入解锁密码:******");
          cout<<'\n';
          cout<<"是否永久更改[1为是,0为否]:";
          var llx;
          cin>>llx;
          cout<<"请输入HP：";
          cin>>HP;
          cout<<"请输入ATK：";
          cin>>ATK;
          cout<<"请输入DEF：";
          cin>>DEF;
          cout<<"请输入1号钥匙：";
          cin>>FirstKey;
          cout<<"请输入2号钥匙：";
          cin>>SecondKey;
          cout<<"请输入3号钥匙：";
          cin>>ThirdKey;
          cout<<"请输入金钱：";
          cin>>GOLD;
          if(llx==1)
          {
            ofstream outf;
            outf.open("D:\\mysterious_Palace\\game_archive\\system_HP.zsjm");
            outf<<HP;
            outf.close();
            outf.open("D:\\mysterious_Palace\\game_archive\\system_ATK.zsjm");
            outf<<ATK;
            outf.close();
            outf.open("D:\\mysterious_Palace\\game_archive\\system_DEF.zsjm");
            outf<<DEF;
            outf.close();
            outf.open("D:\\mysterious_Palace\\game_archive\\system_FirstKey.zsjm");
            outf<<FirstKey;
            outf.close();
            outf.open("D:\\mysterious_Palace\\game_archive\\system_SecondKey.zsjm");
            outf<<SecondKey;
            outf.close();
            outf.open("D:\\mysterious_Palace\\game_archive\\system_ThirdKey.zsjm");
            outf<<ThirdKey;
            outf.close();
            outf.open("D:\\mysterious_Palace\\game_archive\\system_GOLD.zsjm");
            outf<<GOLD;
            outf.close();
          }
          cout<<"操作成功! (按下回车返回游戏)";
        }
        else
          cout<<"输入错误! (按下回车返回游戏)";
        getchar();
        getchar();
        Cmd.Clear();
        map[28][32]='#',map[27][32]='#';
        if(mmm==1)
          map[7][20]='#',map[7][21]='#',map[7][22]='#';
        if(Wen1==1)
        {
          map[7][24]='1',map[7][25]='C',map[7][26]='1',map[7][27]='C',map[7][28]='1',map[7][29]='C',map[7][30]='1',map[7][31]='C',map[7][32]='1',map[7][33]='?';
          map[8][24]='C',map[8][25]='2',map[8][26]='C',map[8][27]='2',map[8][28]='C',map[8][29]='2',map[8][30]='C',map[8][31]='2',map[8][32]='C',map[8][33]='2';
        }
        for(var i=0; i<37; i++)
        {
          for(var j=0; j<121; j++)
            if((i==25||i==26||i==27)&&(j==105||j==106))
              cout<<'0';
            else
            {
              if(map[i][j]=='0')
                map[i][j]=' ',si0=1;
              cout<<map[i][j];
              if(si0==1)
                map[i][j]='0';
              si0=0;
            }
          cout<<endl;
        }
        map[28][32]=' ',map[27][32]=' ';
        if(mmm==1)
          map[7][20]=' ',map[7][21]=' ',map[7][22]=' ';
        Cout(y,x,"&");
        Cout(0,1,"| ");
        if(ks==-1)
        {
          color(4);
          cout<<name<<"-[红名]";
          color(7);
        }
        if(ks==0)
        {
          color(1);
          cout<<name<<"-[蓝名]";
          color(7);
        }
        if(ks==1)
        {
          color(5);
          cout<<name<<"-[紫名]";
          color(7);
        }
        Cout(0,2,"| HP:             |");
        Cout(0,2,"| HP:"+varToString(HP));
        Cout(0,3,"| ATK:            |");
        Cout(0,3,"| ATK:"+varToString(ATK));
        Cout(0,4,"| DEF:            |");
        Cout(0,4,"| DEF:"+varToString(DEF));
        Cout(0,5,"| 1号钥匙:        |");
        Cout(0,5,"| 1号钥匙:"+varToString(FirstKey));
        Cout(0,6,"| 2号钥匙:        |");
        Cout(0,6,"| 2号钥匙:"+varToString(SecondKey));
        Cout(0,7,"| 3号钥匙:        |");
        Cout(0,7,"| 3号钥匙:"+varToString(ThirdKey));
        Cout(0,8,"| 武器:"+varToString(Weapons)+"个");
        Cout(0,9,"| 防具:"+varToString(Armor)+"个");
        tfsc();
        Cout(0,10,"| 金钱:           |");
        Cout(0,10,"| 金钱:"+varToString(GOLD));
      }
      if(c==72 && map[x-1][y]==' ')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
      }
      else if(c==80 && map[x+1][y]==' ')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
      }
      else if(c==75 && map[x][y-1]==' ')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
      }
      else if(c==77 && map[x][y+1]==' ')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
      }
      else if(c==77 && map[x][y+1]=='1')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        FirstKey+=1;
      }
      else if(c==75 && map[x][y-1]=='1')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        FirstKey+=1;
      }
      else if(c==80 && map[x+1][y]=='1')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        FirstKey+=1;
      }
      else if(c==72 && map[x-1][y]=='1')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        FirstKey+=1;
      }
      else if(c==77 && map[x][y+1]=='!' && FirstKey>=1)
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        FirstKey-=1;
      }
      else if(c==75 && map[x][y-1]=='!' && FirstKey>=1)
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        FirstKey-=1;
      }
      else if(c==80 && map[x+1][y]=='!' && FirstKey>=1)
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        FirstKey-=1;
      }
      else if(c==72 && map[x-1][y]=='!' && FirstKey>=1)
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        FirstKey-=1;
      }
      else if(c==77 && map[x][y+1]=='2')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        SecondKey+=1;
      }
      else if(c==75 && map[x][y-1]=='2')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        SecondKey+=1;
      }
      else if(c==80 && map[x+1][y]=='2')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        SecondKey+=1;
      }
      else if(c==72 && map[x-1][y]=='2')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        SecondKey+=1;
      }
      else if(c==77 && map[x][y+1]=='@' && SecondKey>=1)
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        SecondKey-=1;
      }
      else if(c==75 && map[x][y-1]=='@' && SecondKey>=1)
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        SecondKey-=1;
      }
      else if(c==80 && map[x+1][y]=='@' && SecondKey>=1)
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        SecondKey-=1;
      }
      else if(c==72 && map[x-1][y]=='@' && SecondKey>=1)
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        SecondKey-=1;
      }
      else if(c==77 && map[x][y+1]=='3')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ThirdKey+=1;
      }
      else if(c==75 && map[x][y-1]=='3')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ThirdKey+=1;
      }
      else if(c==80 && map[x+1][y]=='3')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ThirdKey+=1;
      }
      else if(c==72 && map[x-1][y]=='3')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ThirdKey+=1;
      }
      else if(c==77 && map[x][y+1]=='%' && ThirdKey>=1)
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ThirdKey-=1;
      }
      else if(c==75 && map[x][y-1]=='%' && ThirdKey>=1)
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ThirdKey-=1;
      }
      else if(c==80 && map[x+1][y]=='%' && ThirdKey>=1)
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ThirdKey-=1;
      }
      else if(c==72 && map[x-1][y]=='%' && ThirdKey>=1)
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ThirdKey-=1;
      }
      else if(c==77 && map[x][y+1]=='a')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<aATK)
          HP-=aHP/ATK*aATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=aGOLD;
        GAMEOVER='a';
      }
      else if(c==75 && map[x][y-1]=='a')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<aATK)
          HP-=aHP/ATK*aATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=aGOLD;
        GAMEOVER='a';
      }
      else if(c==80 && map[x+1][y]=='a')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<aATK)
          HP-=aHP/ATK*aATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=aGOLD;
        GAMEOVER='a';
      }
      else if(c==72 && map[x-1][y]=='a')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<aATK)
          HP-=aHP/ATK*aATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=aGOLD;
        GAMEOVER='a';
      }
      else if(c==77 && map[x][y+1]=='b')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<bATK)
          HP-=bHP/ATK*bATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=bGOLD;
        GAMEOVER='b';
      }
      else if(c==75 && map[x][y-1]=='b')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<bATK)
          HP-=bHP/ATK*bATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=bGOLD;
        GAMEOVER='b';
      }
      else if(c==80 && map[x+1][y]=='b')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<bATK)
          HP-=bHP/ATK*bATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=bGOLD;
        GAMEOVER='b';
      }
      else if(c==72 && map[x-1][y]=='b')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<bATK)
          HP-=bHP/ATK*bATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=bGOLD;
        GAMEOVER='b';
      }
      else if(c==77 && map[x][y+1]=='c')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<cATK)
          HP-=cHP/ATK*cATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=cGOLD;
        GAMEOVER='c';
      }
      else if(c==75 && map[x][y-1]=='c')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<cATK)
          HP-=cHP/ATK*cATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=cGOLD;
        GAMEOVER='c';
      }
      else if(c==80 && map[x+1][y]=='c')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<cATK)
          HP-=cHP/ATK*cATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=cGOLD;
        GAMEOVER='c';
      }
      else if(c==72 && map[x-1][y]=='c')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<cATK)
          HP-=cHP/ATK*cATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=cGOLD;
        GAMEOVER='c';
      }
      else if(c==77 && map[x][y+1]=='d')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<dATK)
          HP-=dHP/ATK*dATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=dGOLD;
        GAMEOVER='d';
      }
      else if(c==75 && map[x][y-1]=='d')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<dATK)
          HP-=dHP/ATK*dATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=dGOLD;
        GAMEOVER='d';
      }
      else if(c==80 && map[x+1][y]=='d')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<dATK)
          HP-=dHP/ATK*dATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=dGOLD;
        GAMEOVER='d';
      }
      else if(c==72 && map[x-1][y]=='d')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<dATK)
          HP-=dHP/ATK*dATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=dGOLD;
        GAMEOVER='d';
      }
      else if(c==77 && map[x][y+1]=='e')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<eATK)
          HP-=eHP/ATK*eATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=eGOLD;
        GAMEOVER='e';
      }
      else if(c==75 && map[x][y-1]=='e')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<eATK)
          HP-=eHP/ATK*eATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=eGOLD;
        GAMEOVER='e';
      }
      else if(c==80 && map[x+1][y]=='e')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<eATK)
          HP-=eHP/ATK*eATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=eGOLD;
        GAMEOVER='e';
      }
      else if(c==72 && map[x-1][y]=='e')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<eATK)
          HP-=eHP/ATK*eATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=eGOLD;
        GAMEOVER='e';
      }
      else if(c==77 && map[x][y+1]=='A')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<AATK)
          HP-=AHP/ATK*AATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=AGOLD;
        GAMEOVER='A';
      }
      else if(c==75 && map[x][y-1]=='A')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<AATK)
          HP-=AHP/ATK*AATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=AGOLD;
        GAMEOVER='A';
      }
      else if(c==80 && map[x+1][y]=='A')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<AATK)
          HP-=AHP/ATK*AATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=AGOLD;
        GAMEOVER='A';
      }
      else if(c==72 && map[x-1][y]=='A')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<AATK)
          HP-=AHP/ATK*AATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=AGOLD;
        GAMEOVER='A';
      }
      else if(c==77 && map[x][y+1]=='B')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<BATK)
          HP-=BHP/ATK*BATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=BGOLD;
        GAMEOVER='B';
      }
      else if(c==75 && map[x][y-1]=='B')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<BATK)
          HP-=BHP/ATK*BATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=BGOLD;
        GAMEOVER='B';
      }
      else if(c==80 && map[x+1][y]=='B')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<BATK)
          HP-=BHP/ATK*BATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=BGOLD;
        GAMEOVER='B';
      }
      else if(c==72 && map[x-1][y]=='B')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<BATK)
          HP-=BHP/ATK*BATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=BGOLD;
        GAMEOVER='B';
      }
      else if(c==77 && map[x][y+1]=='C')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<CATK)
          HP-=CHP/ATK*CATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=CGOLD;
        GAMEOVER='C';
      }
      else if(c==75 && map[x][y-1]=='C')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<CATK)
          HP-=CHP/ATK*CATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=CGOLD;
        GAMEOVER='C';
      }
      else if(c==80 && map[x+1][y]=='C')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<CATK)
          HP-=CHP/ATK*CATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=CGOLD;
        GAMEOVER='C';
      }
      else if(c==72 && map[x-1][y]=='C')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<CATK)
          HP-=CHP/ATK*CATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=CGOLD;
        GAMEOVER='C';
      }
      else if(c==77 && map[x][y+1]=='D')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<DATK)
          HP-=DHP/ATK*DATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=DGOLD;
        GAMEOVER='D';
      }
      else if(c==75 && map[x][y-1]=='D')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<DATK)
          HP-=DHP/ATK*DATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=DGOLD;
        GAMEOVER='D';
      }
      else if(c==80 && map[x+1][y]=='D')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<DATK)
          HP-=DHP/ATK*DATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=DGOLD;
        GAMEOVER='D';
      }
      else if(c==72 && map[x-1][y]=='D')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<DATK)
          HP-=DHP/ATK*DATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=DGOLD;
        GAMEOVER='D';
      }
      else if(c==77 && map[x][y+1]=='E')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<EATK)
          HP-=EHP/ATK*EATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=EGOLD;
        GAMEOVER='E';
      }
      else if(c==75 && map[x][y-1]=='E')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<EATK)
          HP-=EHP/ATK*EATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=EGOLD;
        GAMEOVER='E';
      }
      else if(c==80 && map[x+1][y]=='E')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<EATK)
          HP-=EHP/ATK*EATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=EGOLD;
        GAMEOVER='E';
      }
      else if(c==72 && map[x-1][y]=='E')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<EATK)
          HP-=EHP/ATK*EATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=EGOLD;
        GAMEOVER='E';
      }
      else if(c==77 && map[x][y+1]=='M')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<MATK)
          HP-=MHP/ATK*MATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=MGOLD;
        GAMEOVER='M';
      }
      else if(c==75 && map[x][y-1]=='M')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<MATK)
          HP-=MHP/ATK*MATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=MGOLD;
        GAMEOVER='M';
      }
      else if(c==80 && map[x+1][y]=='M')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<MATK)
          HP-=MHP/ATK*MATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=MGOLD;
        GAMEOVER='M';
      }
      else if(c==72 && map[x-1][y]=='M')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF+=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        if(DEF<MATK)
          HP-=MHP/ATK*MATK-DEF;
        ATK-=tj*10+jj*50+sj*100+td*1+jd*5+sd*10;
        DEF-=tj*1+jj*5+sj*10+td*10+jd*50+sd*100;
        GOLD+=MGOLD;
        GAMEOVER='M';
      }
      else if(c==77 && map[x][y+1]=='+')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        HP+=200;
      }
      else if(c==75 && map[x][y-1]=='+')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        HP+=200;
      }
      else if(c==80 && map[x+1][y]=='+')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        HP+=200;
      }
      else if(c==72 && map[x-1][y]=='+')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        HP+=200;
      }
      else if(c==77 && map[x][y+1]==']')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        DEF+=2;
      }
      else if(c==75 && map[x][y-1]==']')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        DEF+=2;
      }
      else if(c==80 && map[x+1][y]==']')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        DEF+=2;
      }
      else if(c==72 && map[x-1][y]==']')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        DEF+=2;
      }
      else if(c==77 && map[x][y+1]=='*')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        ATK+=2;
      }
      else if(c==75 && map[x][y-1]=='*')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        ATK+=2;
      }
      else if(c==80 && map[x+1][y]=='*')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        ATK+=2;
      }
      else if(c==72 && map[x-1][y]=='*')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        ATK+=2;
      }
      else if(c==77 && map[x][y+1]=='0')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        GAMEOVER='0';
        HP=0;
      }
      else if(c==75 && map[x][y-1]=='0')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        GAMEOVER='0';
        HP=0;
      }
      else if(c==80 && map[x+1][y]=='0')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        GAMEOVER='0';
        HP=0;
      }
      else if(c==72 && map[x-1][y]=='0')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        GAMEOVER='0';
        HP=0;
      }
      else if(c==77 && map[x][y+1]=='U')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("铁剑");
      }
      else if(c==75 && map[x][y-1]=='U')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("铁剑");
      }
      else if(c==80 && map[x+1][y]=='U')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("铁剑");
      }
      else if(c==72 && map[x-1][y]=='U')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("铁剑");
      }
      else if(c==77 && map[x][y+1]=='V')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("金剑");
      }
      else if(c==75 && map[x][y-1]=='V')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("金剑");
      }
      else if(c==80 && map[x+1][y]=='V')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("金剑");
      }
      else if(c==72 && map[x-1][y]=='V')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("金剑");
      }
      else if(c==77 && map[x][y+1]=='W')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("圣剑");
      }
      else if(c==75 && map[x][y-1]=='W')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("圣剑");
      }
      else if(c==80 && map[x+1][y]=='W')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("圣剑");
      }
      else if(c==72 && map[x-1][y]=='W')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        Weapons++;
        jz("圣剑");
      }
      else if(c==77 && map[x][y+1]=='X')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        Armor++;
        jz("铁盾");
      }
      else if(c==75 && map[x][y-1]=='X')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        Armor++;
        jz("铁盾");
      }
      else if(c==80 && map[x+1][y]=='X')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        Armor++;
        jz("铁盾");
      }
      else if(c==72 && map[x-1][y]=='X')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        Armor++;
        jz("铁盾");
      }
      else if(c==77 && map[x][y+1]=='Y')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        Armor++;
        jz("金盾");
      }
      else if(c==75 && map[x][y-1]=='Y')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        Armor++;
        jz("金盾");
      }
      else if(c==80 && map[x+1][y]=='Y')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        Armor++;
        jz("金盾");
      }
      else if(c==72 && map[x-1][y]=='Y')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        Armor++;
        jz("金盾");
      }
      else if(c==77 && map[x][y+1]=='Z')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        Armor++;
        jz("圣盾");
      }
      else if(c==75 && map[x][y-1]=='Z')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        Armor++;
        jz("圣盾");
      }
      else if(c==80 && map[x+1][y]=='Z')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        Armor++;
        jz("圣盾");
      }
      else if(c==72 && map[x-1][y]=='Z')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        Armor++;
        jz("圣盾");
      }
      else if(c==77 && map[x][y+1]==')')
      {
        Cout(y,x," ");
        Cout(y+2,x,"&");
        y+=2;
      }
      else if(c==75 && map[x][y-1]=='(')
      {
        Cout(y,x," ");
        Cout(y-2,x,"&");
        y-=2;
      }
      else if(c==77 && x==1 && y+1==31)
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        HP/=2;
        ATK/=2;
        DEF/=2;
        FirstKey/=2;
        SecondKey/=2;
        ThirdKey/=2;
        Weapons/=2;
        Armor/=2;
        GOLD/=2;
        GAMEOVER='?';
      }
      else if(c==75 && x==1 && y-1==31)
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        HP/=2;
        ATK/=2;
        DEF/=2;
        FirstKey/=2;
        SecondKey/=2;
        ThirdKey/=2;
        Weapons/=2;
        Armor/=2;
        GOLD/=2;
        GAMEOVER='?';
      }
      else if(c==80 && x+1==1 && y==31)
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        HP/=2;
        ATK/=2;
        DEF/=2;
        FirstKey/=2;
        SecondKey/=2;
        ThirdKey/=2;
        Weapons/=2;
        Armor/=2;
        GOLD/=2;
        GAMEOVER='?';
      }
      else if(c==72 && x-1==1 && y==31)
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        HP/=2;
        ATK/=2;
        DEF/=2;
        FirstKey/=2;
        SecondKey/=2;
        ThirdKey/=2;
        Weapons/=2;
        Armor/=2;
        GOLD/=2;
        GAMEOVER='?';
      }
      else if(c==77 && x==1 && y+1==98)
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        if(tf==2)
          HP-=93;
        HP*=10;
        ATK+=5;
        DEF+=5;
        FirstKey=0;
        SecondKey=0;
        ThirdKey=0;
        Weapons=0;
        Armor=0;
        GOLD=0;
        map[0][31]=' ',map[0][32]=' ',map[0][33]=' ';
      }
      else if(c==75 && x==10 && y-1==21)
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        Cout(24,7,"1C1C1C1C1?");
        Cout(24,8,"C2C2C2C2C2");
        Cout(20,9,"   ");
        Wen1=1;
        map[9][20]=' ',map[9][21]=' ',map[9][22]=' ';
        map[7][24]='1',map[7][25]='C',map[7][26]='1',map[7][27]='C',map[7][28]='1',map[7][29]='C',map[7][30]='1',map[7][31]='C',map[7][32]='1',map[7][33]='?';
        map[8][24]='C',map[8][25]='2',map[8][26]='C',map[8][27]='2',map[8][28]='C',map[8][29]='2',map[8][30]='C',map[8][31]='2',map[8][32]='C',map[8][33]='2';
      }
      else if(c==72 && x-1==7 && y==33 && map[7][33]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        Cout(20,7,"   ");
        map[7][20]=' ',map[7][21]=' ',map[7][22]=' ';
        map[x][y]=' ';
        Wen1=0;
        mmm=1;
        HP+=500;
      }
      else if(c==77 && x==7 && y+1==33 && map[7][33]=='?')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        Cout(20,7,"   ");
        map[7][20]=' ',map[7][21]=' ',map[7][22]=' ';
        map[x][y]=' ';
        Wen1=0;
        mmm=1;
        HP+=500;
      }
      else if(c==77 && x==19 && y+1==24 && map[19][24]=='?')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        Cout(8,20," ");
        map[x][y]=' ';
        map[20][8]=' ';
      }
      else if(c==75 && x==19 && y-1==24 && map[19][24]=='?')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        Cout(8,20," ");
        map[x][y]=' ';
        map[20][8]=' ';
      }
      else if(c==80 && x+1==19 && y==24 && map[19][24]=='?')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        Cout(8,20," ");
        map[x][y]=' ';
        map[20][8]=' ';
      }
      else if(c==72 && x-1==19 && y==24 && map[19][24]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        Cout(8,20," ");
        map[x][y]=' ';
        map[20][8]=' ';
      }
      else if(c==77 && x==35 && y+1==7 && map[35][7]=='?')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        DEF+=10;
        ATK+=10;
        HP-=500;
        GAMEOVER='?';
      }
      else if(c==75 && x==35 && y-1==7 && map[35][7]=='?')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        DEF+=10;
        ATK+=10;
        HP-=500;
        GAMEOVER='?';
      }
      else if(c==80 && x+1==35 && y==7 && map[35][7]=='?')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        DEF+=10;
        ATK+=10;
        HP-=500;
        GAMEOVER='?';
      }
      else if(c==72 && x-1==35 && y==7 && map[35][7]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        DEF+=10;
        ATK+=10;
        HP-=500;
        GAMEOVER='?';
      }
      else if(c==77 && x==33 && y+1==32 && map[33][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,33," ");
        map[33][32]=' ';
        x=1,y=20;
        Cout(y,x,"&");
      }
      else if(c==75 && x==33 && y-1==32 && map[33][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,33," ");
        map[33][32]=' ';
        x=1,y=20;
        Cout(y,x,"&");
      }
      else if(c==80 && x+1==33 && y==32 && map[33][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,33," ");
        map[33][32]=' ';
        x=1,y=20;
        Cout(y,x,"&");
      }
      else if(c==72 && x-1==33 && y==32 && map[33][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,33," ");
        map[33][32]=' ';
        x=1,y=20;
        Cout(y,x,"&");
      }
      else if(c==77 && x==35 && y+1==32 && map[35][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,35," ");
        map[35][32]=' ';
        x=19,y=30;
        Cout(y,x,"&");
      }
      else if(c==75 && x==35 && y-1==32 && map[35][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,35," ");
        map[35][32]=' ';
        x=19,y=30;
        Cout(y,x,"&");
      }
      else if(c==80 && x+1==35 && y==32 && map[35][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,35," ");
        map[35][32]=' ';
        x=19,y=30;
        Cout(y,x,"&");
      }
      else if(c==72 && x-1==35 && y==32 && map[35][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,35," ");
        map[35][32]=' ';
        x=19,y=30;
        Cout(y,x,"&");
      }
      else if(c==77 && x==29 && y+1==32 && map[29][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,29," ");
        map[29][32]=' ';
        x=18,y=52;
        Cout(y,x,"&");
      }
      else if(c==75 && x==29 && y-1==32 && map[29][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,29," ");
        map[29][32]=' ';
        x=18,y=52;
        Cout(y,x,"&");
      }
      else if(c==80 && x+1==29 && y==32 && map[29][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,29," ");
        map[29][32]=' ';
        x=18,y=52;
        Cout(y,x,"&");
      }
      else if(c==72 && x-1==29 && y==32 && map[29][32]=='?')
      {
        Cout(y,x," ");
        Cout(32,29," ");
        map[29][32]=' ';
        x=18,y=52;
        Cout(y,x,"&");
      }
      else if(c==77 && x==19 && y+1==34 && map[19][34]=='?')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        HP-=1000;
        GAMEOVER='?';
      }
      else if(c==75 && x==19&& y-1==34 && map[19][34]=='?')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[x][y]=' ';
        HP-=1000;
        GAMEOVER='?';
      }
      else if(c==80 && x+1==19 && y==34 && map[19][34]=='?')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        HP-=1000;
        GAMEOVER='?';
      }
      else if(c==72 && x-1==19 && y==34 && map[19][34]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        HP-=1000;
        GAMEOVER='?';
      }
      else if(c==77 && x==35 && y+1==117 && map[35][117]=='?')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[35][117]=' ';
        tf=1;
        tfsc();
      }
      else if(c==75 && x==35 && y-1==117 && map[35][117]=='?')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[35][117]=' ';
        tf=1;
        tfsc();
      }
      else if(c==80 && x+1==35 && y==117 && map[35][117]=='?')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[35][117]=' ';
        tf=1;
        tfsc();
      }
      else if(c==72 && x-1==35 && y==117 && map[35][117]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[35][117]=' ';
        tf=1;
        tfsc();
      }
      else if(c==77 && x==35 && y+1==111 && map[35][111]=='?')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[35][111]=' ';
        tf=2;
        tfsc();
      }
      else if(c==75 && x==35 && y-1==111 && map[35][111]=='?')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[35][111]=' ';
        tf=2;
        tfsc();
      }
      else if(c==80 && x+1==35 && y==111 && map[35][111]=='?')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[35][111]=' ';
        tf=2;
        tfsc();
      }
      else if(c==72 && x-1==35 && y==111 && map[35][111]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[35][111]=' ';
        tf=2;
        tfsc();
      }
      else if(c==77 && x==34 && y+1==111 && map[34][111]=='?')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[34][111]=' ';
        tf=0;
        tfsc();
      }
      else if(c==75 && x==34 && y-1==111 && map[34][111]=='?')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[34][111]=' ';
        tf=0;
        tfsc();
      }
      else if(c==80 && x+1==34 && y==111 && map[34][111]=='?')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[34][111]=' ';
        tf=0;
        tfsc();
      }
      else if(c==72 && x-1==34 && y==111 && map[34][111]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[34][111]=' ';
        tf=0;
        tfsc();
      }
      else if(c==77 && x==33 && y+1==111 && map[33][111]=='?')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[33][111]=' ';
        tf=3;
        tfsc();
      }
      else if(c==75 && x==33 && y-1==111 && map[33][111]=='?')
      {
        Cout(y,x," ");
        Cout(--y,x,"&");
        map[33][111]=' ';
        tf=3;
        tfsc();
      }
      else if(c==80 && x+1==33 && y==111 && map[33][111]=='?')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[33][111]=' ';
        tf=3;
        tfsc();
      }
      else if(c==72 && x-1==33 && y==111 && map[33][111]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[33][111]=' ';
        tf=3;
        tfsc();
      }
      else if(c==77 && x==28 && y+1==82 && map[28][82]=='?')
      {
        Cout(y,x," ");
        Cout(++y,x,"&");
        map[x][y]=' ';
        HP*=10;
        Cout(48,21,"|----------------------|");
        Cout(48,22,"|M是BOOS               |");
        Cout(48,23,"|HP=20000, ATK=5000    |");
        Cout(48,24,"|DEF=5000,  GOLD=10000 |");
        Cout(48,25,"|打败BOOS后请请进入一一|");
        Cout(48,26,"|生死门,下一关是福利关!|");
        Cout(48,27,"|----------------------|");
        map[27][48]='#',map[27][49]='#',map[27][50]='#',map[27][51]='#',map[27][52]='#';
        map[27][53]='#',map[27][54]='#',map[27][55]='#',map[27][56]='#',map[27][57]='#';
        map[27][58]='#',map[27][59]='#',map[27][60]='#',map[27][61]='#',map[27][62]='#';
        map[27][63]='#',map[27][64]='#',map[27][65]='#',map[27][66]='#',map[27][67]='#';
        map[27][68]='#',map[27][69]='#',map[27][70]='#',map[27][71]='#';
      }
      else if(c==80 && x+1==29 && y==83 && map[29][83]=='?')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        HP-=10000;
      }
      else if(c==80 && x+1==33 && y==39 && map[33][39]=='?')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        Cmd.Clear();
        ofstream outf;
        outf.open("D:\\mysterious_Palace\\game_archive\\system_X.zsjm");
        outf<<1;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_Y.zsjm");
        outf<<20;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_HP.zsjm");
        outf<<HP;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_ATK.zsjm");
        outf<<ATK;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_DEF.zsjm");
        outf<<DEF;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_FirstKey.zsjm");
        outf<<FirstKey;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_SecondKey.zsjm");
        outf<<SecondKey;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_ThirdKey.zsjm");
        outf<<ThirdKey;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_Weapons.zsjm");
        outf<<Weapons;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_Armor.zsjm");
        outf<<Armor;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_GOLD.zsjm");
        outf<<GOLD;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_gk.zsjm");
        outf<<2;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_tj.zsjm");
        outf<<tj;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_jj.zsjm");
        outf<<jj;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_sj.zsjm");
        outf<<sj;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_td.zsjm");
        outf<<td;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_jd.zsjm");
        outf<<jd;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_sd.zsjm");
        outf<<sd;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_qt.zsjm");
        for(var ru=1; ru<=qt_tot; ru++)
          outf<<qt[ru]<<'\n';
        outf.close();
        return 0;
      }
      else if(c==80 && x+1==33 && y==41 && map[33][41]=='?')
      {
        Cout(y,x," ");
        Cout(y,++x,"&");
        map[x][y]=' ';
        GAMEOVER='?';
        HP=0;
      }
      else if(c==72 && x-1==32 && y==34 && map[32][34]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        Cout(110,29,"回去扫");
        Cout(110,30,"荡QWQ!");
        Cout(113,31," ");
        Cout(51,17,"(");
        map[x][y]=' ';
        map[31][113]=' ';
        map[30][110]='#';
        map[17][51]='(';
      }
      else if(c==72 && x-1==21 && y==39 && map[21][39]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        HP+=15000;
        bz++;
      }
      else if(c==72 && x-1==21 && y==45 && map[21][45]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        HP+=15000;
        bz++;
      }
      else if(c==72 && x-1==21 && y==75 && map[21][75]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        HP+=15000;
        bz++;
      }
      else if(c==72 && x-1==21 && y==81 && map[21][81]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        HP+=15000;
        bz++;
      }
      else if(bz==4&&bzcs==0)
      {
        Cout(58,27,"    ");
        map[27][48]=' ',map[27][49]=' ',map[27][50]=' ',map[27][51]=' ',map[27][52]=' ';
        map[27][53]=' ',map[27][54]=' ',map[27][55]=' ',map[27][56]=' ',map[27][57]=' ';
        map[27][62]=' ',map[27][63]=' ',map[27][64]=' ',map[27][65]=' ',map[27][66]=' ';
        map[27][67]=' ',map[27][68]=' ',map[27][69]=' ',map[27][70]=' ',map[27][71]=' ';
        map[28][81]=' ';
        Cout(81,28," ");
        bzcs++;
      }
      else if(c==72 && x-1==26 && y==34 && map[26][34]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        HP+=30000;
      }
      else if(c==72 && x-1==24 && y==34 && map[24][34]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        HP-=10000;
      }
      else if(c==72 && x-1==22 && y==34 && map[22][34]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[x][y]=' ';
        HP+=30000;
      }
      else if(c==72 && x-1==30 && y==110 && map[30][110]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[30][110]=' ';
        ofstream outf;
        outf.open("D:\\mysterious_Palace\\game_archive\\system_X.zsjm");
        outf<<x;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_Y.zsjm");
        outf<<y;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_HP.zsjm");
        outf<<HP;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_ATK.zsjm");
        outf<<ATK;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_DEF.zsjm");
        outf<<DEF;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_FirstKey.zsjm");
        outf<<FirstKey;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_SecondKey.zsjm");
        outf<<SecondKey;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_ThirdKey.zsjm");
        outf<<ThirdKey;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_Weapons.zsjm");
        outf<<Weapons;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_Armor.zsjm");
        outf<<Armor;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_GOLD.zsjm");
        outf<<GOLD;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_tj.zsjm");
        outf<<tj;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_jj.zsjm");
        outf<<jj;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_sj.zsjm");
        outf<<sj;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_td.zsjm");
        outf<<td;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_jd.zsjm");
        outf<<jd;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_sd.zsjm");
        outf<<sd;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_qt.zsjm");
        for(var ru=1; ru<=qt_tot; ru++)
          outf<<qt[ru]<<'\n';
        outf.close();
      }
      else if(c==72 && x-1==34 && y==75 && map[34][75]=='?')
      {
        Cout(y,x," ");
        Cout(y,--x,"&");
        map[34][75]=' ';
        ofstream outf;
        outf.open("D:\\mysterious_Palace\\game_archive\\system_X.zsjm");
        outf<<x;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_Y.zsjm");
        outf<<y;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_HP.zsjm");
        outf<<HP;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_ATK.zsjm");
        outf<<ATK;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_DEF.zsjm");
        outf<<DEF;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_FirstKey.zsjm");
        outf<<FirstKey;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_SecondKey.zsjm");
        outf<<SecondKey;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_ThirdKey.zsjm");
        outf<<ThirdKey;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_Weapons.zsjm");
        outf<<Weapons;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_Armor.zsjm");
        outf<<Armor;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_GOLD.zsjm");
        outf<<GOLD;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_tj.zsjm");
        outf<<tj;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_jj.zsjm");
        outf<<jj;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_sj.zsjm");
        outf<<sj;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_td.zsjm");
        outf<<td;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_jd.zsjm");
        outf<<jd;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_sd.zsjm");
        outf<<sd;
        outf.close();
        outf.open("D:\\mysterious_Palace\\game_archive\\system_qt.zsjm");
        for(var ru=1; ru<=qt_tot; ru++)
          outf<<qt[ru]<<'\n';
        outf.close();
      }
      else
        d=-1;
      if(HP<=0)
      {
        Cmd.Clear();
        Cmd.TextColor(2,0);
        for(var i=0; i<43; i++)
        {
          for(var j=0; j<61; j++)
            cout<<"■";
          cout<<"\n";
        }
        Cmd.TextColor(12,0);
        Cout(56,21,"GAMEOVER");
        Cmd.TextColor(7,0);
        if(GAMEOVER=='?')
          Cout(80,30,"你被 机关 干掉了 ^_^");
        if(GAMEOVER=='a')
          Cout(80,30,"你被 怪物a 杀死了 ！");
        if(GAMEOVER=='b')
          Cout(80,30,"你被 怪物b 杀死了 ！");
        if(GAMEOVER=='c')
          Cout(80,30,"你被 怪物c 杀死了 ！");
        if(GAMEOVER=='d')
          Cout(80,30,"你被 怪物d 杀死了 ！");
        if(GAMEOVER=='e')
          Cout(80,30,"你被 怪物e 杀死了 ！");
        if(GAMEOVER=='A')
          Cout(80,30,"你被 怪物A 杀死了 ！");
        if(GAMEOVER=='B')
          Cout(80,30,"你被 怪物B 杀死了 ！");
        if(GAMEOVER=='C')
          Cout(80,30,"你被 怪物C 杀死了 ！");
        if(GAMEOVER=='D')
          Cout(80,30,"你被 怪物D 杀死了 ！");
        if(GAMEOVER=='E')
          Cout(80,30,"你被 怪物E 杀死了 ！");
        if(GAMEOVER=='2')
          Cout(80,35,"你被 自己的天赋——中毒 杀死了 ！");
        if(GAMEOVER=='0')
        {
          Cout(76,34,"    你被 死亡之墙 杀死了 ！  ");
          Cout(76,35,"加油,正确的路需要你自己探索 !");
        }
        if(GAMEOVER=='M')
        {
          Cout(76,34,"    你被 BOOS 杀死了 ！  ");
          Cout(76,35,"少年,不要气馁,相信你能行!");
        }
        Cmd.HideCursor();
        return 0;
      }
    }
  }