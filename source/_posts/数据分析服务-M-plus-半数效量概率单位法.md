
---
title: M-plus数据分析案例:半数效量概率单位法
date: 2018-08-31 17:31:45
tags: [M-plus]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->



### 半数效量概率单位法:

{% raw %}
<div class="p1">半数效量(或半数致死量)的概率单位法是计算半数效

<p>量的有效方法。最先由C.I.Bliss提出，J. J. Litch-field和F. Wilcoxon根据其原理建立了图解法，顾汉颐又提出了简化概率单位法。概率单位的意义见条目“百分数的概率单位变换”。本法基本原理是将剂量反应曲线直线化，求出直线方程，再从方程求出半数效量。常用方法有：图解法、加权直线回归法和简化概率单位法，本条目将以半数致死量(LD<sub>50</sub>)为例来说明。

</p><p>本法要求： ①剂量分组一般取等比级数，但也可为等差级数或不等距的数值。②各剂量组的受试动物数不一定相等，但应相近。③要求一半剂量组数的反应率在10～50%之间，其余一半在50～90%之间，尽量避免出现反应率为0%和100%。如出现反应率为0%和100%可舍去不用，或加以校正，即用“0.25÷(反应率为0%组的动物数)”代替0%，用“ 1-0.25÷(反应率为100 %组的动物数)”代替100%。

</p><p><strong>图解法</strong> 本法简便，但精确度稍差。方法步骤如下：(1)列计算表。如表1。将剂量变换为剂量对数x，死亡率变换为概率单位y。

</p><p>(2) 图解求半数致死量。在方格坐标纸上，横轴为剂量对数x，纵轴为概率单位y，根据每一组的x、y值在图上描点，然后按点子的分布趋势作一直线，使直线穿过各点中间(各点至直线的纵向距离尽量短些，并重点照顾y=5附近的点子)。从纵轴概率单位为5处作一水平线，过水平线与直线的交点作垂线与横轴相交，此处读数即lgLD<sub>50</sub>，取反对数得LD<sub>50</sub>。

</p><p>(3)求剂量反应直线方程。为更准确地求出LD<sub>5</sub>，…，LD95等值，以及进行两直线方程的比较。可在直线上任取两点(x<sub>1</sub>，y<sub>1</sub>)及(x<sub>2</sub>，y<sub>2</sub>)，按式(1)求出直线方程</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0199.1.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0199.1.gif"></p>

<p>得到直线方程后，还应进行拟合优度检验，可用x<sub>2</sub>检验。检验假设H0为实际频数符合由此直线推算出来的估计频数，即实际死亡数符合估计死亡数，实际存活数符合估计存活数。经检验，不拒绝H0则认为直线拟合好;拒绝H0则认为拟合的直线不够满意，需另行拟合满意的直线求LD50。方法步骤(如例1表2)是： ①将各剂量对数x(死亡率为0%及100%的剂量对数除外) 代入直线方程求得估计概率单位ŷ;②查“百分数p与概率单位对照表”得相应的估计死亡率<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0199.37.13.bmp">;③求相应的估计死亡数ŷ=n<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0199.38.3.bmp">，估计存活数ŝ=n-<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0199.38.14.bmp">;④由下式计算x<sup>2</sup>值，</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0199.3.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0199.3.gif"></p>

<p>自由度ν=k-2。

</p><p>k为剂量组数(死亡率为0%及100%的剂量组不计在内)。⑤查x<sup>2</sup>界值表得P值，按所取检验水准作出推断结论。

</p><p>(4)求半数致死量的可信区间。上面求出的LD50是总体LD<sub>50</sub>的点估计;由正态近似原理，总体LD<sub>50</sub>的95%可信区间的对数值按式(3)计算，再取反对数即得LD<sub>50</sub>。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0199.5.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0199.5.gif"></p>式中N′为概率单位4～6范围内各组受试动物数之和。s为各致死剂量对数值的标准差，也就是回归系数的倒数，按式(4)计算：<p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0199.7.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0199.7.gif"></p>

