
---
title: R半数效量移动平均法代做数据分析
date: 2018-09-02 00:31:44
tags: [R]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->



### 半数效量移动平均法:

{% raw %}
<div class="p1">半数效量(或半数致死量)的移动平均法是一种计算半数效量的简便方法，由R.Thompson首创。在此基础上C. S. Weil 和 H. J. Horn编制成了便查表，用查表代替计算，甚为方便，但不够精确;E. K. Harris又提出角变换法。本条目将以半数致死量为例来说明。其基本原理是在围绕50%死亡率的移动平均剂量之间，用直线内插法确定半数致死量的对数值，其反对数即半数致死量的估计值。

<p>本法要求： ①每一剂量组的受试动物数相等，一般只用4～5只。因实验动物数较少，实验设计时应严格选择动物。②剂量按等比级数排列，取剂量组数为k+1，k为移动平均的跨度组数，如k=3，剂量组数即为4。

</p><p><strong>Thompson法</strong> 按式(1)、(2)计算lgLD50 (取反对数即LD<sub>50</sub>)及其标准误slgLD<sub>50</sub>。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0205.7.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0205.7.gif"></p>

式中x<sub>1</sub>为所用剂量组中的最低剂量对数，d为两相邻剂量对数的差值，n为每组受试动物数，r为每组死亡动物数，s为每组存活动物数，s=n-r，f为r的函数，其变化范围为0≤f≤1。

<p>按正态近似原理，总体LD50的95%可信区间的对数值用式(3)计算，

</p><p>(lgLD50-1.96slgLD50，lgLD50+1.96slgLD50)，(3)取反对数即得真数值。

</p><p><strong>角变换法</strong> 方法步骤： ①将反应率作平方根反正弦变换(见条目“百分数p的平方根反正弦变换”)，目的是使剂量(对数)反应曲线直线化。②计算移动平均角度。k为3或5个剂量组。③按式(4)作线性内插求LD<sub>50</sub>。平均角度45°(相当于反应率为50%)所对应的剂量对数即lgLD<sub>50</sub>，取反对数即LD<sub>50</sub>。

</p><p></p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0205.9.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0205.9.gif"></p>

式中y′、y分别为45°上下的移动平均角度，x′、x分别为其相对应的剂量对数。

<p>例 对某化学药物作豚鼠急性毒性试验，结果见表第(1)～(5)栏。试用移动平均法求LD<sub>50</sub>。

</p><p></p><p align="center">移动平均法求LD<sub>50</sub>计算表</p>

<p></p><p align="center"></p><div class="dtable"><table imgpath="/CRFDPIC/R200612059/R200612059.0205.12.png" class="viewtb" border="1"><tr valign="top"><td class="viewtd">

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

sin-1<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059_R200612059.0205.12.17.5.bmp"><br>

(6)</td><td class="viewtd">

移动平均(k=3)<br>

y<br>

(7)</td></tr><tr valign="top"><td class="viewtd">

100</td><td class="viewtd">

2.0000</td><td class="viewtd">

5</td><td class="viewtd">

0</td><td class="viewtd">

0.05*</td><td class="viewtd">

12.92</td><td class="viewtd">　</td></tr><tr valign="top"><td class="viewtd">

215<br>

464<br>

1000</td><td class="viewtd">

2.3333<br>
EprimeEprime
2.6666<br>EprimeEprime
EprimeEprime
3.0000</td><td class="viewtd">

5<br>
Eprime
5<br>

5</td><td class="viewtd">

1<br>

3<br>

4</td><td class="viewtd">

0.20<br>

0.60<br>

0.80</td><td class="viewtd">

26.56<br>

50.77<br>

63.43</td><td class="viewtd">

30.0833<br>

46.9200</td></tr></table></div>

<p>· r为0时校正p=0.25/5=0.05

</p><p>(1)用Thompson法求LD<sub>50</sub>及其95%可信区间。

</p><p>今n=5，k=3，d=0.3333。代入式(1)，</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0206.0.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0206.0.gif"></p>

<p>取反对数得(214，832)。

</p><p>该毒物的LD<sub>50</sub>为422mg/kg，其95%可信区间为214～832mg/kg。

</p><p>(2)用角变换法求LD<sub>50</sub>。

</p><p>查“百分数p与sin-1<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0206.5.12.bmp">对照表”，将表第(5)栏变换为第(6)栏。

</p><p>取k=3，计算移动平均数y，见表第(7)栏。

</p><p>y=(12.92+26.56+50.77)/3=30.0833，y′=(26.56+50.77+63.43)/3=46.9200。

</p><p>由表第(2)栏得相应的x=2.3333，x′=2.6666，代入式(4)：

</p><p></p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0206.2.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0206.2.gif"></p>

<p>与上法结果相近。</p></div>
{% endraw %}



### [R](/tags/R/)中[相关概念](/categories/数据分析服务)

- **半数效量移动平均法**: 半数效量(或半数致死量)的移动平均法是一种计算半数效量的简便方法,由R.Thompson首创。在此基础上C. S. Weil 和 H. J. Horn编制成了便查表,用查表代替计算,甚为方便,但不够精确;E. K. Harris又提出角变换法。本条目将以半数致死量为例来说明。其基本原理是在围绕50%死亡率的...
- **长期趋势**: 指某种现象在相当长的时间内沿着一定方向发展变动的基本趋势。分析现象的长期趋势,可确定其发展方向、速度和规律,探求合适的趋势线。形态有直线趋势和非直线趋势。对长期趋势的测定就是对动态数列资料进行加工修匀。方法有:时间扩大法、半数平均法、移动平均法和最小...




### [R](/tags/R/)[数据分析服务](/categories/数据分析服务/):
[EPRIME工作室](http://jupyter. cn/)专注于数据分析服务。
为科研人员提供[R技术支持](http://jupyter. cn/2018/08/18/EPRIME工作室R代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://jupyter. cn/2018/08/17/关于EPRIME工作室/)。

QQ: 3597392976

Email: eprime[at]163.com


