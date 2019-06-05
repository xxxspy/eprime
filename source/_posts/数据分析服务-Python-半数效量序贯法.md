
---
title: Python半数效量序贯法代做数据分析
date: 2018-09-02 21:31:44
tags: [Python]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->



### 半数效量序贯法:

{% raw %}
<div class="p1">半数效量(或半数致死量)的序贯法又称上下法，是一种简便、快速、粗略测定半数效量的方法。适用于很快发生反应的药物。由W.J.Dixon首创，经K.Brownlee改进。此法特点是将受试动物逐只地序贯地进行实验，根据前一只的反应，决定后一只的采用剂量，能使剂量进程集中在最有效的反应率50%附近，避免出现效率不高的反应率，故可大量节省实验动物数，最后用加权均数法求得半数效量。

<p><font color="#0A0A6C"><small>方法</small></font> 剂量组按等比级数分为4～6组。实验从最可能接近ED<sub>50</sub>的剂量组开始，一只一只动物进行。如出现阳性反应，则下一只动物用低一级的剂量;如出现阴性反应，下一只动物就用高一级剂量。实验的动物数n从反应发生改变的前一个动物开始计算。估计本法需要动物数为12～20只。

</p><p>如在药物致死实验中，得到各剂量的动物死亡数r、存活数s、合计数n及死亡率p，即可按式(1)、式(2)，求半数致死量LD<sub>50</sub>及其标准误slgLD<sub>50</sub>; 按正态近似原理可由式(3)求出总体LD<sub>50</sub>的95%可信区间的对数值，取反对数即得真数值。</p><p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0206.6.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0206.6.gif"></p>

<p>(lgLD50-1.96slgLD50，lgLD50+1.96slgLD50)。(3)例 用某农药对小白鼠进行序贯急性毒性实验，设计及实验结果见表1。两相邻剂量对数的差值d=0.1662，给药从剂量315.2mg/kg开始，实验到四只鼠后，反应符号改变，故从其前一鼠作第1号动物，共用鼠20只。求其半数致死量。

</p><p></p><p align="center">表1 序贯法动物存(0)亡(×)记录</p><p align="center"><span class="imgdiv" style="text-align:center;"><img onclick="zoomPic(this);" align="absmiddle" width="620" height="142" src="/CRFDPIC/R200612059/R200612059.0206.9.png"></span></p>

<p>对表1作表2分析：

</p><p></p><p align="center">表2 实验结果分析</p><p align="center"><span class="imgdiv" style="text-align:center;"><img onclick="zoomPic(this);" align="absmiddle" width="426" height="204" src="/CRFDPIC/R200612059/R200612059.0206.11.png"></span></p>

再将表2合计代入式(1)及式(2)，<p align="center"><img imgpath="/CRFDPIC/R200612059/R200612059.0206.13.png" align="absmiddle" src="/CRFDPIC/R200612059/R200612059.0206.13.gif"></p>

<p>按式(3)，LD<sub>50</sub>的95%可信区间为

</p><p>(2.1994-1.96×0.0456，2.1994+1.96×0.0456)=(2.1100，2.2888)，取反对数得(129，194)。

</p><p>故此农药的LD<sub>50</sub>为158.3mg/kg，其95%可信区间为129～194mg/kg。</p></div>
{% endraw %}



### [Python](/tags/Python/)中[相关概念](/categories/数据分析服务)

- **半数效量序贯法**: 半数效量(或半数致死量)的序贯法又称上下法,是一种简便、快速、粗略测定半数效量的方法。适用于很快发生反应的药物。由W.J.Dixon首创,经K.Brownlee改进。此法特点是将受试动物逐只地序贯地进行实验,根据前一只的反应,决定后一只的采用剂量,能使剂量进程集中在最有效的反应率5...
EprimeEprime
EprimeEprime
### [Python](/tags/PythEprime考文献](/categories/Eprime/)

- [1]  刘利佳;王钟宇;金波;暴惠君;崔伟;王佳;胡东昊;李琳;李国庆; 靶控输注瑞芬太尼半最大效应浓度的临床研究. 实用药物与临床 ,2016,(07)
- [2]  解春艳;秦再生;古妙宁;张璐; 瑞芬太尼引起呼吸抑制时的靶控血浆浓度. 新乡医学院学报 ,2009,(03)
- [3]  Eprime钦;杨玉欣; 咪唑安定与丙泊酚对脑电双频指数的影响. 临床麻醉学杂志 ,2007,(01)


### [Python](/tags/Python/)[数据分析服务](/categories/数据分析服务/):
[EPRIME工作室](http://jupyter. cn/)专注于数据分析服务。
为科研人员提供[Python技术支持](http://jupyter. cn/2018/08/18/EPRIME工作室Python代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://jupyter. cn/2018/08/17/关于EPRIME工作室/)。

QQ: 3597392976

Email: eprime[at]163.com


