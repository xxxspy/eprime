
---
title: 半数效量点斜法-SPSS数据可视化代做
date: 2018-08-31 13:31:44
tags: [SPSS]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->



### 半数效量点斜法:

{% raw %}
<div class="p1">半数效量(或半数致死量)的点斜法(孙瑞元，1963)是一种计算半数效量的简捷而比较精确的近似方法。它根据点斜式直线方程，综合了面积法及概率单位法的优点。本法可用于计算LD<sub>50</sub>与任何死亡率k%时的致死剂量LD<sub>k</sub>，以及它们的95%可信区间，还可计算剂量(对数)反应(概率单位)回归方程。

<p>本法要求： ①剂量必须为等比级数; ②各组动物数相等或相近;③反应情况符合或接近正态，不要求最低死亡率必须为0%，最高死亡率必须为100%，但二者之和最好在80～120%范围内。

</p><p><font color="#0A0A6C"><small>方法</small></font> 以半数致死量为例。

</p><p>(1)求LD<sub>50</sub>及其可信区间。当死亡率包括或接近0%及100%时，按式(1)计算lgLD<sub>50</sub>，取反对数即得LD<sub>50</sub>。

</p><p></p><p align="center">lgLD<sub>50</sub>＝xm-d(∑p-0.5)，(1)</p>

式中x<sub>m</sub>为最高剂量的对数，d为相邻两剂量对数的差值，p为各剂量组死亡率。当最高死亡率pm≠100%，或最低死亡率pn≠0%时，可改用式(2)的校正公式计算<p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0204.0.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.0.gif"></p>按式(3)求lgLD<sub>50</sub>的标准误slgLD5<sub>0</sub>，<p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0204.2.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.2.gif"></p>

式中n为每组的动物数，其余符号同式(1)。

<p>上面求出的LD<sub>50</sub>是总体LD<sub>50</sub>的点估计，按正态近似原理，总体LD<sub>50</sub>的95%可信区间的对数值按式(4)计算，

</p><p>(lgLD<sub>50</sub>-1.96slgLD5<sub>0</sub>， lgLD<sub>50</sub>+1.96slgLD<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.6.37.bmp"><img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.6.38.bmp">)， (4)取反对数即得真数值。

</p><p>(2) 求剂量(对数)反应(概率单位)回归方程。按式(5)及式(6)计算：</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0204.4.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.4.gif"></p>

式中ŷ为概率单位的估计值，x为剂量对数，b为回归系数，k为组数，H为等于或略小于组数之半的正整数(k为双数时， H=k/2; k为单数时，H=(k-1)/2)，<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.12.30.bmp">U为剂量较高的H组中各概率单位的均数，<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.13.17.bmp">L为剂量较低的H组中各概率单位的均数。

<p>(3) 求LDk。按式(7)可求任何死亡率k%时的致死剂量对数lgLD<sub>k</sub>，按式(8)求其标准误slgLD<sub>k</sub>。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0204.6.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.6.gif"></p>

式中y<sub>k</sub>是死亡率为k%时的概率单位，其余符号同上。求总体LD<sub>k</sub>的95%可信区间的对数值按式(9)，

<p>(lgLD<sub>k</sub>-1.96slgLD<sub>k</sub>，lgLDk+1.96s<sub>lgLDk</sub>)，(9)取反对数即得真数值。

</p><p>例 用下表第(1)、(2)栏资料计算LD5<sub>0</sub>、LD<sub>5</sub>及二者的95%可信区间，并求剂量反应回归方程。

</p><p></p><p align="center">LD<sub>50</sub>、LD<sub>5</sub>及回归方程的计算</p><p align="center"><span class="imgdiv" style="text-align:center;"><img onclick="zoomPic(this);" align="absmiddle" width="425" height="315" src="/CRFDPIC/R200612059/R200612059.0204.8.png"></span></p>

<p>每组20只动物

</p><p>列上表。其中第(4)栏按第(2)栏由“百分数p与概率单位对照表”查得。而p=1时，是按p=1-0.25/20=0.9875校正后由详表查出。本例n=20，k=5(单数)，H=(5-1)/2=2，xm=lg550=2.7404，d=0.0700。

<Eprime(1)求LD<sub>5Eprime>及其95%可信区间。按式(2)～(4)：</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0204.11.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.11.gif"></p>
EprimeEprime
<p>取反对数得(344，384)。EprimeEprime

</p><p>(2)求剂量反应回归方程。按式(6)及式(5)</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0204.13.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.13.gif"></p>

<p>(3)求Eprime>5</sub>及其95%可信区间。查“百分数p与概率单位对照表”得p=5%时，y5=3.3551。按式(7)～(9)：</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0204.15.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0204.15.gif"></p>

<p>取反对数得(238，296)。

</p><p>所求LD<sub>50</sub>为363mg/kg，其95%可信区间为344～384mg/kg;LD<sub>5</sub>为266mg/kg，其95%可信区间为238～296mg/kg;剂量(对数)反应(概率单位)回归方程为ŷ=12.1043x-25.9888。</p></div>
{% endraw %}



### [SPSS](/tags/SPSS/)中[相关概念](/categories/数据分析服务)

- **半数效量点斜法**: 半数效量(或半数致死量)的点斜法(孙瑞元,1963)是一种计算半数效量的简捷而比较精确的近似方法。它根据点斜式直线方程,综合了面积法及概率单位法的优点。本法可用于计算LD50与任何死亡率k%时的致死剂量LDk,以及它们的95%可信区间,还可计算剂量(对数)反...




### [SPSS](/tags/SPSS/)[数据分析服务](/categories/数据分析服务/):
[EPRIME工作室](http://jupyter. cn/)专注于数据分析服务。
为科研人员提供[SPSS技术支持](http://jupyter. cn/2018/08/18/EPRIME工作室SPSS代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://jupyter. cn/2018/08/17/关于EPRIME工作室/)。

QQ: 3597392976

Email: eprime[at]163.com