式中x<sub>1</sub>，y<sub>1</sub>与x<sub>2</sub>，y<sub>2</sub>是由图中拟合满意的直线上任意两点读出的坐标。s/<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0199.50.10.bmp">为lgLD<sub>50</sub>的标准误s<sub>l</sub>gLD<sub>50</sub>。例1 用某农药对雌性大白鼠作灌胃的急性毒性试验，资料见表1，用图解法求半数致死量及其剂量反应方程。

<p>(1)列计算表。

</p><p></p><p align="center">表1 图解法求LD<sub>50</sub>计算表</p><p align="center"></p><div class="dtable"><table imgpath="/CRFDPIC/R200612059/R200612059.0199.9.png" class="viewtb" border="1"><tr valign="top"><td class="viewtd">

剂 量<br>

mg/kg</td><td class="viewtd">

剂量对数<br>

x</td><td class="viewtd">

受 试<br>

动物数<br>

n</td><td class="viewtd">

死 亡<br>

动物数<br>

r</td><td class="viewtd">

死亡率(%)<br>

p=r/n×100%</td><td class="viewtd">

概率单位<br>

y</td></tr><tr valign="top"><td class="viewtd">

1000<br>

1200<br>

1400<br>

1600<br>

1800</td><td class="viewtd">

3.0000<br>

3.0792<br>

3.1461<br>

3.2041<br>

3.2553</td><td class="viewtd">

10<br>

10<br>

10<br>

10<br>

10</td><td class="viewtd">

1<br>

3<br>

7<br>

8<br>

9</td><td class="viewtd">

10<br>

30<br>

70<br>

80<br>

90</td><td class="viewtd">

3.7184<br>

4.4756<br>

5.5244<br>

5.8416<br>

6.2816</td></tr></table></div>

<p>(2)用图解法求LD<sub>50</sub>。</p><p align="center"><span class="imgdiv" style="text-align:center;"><img onclick="zoomPic(this);" align="absmiddle" width="396" height="318" src="/CRFDPIC/R200612059/R200612059.0199.11.png"></span></p>

<p></p><p align="center">表1 资料用图解法求LD5<sub>0</sub></p>

<p>lgLD<sub>50</sub> =3.12，

</p><p>LD<sub>5</sub>0 =lg-<sup>1</sup> 3.12=1318(mg/kg)。

</p><p>(3)求剂量反应直线方程。由图3读出线上两点： y1=4，x<sub>1</sub>＝3.03;y2=6，x2=3.20，代入式(1)，得</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0199.14.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0199.14.gif"></p>

<p>(4)拟合优度检验。

</p><p>H<sub>0</sub>： 实际频数符合估计频数，

</p><p>H<sub>1</sub>： 实际频数不符合估计频数。

</p><p>α=0.05。

</p><p></p><p align="center">表2 回归直线的拟合优度检验</p><p align="center"></p><div class="dtable"><table imgpath="/CRFDPIC/R200612059/R200612059.0200.1.png" class="viewtb" border="1"><tr valign="top"><td class="viewtd" rowspan="2">

剂 量<br>

对 数<br>

x<br>

(1)</td><td class="viewtd" rowspan="2">

受 试<br>

动物数<br>

n<br>

(2)</td><td class="viewtd" rowspan="2">

实 际<br>

死亡数<br>

r<br>

(3)</td><td class="viewtd" colspan="4">

估 计</td><td class="viewtd" rowspan="2">

