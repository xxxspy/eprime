
---
title: SAS数据分析案例:原始对偶单纯形法
date: 2018-08-21 19:54:27
tags: [运筹学, SAS]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->



### 原始对偶单纯形法:

{% raw %}
<div class="p1">由丹捷格 (Dantzig)、福特(Ford)和福菜克森(Fulekerson)于1956年提出。它在应用一般线性规划时，是以松弛这理为理论依据，把两阶段法中的两个阶段结合起来，包含原始单纯形法和对偶单纯形法两者的思想，故称“原始对偶单纯形法”。它能同时求出原始和对偶问题的最优解。考虑

<p align="center"></p><div class="dtable"><table class="viewtb" border="1"><tr valign="top"><td class="viewtd">

原始问题</td><td class="viewtd">

对偶问题</td></tr><tr valign="top"><td class="viewtd">　<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043_R200806043.1332.15%5B4298713280FA%5D.4.0.bmp"></td><td class="viewtd">　<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043_R200806043.1332.15%5B4298713280FA%5D.5.0.bmp"></td></tr></table></div>

其中A=(A<sub>·1</sub>，A<sub>·2</sub>，…，A<sub>·n</sub>)是m×n矩阵。 已知对偶问题 (Ⅱ) 的任一可行解Y，定义

<p></p><p align="center">K={j|YA<sub>·j</sub>＝c<sub>j</sub>，1≤j≤n}</p>

对应于Y和K，定义一新的线性规划称为问题(Ⅰ)的

限制原始问题：

<p align="center"><span class="imgdiv" style="text-align:center;"><img onclick="zoomPic(this);" align="absmiddle" width="409" height="155" src="/CRFDPIC/R200806043/R200806043.1333.0%5B0470fb356144%5D.png"></span></p>

其对偶问题称为限制对偶问题：

<p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1333.2%5B04728b2b0097%5D.gif"></p>

<p>设(Ⅲ)、(Ⅳ)的最优解分别为(X<sup>*</sup>，U<sup>*</sup>)、V<sup>*</sup>，可以得到以下结果

</p><p>最优性定理： 设已知Y是问题 (Ⅱ) 的可行解，

</p><p>1. 若U<sup>*</sup>＝0，则X<sup>*</sup>和Y分别是 (Ⅰ) 和 (Ⅱ)的最优解。

</p><p>2. 若U<sup>*</sup>≠0，则有

</p><p>(1) 若V<sup>*</sup>A<sub>·j</sub>≤0， j=1， 2， …， n， 则问题(Ⅰ) 无可行解。

</p><p>(2)若存在j，使V<sup>*</sup>A<sub>·j</sub>&gt;0， 则定义 (Ⅱ)的可行解<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1333.11.2.bmp">＝Y+ε<sub>0</sub>V<sup>*</sup>， 其中

</p><p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1333.4%5B0945782d1056%5D.gif"></p>

可Eprimealign="absmiEprimesrc="/CRFDPIC/R200806043/R200806043.1333.12.2.bmp">是问题 (Ⅱ) 的一个新可行解， 且<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1333.12.21.bmp">b&lt;Yb。
EprimeEprime
<p>有了新的<img align="absmEprime src="/CRFDPIC/R2Eprime43/R200806043.1333.13.4.bmp">， 可定义新的<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1333.13.12.bmp">， 以<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1333.13.16.bmp">代替Y，<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1333.13.21.bmp">代替K，可得新的限制问题(Ⅲ)和(Ⅳ)。重复以上讨论，开始新的迭代。最终能确定(Ⅰ)和(Ⅱ)的最优解或 (Ⅰ) 无可行的解的结论。</p></div>
{% endraw %}


Eprime
### [SAS](/tags/SAS/)中[相关概念](/categories/数据分析服务)

- **原始对偶单纯形法**: 由丹捷格 (Dantzig)、福特(Ford)和福菜克森(Fulekerson)于1956年提出。它在应用一般线性规划时,是以松弛这理为理论依据,把两阶段法中的两个阶段结合起来,包含原始单纯形法和对偶单纯形法两者的思想,故称“原始对偶单纯形法”。它能同时求出原始和对偶问题的最优解。考虑...
- **原始-对偶方法**: 求解线性规划的一种算法.指求解线性规划的一类特殊对偶型方法.其特殊性在于,它是以松弛互补性条件为基础去构造一个由原问题产生的限定问题,并通过求解此限定问题去改善解对原问题的可行性.这一过程含有单纯形方法与对偶单纯形方法的思想,所以有此名.设原问题(P)为min Z=c...


### [SAS](/tags/SAS/)[参考文献](/categories/数据分析服务/)

- [1]  曾友芳;潘华琴; 二阶锥规划的Lagrange对偶及2维原始对偶单纯形法. 广西大学学报(自然科学版) ,2009,(06)


### [SAS](/tags/SAS/)[数据分析服务](/categories/数据分析服务/):
[EPRIME工作室](http://jupyter. cn/)专注于数据分析服务。
为科研人员提供[SAS技术支持](http://jupyter. cn/2018/08/18/EPRIME工作室SAS代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://jupyter. cn/2018/08/17/关于EPRIME工作室/)。

QQ: 3597392976

Email: eprime[at]163.com


