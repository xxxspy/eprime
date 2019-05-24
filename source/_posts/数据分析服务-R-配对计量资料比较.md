
---
title: 配对计量资料比较-R数据可视化代做
date: 2018-09-01 17:31:44
tags: [R]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->



### 配对计量资料比较:

{% raw %}
<div class="p1">配对计量资料的比较，包括配对试验中同对(或同一)受试对象分别给予两种不同处理的效果比较(如例2)，以及同一受试对象处理前后的比较(如例1)。前者的目的是推断两种处理的效果有无差别，后者的目的是推断某种处理有无作用。常用t检验以检验同对之差或前后之差的总体均数是否为0。若总体均数不为0，说明两种处理有差别，或某种处理有作用;反之，不能否定总体均数为0，则不能认为两种处理有差别，或某种处理有作用。此外，尚可用非参数法作检验，见条目“配对资料的符号秩和检验”。

<p>t检验时统计量t值的计算步骤如下：

</p><p>(1) 计算各对数据之差值d及d2，如表1第 (4)、(5)栏。

</p><p>(2) 按式(1)计算差值的均数d，按式(2)计算差值均数的标准误S<img imgpath="" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0103.50.6.bmp">，</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0103.14.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0103.14.gif"></p>

<p>式中n为样本含量，即对子数。<img imgpath="/CRFDPIC/R200612059/R200612059.0103.16.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0103.16.gif">为差值的标准差。

</p><p>(3) 按式(3)求t值，</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0103.18.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0103.18.gif"></p>

式中v为自由度。

<p>算得t值后，查t界值表得P值，按所取检验水准作出推断结论。

</p><p>例1 10例患者治疗前后的血红蛋白量见表1。问治疗对血红蛋白量有无作用?

</p><p></p><p align="center">表1 矽肺患者经克矽平治疗前后的血红蛋白量(g/dl)</p>

<p>H<sub>0</sub>： μd=0，

</p><p>H<sub>1</sub>： μd≠0。

</p><p>α=0.05。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0104.1.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0104.1.gif"></p>

查t界值表得0.5&gt;P&gt;0.2，按α=0.05水准不拒绝H<sub>0</sub>。故尚不能认为用克矽平治疗矽肺患者对血红蛋白量有作用。

<p>例2 用大白鼠配成8对，每对分别饲以正常饲料和缺乏维生素E饲料，过一定时期，测得两组大白鼠肝中维生素A的含量见表2，试比较两组维生素A含量有无差别。

</p><p></p><p align="center">表2 不同饲料组大白鼠肝中维生素A含量(iu/g)</p><p align="center"></p><div class="dtable"><table imgpath="/CRFDPIC/R200612059/R200612059.0104.3.png" class="viewtb" border="1"><tr valign="top"><td class="viewtd">

大白鼠对号</td><td class="viewtd">

正常饲料组</td><td class="viewtd">

缺乏维生素E<br>

饲料组</td><td class="viewtd">

差值，d</td><td class="viewtd">

d2</td></tr><tr valign="top"><td class="viewtd">

1<br>

2<br>

3<br>

4<br>

5<br>

6<br>

7<br>

8</td><td class="viewtd">

3550<br>

2000<br>

3000<br>

3950<br>

3800<br>

3750<br>

3450<br>

3050</td><td class="viewtd">

2450<br>

2400<br>

1800<br>

3200<br>

3Eprime>Eprime
EprimeEprime
2700<br>EprimeEprime

2500<br>

1750</tEprimeclass="viewtd">

1100<br>

-400<br>

1200<br>

750<br>

550<br>

1050<br>

950<br>

1300</td><td class="viewtd">

1210000<br>

160000<br>

1440000<br>

562500<br>

302500<br>

1102500<br>

902500<br>

1690000</td></tr><tr valign="top"><td class="viewtd">

合 计</td><td class="viewtd">

…</td><td class="viewtd">

…</td><td class="viewtd">

6500</td><td class="viewtd">

7370000</td></tr></table></div>

<p>H<sub>0</sub>： μd=0，

</p><p>H<sub>1</sub>： μd≠0。

</p><p>α=0.05。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0104.5.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0104.5.gif"></p>

<p>查t界值表得0.01&gt;P&gt;0.001，按α=0.05水准拒绝H<sub>0</sub>，接受H<sub>1</sub>。可以认为两组鼠肝中维生素A含量有差别，正常饲料组比维生素E缺乏组的含量高。</p></div>
{% endraw %}



### [R](/tags/R/)中[相关概念](/categories/数据分析服务)

- **配对计量资料比较**: 配对计量资料的比较,包括配对试验中同对(或同一)受试对象分别给予两种不同处理的效果比较(如例2),以及同一受试对象处理前后的比较(如例1)。前者的目的是推断两种处理的效果有无差别,后者的目的是推断某种处理有无作用。常用t检验以检验同对之差或前后之差的总体均数是否为0。...
- **样本均数与总体均数比较**: 样本均数与已知某总体均数(一般为理论值、标准值或经大量观察所得的稳定数值等) 比较的目的是推断样本是否为某总体的随机样本,或样本所代表的总体均数与某总体均数是否相等。配对计量资料的比较也是样本均数与总体均数比较的一种形式 (参见 “配对计量资料比较”)。上述比较...




### [R](/tags/R/)[数据分析服务](/categories/数据分析服务/):
[EPRIME工作室](http://eprime.cn/)专注于数据分析服务。
为科研人员提供[R技术支持](http://eprime.cn/2018/08/18/EPRIME工作室R代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://eprime.cn/2018/08/17/关于EPRIME工作室/)。

QQ: 3597392976

Email: eprime[at]163.com