n(r-<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059_R200612059.0200.1.15.4.bmp">)2/<br><img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059_R200612059.0200.1.16.0.bmp">ŝ<br>

(8)</td></tr><tr valign="top"><td class="viewtd">

概率单位<br>ŷ<br>

(4)</td><td class="viewtd">

死亡率<br><img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059_R200612059.0200.1.22.0.bmp"><br>

(5)</td><td class="viewtd">

死亡数<br><img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059_R200612059.0200.1.25.0.bmp"><br>

(6)=(2)(5)</td><td class="viewtd">

存 活 数<br>ŝ<br>

(7)=(2)-(6)</td></tr><tr valign="top"><td class="viewtd" rowspan="2">

3.0000<br>

3.0792<br>

3.1461<br>

3.2041<br>

3.2553</td><td class="viewtd" rowspan="2">

10<br>

10<br>

10<br>

10<br>

10</td><td class="viewtd" rowspan="2">

1<br>

3<br>

7<br>

8<br>

9</td><td class="viewtd" rowspan="2">

3.65<br>

4.58<br>

5.37<br>

6.05<br>

6.65</td><td class="viewtd" rowspan="2">

0.09<br>

0.34<br>

0.64<br>

0.85<br>

0.95</td><td class="viewtd" rowspan="2">

0.9<br>

3.4<br>

6.4<br>

8.5<br>

9.5</td><td class="viewtd" rowspan="2">

9.1<br>

6.6<br>

3.6<br>

1.5<br>

0.5</td><td class="viewtd">

0.01<br>

0.07<br>

0.16<br>

0.20<br>

0.53</td></tr><tr valign="top"><td class="viewtd">

X2=0.91</td></tr></table></div>

<p>注： 第(1)～(3)栏为原始数据，第(4)栏系将第(1)栏数据代入上述回归方程求得，第(5)栏系按第(4)栏数据由“百分数p与概率单位对照表”查得。

</p><p>今v=5-2=3，查x<sup>2</sup>界值表，0.95&gt;P&gt;0.5，按α=0.05水准不拒绝H<sub>0</sub>，可认为此直线拟合是好的。

</p><p>(5)求LD<sub>50</sub>的95%可信区间。将前述两点读数代入式(4)，</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0200.4.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0200.4.gif"></p>

<p>由表1，N′ =30，按式(3)：</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0200.6.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0200.6.gif"></p>

<p>取反对数得(1194，1456)。

</p><p>故此农药的LD<sub>50</sub>为1318mg/kg，其95%可信区间为1194～1456mg/kg。

</p><p><strong>加权直线回归法</strong> 本法精确度高，但计算较繁。其基本思想是拟合直线时使y=5附近的数据起主导作用(给予较大的权数，详见表3)，以消除极值的影响;也考虑各组受试动物多少对死亡率稳定性的影响。方法步骤如下：(1)在图解法的基础上求出加权计算的基本数据，如表4。先用图解法求出直线方程(经拟合优度检验无显著性)。 由此求出各剂量组的估计概率单位ŷ0(取一位小数)，由ŷ0查表3得加权系数w、极小值α和全距β，结合实际死亡率p ，代入式(5)求出作业概率单位y′，

</p><p></p><p align="center">y′=α+βp。(5)</p>

求各剂量组的nw、nwx、nwx<sup>2</sup>、nwy′、nwxy′及相应的合计数∑nw、∑nwx、∑nwx<sup>2</sup>、∑nwy′、∑nwxy′。

<p>(2)求加权直线回归方程y′=a+bx。类似条目“直线回归”方程的计算。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0200.9.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0200.9.gif"></p>

<p></p><p align="center">表3 加权系数</p>

<p></p><p align="center"></p><div class="dtable"><table imgpath="/CRFDPIC/R200612059/r200612059.0200.931eca.png" class="viewtb" border="1"><tr valign="top"><td class="viewtd">ŷ<br>

估计概<br>

率单位</td><td class="viewtd">

ω<br>

加权系数</td><td class="viewtd">

α<br>

极小值</td><td class="viewtd">

β<br>

全 距</td><td class="viewtd">ŷ<br>

估计概<br>

率单位</td><td class="viewtd">

ω<br>

加权系数</td><td class="viewtd">

α<br>

极小值</td><td class="viewtd">

β<br>

全 距</td></tr><tr valign="top"><td class="viewtd">

1.1<br>

1.2<br>

1.3<br>

1.4<br>

1.5</td><td class="viewtd">

0.00082<br>

0.00118<br>

0.00167<br>

0.00235<br>

0.00327</td><td class="viewtd">

0.8578<br>

0.9521<br>

1.0462<br>

1.1399<br>

1.2334</td><td class="viewtd">

5033.84<br>

3425.28<br>

2354.16<br>

1634.25<br>

1145.89</td><td class="viewtd">

3.1<br>

3.2<br>

3.3<br>

3.4<br>

3.5</td><td class="viewtd">

0.15436<br>

0.17994<br>

0.20774<br>

0.23753<br>

0.26907</td><td class="viewtd">

2.6624<br>

2.7449<br>

2.8261<br>

2.9060<br>

2.9842</td><td class="viewtd">

15.2402<br>

12.6662<br>

10.6327<br>

9.0154<br>

7.7210</td></tr><tr valign="top"><td class="viewtd">

1.6<br>

1.7<br>

1.8<br>

1.9<br>

2.0</td><td class="viewtd">

0.00451<br>

0.00614<br>

0.00828<br>

0.01104<br>

0.01457</td><td class="viewtd">

1.3265<br>

1.4193<br>

1.5118<br>

1.6038<br>

1.6954</td><td class="viewtd">

811.54<br>

580.53<br>

419.45<br>

306.11<br>

225.639</td><td class="viewtd">

3.6<br>

3.7<br>

3.8<br>

3.9<br>

4.0</td><td class="viewtd">

0.30199<br>

0.33589<br>

0.37031<br>

0.40474<br>

0.43863</td><td class="viewtd">

3.0606<br>

3.1351<br>

3.2074<br>

3.2773<br>

3.3443</td><td class="viewtd">

6.6788<br>

5.8354<br>

5.1497<br>

4.5903<br>

4.1327</td></tr><tr valign="top"><td class="viewtd">

2.1<br>

2.2<br>

2.3<br>

2.4<br>

2.5</td><td class="viewtd">

0.01903<br>

0.02458<br>

0.03143<br>

0.03977<br>

0.04979</td><td class="viewtd">

1.7865<br>

1.8772<br>

1.9673<br>

2.0568<br>

2.1457</td><td class="viewtd">

167.996<br>

126.335<br>

95.961<br>

73.622<br>

57.051</td><td class="viewtd">

4.1<br>

4.2<br>

4.3<br>

4.4<br>

4.5</td><td class="viewtd">

0.47144<br>

0.50260<br>

0.53159<br>

0.55788<br>

0.58099</td><td class="viewtd">

3.4083<br>

3.4687<br>

3.5251<br>

3.5770<br>

3.6236</td><td class="viewtd">

3.7582<br>

3.4519<br>

3.2025<br>

3.0010<br>

2.8404</td></tr><tr valign="top"><td class="viewtd">

2.6<br>

2.7<br>

2.8<br>

2.9<br>

3.0</td><td class="viewtd">

0.06168<br>

0.07564<br>

0.09179<br>

0.11026<br>

0.13112</td><td class="viewtd">

2.2339<br>

2.3214<br>

2.4081<br>

2.4938<br>

2.5786</td><td class="viewtd">

44.654<br>

35.302<br>

28.189<br>

22.736<br>

18.5216</td><td class="viewtd">

4.6<br>

4.7<br>

4.8<br>

4.9<br>

5.0</td><td class="viewtd">

0.60052<br>

0.61609<br>

0.62742<br>

0.63431<br>

0.63662</td><td class="viewtd">

3.6643<br>

3.6982<br>

3.7241<br>

3.7407<br>

3.7467</td><td class="viewtd">

2.7154<br>

2.6220<br>

2.5573<br>

2.5192<br>

2.5066</td></tr></table></div>

<p></p><p align="right">(续表)</p>

<p></p><p align="center"></p><div class="dtable"><table imgpath="/CRFDPIC/R200612059/R200612059.0201.1.png" class="viewtb" border="1"><tr valign="top"><td class="viewtd">ŷ<br>

估计概<br>

率单位</td><td class="viewtd">

ω<br>

加权系数</td><td class="viewtd">

α<br>

极小值</td><td class="viewtd">

β<br>

全 距</td><td class="viewtd">ŷ<br>

估计概<br>

率单位</td><td class="viewtd">

ω<br>

加权系数</td><td class="viewtd">

α<br>

极小值</td><td class="viewtd">

β<br>

全 距</td></tr><tr valign="top"><td class="viewtd">

5.1<br>

5.2<br>

5.3<br>

5.4<br>

5.5</td><td class="viewtd">

0.63431<br>

0Eprime<br>Eprime
EprimeEprime
0.61609<br>EprimeEprime

0.60052<br>

0.58099Eprimetd class="viewtd">

3.7401<br>

3.7187<br>

3.6798<br>

3.6203<br>

3.5360</td><td class="viewtd">

2.5192<br>

2.5573<br>

2.6220<br>

2.7154<br>

2.8404</td><td class="viewtd">

7.1<br>

7.2<br>

7.3<br>

7.4<br>

7.5</td><td class="viewtd">

0.11026<br>

0.09179<br>

0.07564<br>

0.06168<br>

0.04979</td><td class="viewtd">

-15.230<br>

-20.597<br>

-27.623<br>

-36.888<br>

-49.196</td><td class="viewtd">

22.736<br>

28.189<br>

35.302<br>

44.654<br>

57.051</td></tr><tr valign="top"><td class="viewtd">

5.6<br>

5.7<br>

5.8<br>

5.9<br>

6.0</td><td class="viewtd">

0.55788<br>

0.53159<br>

0.50260<br>

0.47144<br>

0.43863</td><td class="viewtd">

3.4220<br>

3.2724<br>

3.0794<br>

2.8335<br>

2.5229</td><td class="viewtd">

3.0010<br>

3.2025<br>

3.4519<br>

3.7582<br>

4.1327</td><td class="viewtd">

7.6<br>

7.7<br>

7.8<br>

7.9<br>

8.0</td><td class="viewtd">

0.03977<br>

0.03143<br>

0.02458<br>

0.01903<br>

0.01457</td><td class="viewtd">

-65.678<br>

-87.928<br>

-118.212<br>

-159.782<br>

-217.335</td><td class="viewtd">

73.622<br>

95.961<br>

126.335<br>

167.996<br>

225.639</td></tr><tr valign="top"><td class="viewtd">

6.1<br>

6.2<br>

6.3<br>

6.4<br>

6.5</td><td class="viewtd">

0.40474<br>

0.37031<br>

0.33589<br>

0.30199<br>

0.26907</td><td class="viewtd">

2.1325<br>

1.6429<br>

1.0295<br>

0.2606<br>

-0.7051</td><td class="viewtd">

4.5903<br>

5.1497<br>

5.8354<br>

6.6788<br>

7.7210</td><td class="viewtd">

8.1<br>

8.2<br>

8.3<br>

8.4<br>

8.5</td><td class="viewtd">

0.01104<br>

0.00828<br>

0.00614<br>

0.00451<br>

0.00327</td><td class="viewtd">

-297.71<br>

-410.96<br>

-571.95<br>

-802.87<br>

-1137.13</td><td class="viewtd">

306.11<br>

419.45<br>

580.53<br>

811.54<br>

1145.89</td></tr><tr valign="top"><td class="viewtd">

6.6<br>

6.7<br>

6.8<br>

6.9<br>

7.0</td><td class="viewtd">

0.23753<br>

0.20774<br>

0.17994<br>

0.15436<br>

0.13112</td><td class="viewtd">

-1.9214<br>

-3.4589<br>

-5.4111<br>

-7.9026<br>

-11.1002</td><td class="viewtd">

9.0154<br>

10.6327<br>

12.6662<br>

15.2402<br>

18.5216</td><td class="viewtd">

8.6<br>

8.7<br>

8.8<br>

8.9<br>

9.0</td><td class="viewtd">

0.00235<br>

0.00167<br>

0.00118<br>

0.00082<br>

0.00057</td><td class="viewtd">

-1625.39<br>

-2345.20<br>

-3416.23<br>

-5024.70<br>

-7462.92</td><td class="viewtd">

1634.25<br>

2354.16<br>

3425.28<br>

5033.84<br>

7472.15</td></tr></table></div>

<p>本表按下式算得：估计概率单位ŷ=u+5，w=z<sup>2</sup>

</p><p>/P(1-P)，a=ŷ-P/z，β=1/z。其中u为标准正态变量，相应的标准正态曲线的纵坐标为z、左侧面积为P。

</p><p>(3)按式(13)可求任何死亡率(k%)时的致死剂量对数(lgLD<sub>k</sub>)，按式(14)求其标准误(slgLD<sub>k</sub>)。按式(15)求LD<sub>k</sub>的95%可信区间的对数值，取反对数即得真数值。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0201.4.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0201.4.gif"></p>

<p>式中yk为死亡率k%相应的概率单位。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0201.6.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0201.6.gif"></p>

<p>如此，由第一轮加权求得的直线回归方程常有较大误差，特别是在计算LD<sub>5</sub>和LD<sub>95</sub>时更是如此。故应采用多轮加权，逐次逼近。每轮均以所得方程的应变量估计值，作为下一轮加权的估计概率单位。仿上法重复进行，直到各剂量组前后估计概率单位之差均不超过0.2时即算满意。

</p><p>例2 对例1资料用加权直线回归法求LD50。(1) 由例1图解法求得初估的剂量反应回归方程为

</p><p>ŷ<sub>0</sub>＝-31.6471+11.7647x。 ①

</p><p>由此借助表4求出加权计算的基本数据：

</p><p></p><p align="center">表4 加权计算的基本数据</p><p align="center"></p><div class="dtable"><table imgpath="/CRFDPIC/R200612059/R200612059.0201.9.png" class="viewtb" border="1"><tr valign="top"><td class="viewtd" rowspan="2">

剂量对数<br>

x<br>

(1)</td><td class="viewtd" rowspan="2">

动物数<br>

n<br>

(2)</td><td class="viewtd" rowspan="2">

死亡率<br>

p<br>

(3)</td><td class="viewtd" rowspan="2">

估 计<br>

概率单位<br>ŷ0<br>

(4)</td><td class="viewtd" rowspan="2">

加权系数<br>

ω<br>

(5)</td><td class="viewtd" rowspan="2">

极小值<br>

α<br>

(6)</td><td class="viewtd" rowspan="2">

全 距<br>

β<br>

(7)</td><td class="viewtd" rowspan="2">

作 业<br>

概率单位<br>

y'<br>

(8)</td><td class="viewtd" colspan="2">

估计概率单位</td></tr><tr valign="top"><td class="viewtd"><img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059_R200612059.0201.9.29.0.bmp">1<br>

(9)</td><td class="viewtd"><img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059_R200612059.0201.9.31.0.bmp">2<br>

(10)</td></tr><tr valign="top"><td class="viewtd">

3.0000<br>

3.0792<br>

3.1461<br>

3.2041<br>

3.2553</td><td class="viewtd">

10<br>

10<br>

10<br>

10<br>

10</td><td class="viewtd">

0.1<br>

0.3<br>

0.7<br>

0.8<br>

0.9</td><td class="viewtd">

3.6<br>

4.6<br>

5.4<br>

6.0<br>

6.7</td><td class="viewtd">

0.30199<br>

0.60052<br>

0.60052<br>

0.43863<br>

0.20774</td><td class="viewtd">

3.0606<br>

3.6643<br>

3.6203<br>

2.5229<br>

-3.4589</td><td class="viewtd">

6.6788<br>

2.7154<br>

2.7154<br>

4.1327<br>

10.6327</td><td class="viewtd">

3.7285<br>

4.4789<br>

5.5211<br>

6.8291<br>

6.1105</td><td class="viewtd">

3.8<br>

4.6<br>

5.3<br>

5.9<br>

6.4</td><td class="viewtd">

3.8<br>

4.6<br>

5.3<br>

5.9<br>

6.4</td></tr></table></div>

<p>注：表4第(1)～(3)栏为原始数据，第(4)栏由上述直线回归方程式①求得，第(5)～(7)栏由表3查得，第(8)栏由式(5)算得，第

</p><p>(9)栏由第一轮加权直线回归方程式②算得，第(10)栏由式③求得。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0201.11.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0201.11.gif"></p>

<p>(2)按式(6)～(12)求加权直线回归方程。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0201.13.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0201.13.gif"></p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0201.14.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0201.14.gif"></p>

<p>将表4第(1)栏数据代入上式得第(9)栏，第(4)栏与第(9)栏比较，最高剂量组y0-y1=6.7-6.4=0.3，尚不够满意;为此重复上述步骤作第二轮加权计算(过程从略)，得回归方程

</p><p></p><p align="center"><img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0202.2.0.bmp">＝-27.5231+10.4272x。 ③</p>

<p>将表4第(1)数据代入上式得第(10)栏。第(9)栏与(10)栏比较完全一致，说明式③直线拟合已很满意。

</p><p>(3)求LD<sub>50</sub>及其95%可信区间。在第二轮计算中已求得：∑nw=23.6035，∑nw(x-<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0202.6.18.bmp">)<sup>2</sup>＝0.152906，<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0202.6.31.bmp">＝3.131714，

</p><p><img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0202.7.0.bmp">＝5.131933。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0202.1.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0202.1.gif"></p>

<p>按式(15)，

</p><p>(3.11906-1.96×0.01998，3.11906+1.96×0.01998)=(3.07990，3.15822)，取反对数得(1202，1440)。

</p><p>故此农药的LD<sub>50</sub>为1315mg/kg，其95%可信区间为1202～1440mg/kg。

</p><p><strong>简化概率单位法</strong> 本法计算简单且较精确，适于2～5个剂量组，剂量分组取等比级数排列，每组动物数相同，一般用10～20只动物，较大动物每组至少也宜有5只。lgLD<sub>50</sub>及其标准误的算式随剂量组数不同而异。

</p><p>二个剂量组：</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0202.3.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0202.3.gif"></p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0202.4.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0202.4.gif"></p>

<p>式中d为相邻两剂量对数值的差值，y<sub>50</sub>＝5。

</p><p>例3 用某农药对雌性大白鼠作灌胃的急性毒性试验，结果见表5。用简化概率单位法求LD<sub>50</sub>。

</p><p></p><p align="center">表5 简化概率单位法计算表</p><p align="center"></p><div class="dtable"><table imgpath="/CRFDPIC/R200612059/R200612059.0202.7.png" class="viewtb" border="1"><tr valign="top"><td class="viewtd">

剂 量<br>

mg/kg<br>

(1)</td><td class="viewtd">

剂量对数<br>

x<br>

(2)</td><td class="viewtd">

受试动物数<br>

n<br>

(3)</td><td class="viewtd">

死亡动物数<br>

r<br>

(4)</td><td class="viewtd">

死亡率<br>

p<br>

(5)</td><td class="viewtd">

概率单位<br>

y<br>

(6)</td><td class="viewtd">

加权系数<br>

w<br>

(7)</td><td class="viewtd">

权 数<br>

nw<br>

(8)</td></tr><tr valign="top"><td class="viewtd">

932<br>

1086<br>

1265<br>

1473</td><td class="viewtd">

2.9694<br>

3.0357<br>

3.1020<br>

3.1683</td><td class="viewtd">

10<br>

10<br>

10<br>

10</td><td class="viewtd">

1<br>

2<br>

5<br>

7</td><td class="viewtd">

0.1<br>

0.2<br>

0.5<br>

0.7</td><td class="viewtd">

3.7184<br>

4.1584<br>

5.0000<br>

5.5244</td><td class="viewtd">

0.3359<br>

0.5026<br>

0.6366<br>

0.5810</td><td class="viewtd">

3.359<br>

5.026<br>

6.366<br>

5.810</td></tr><tr valign="top"><td class="viewtd" rowspan="2">

1716</td><td class="viewtd" rowspan="2">

3.2346</td><td class="viewtd" rowspan="2">

10</td><td class="viewtd" rowspan="2">

9</td><td class="viewtd" rowspan="2">

0.9</td><td class="viewtd">

6.2816</td><td class="viewtd" rowspan="2">

0.3359</td><td class="viewtd">

3.359</td></tr><tr valign="top"><td class="viewtd">

24.6828</td><td class="viewtd">

23.920</td></tr></table></div>

<p>注： 第(1)～(5)栏为原始数据，第(6)栏是按第(5)栏由“百分数p与概率单位对照表”查得，第(7)栏由表(3)查得。

</p><p>列表5。 本例有五个剂量组，d=0.0663， <img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0202.24.24.bmp">＝∑y/组数=24.6828/5=4.9366。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0202.10.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0202.10.gif"></p>

<p>按式(15)求LD<sub>50</sub>的95%可信区间的对数值：

</p><p>(3.1085-1.96×0.0209，3.1085+1.96×0.0209)=(3.0675，3.1495)，

</p><p>取反对数得(1168，1411)。

</p><p>故此农药的LD<sub>50</sub>为1284mg/kg，其95%可信区间为1168～1411mg/kg。</p></div>
{% endraw %}



### [M-plus](/tags/M-plus/)中[相关概念](/categories/数据分析服务)

- **半数效量概率单位法**: 半数效量(或半数致死量)的概率单位法是计算半数效量的有效方法。最先由C.I.Bliss提出,J. J. Litch-field和F. Wilcoxon根据其原理建立了图解法,顾汉颐又提出了简化概率单位法。概率单位的意义见条目“百分数的概率单位变换”。本法基本原理是将剂量反应曲线直线化,求出...
- **百分数的概率单位变换**: 以标准正态曲线下的左侧面积用百分数p表示,则其相应的标准正态(离)差加5为p的概率单位y,称概率单位变换(C.I.Bliss,1934)。概率单位变换主要用于S形或反S形曲线的直线化,见条目“百分数的logit变换”,尤其适用于剂量反应曲线的直线化(参见“半数效量概率单位法”); 也用于正态...
- **联合作用分析**: 药理和毒理等研究中,经常需要确定两种或几种因素对机体的联合作用。联合作用有三种类型: 独立的联合作用,相加的联合作用,协同或拮抗作用。独立的联合作用 两种因素(如毒物)的作用互相独立,即两种因素的作用方式和部位不同,对机体产生的影响互不关联,...




### [M-plus](/tags/M-plus/)[数据分析服务](/categories/数据分析服务/):
[EPRIME工作室](http://jupyter. cn/)专注于数据分析服务。
为科研人员提供[M-plus技术支持](http://jupyter. cn/2018/08/18/EPRIME工作室M-plus代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://jupyter. cn/2018/08/17/关于EPRIME工作室/)。

QQ: 3597392976

Email: eprime[at]163.com


