
---
title: SASZoutendijk可行方向法代做数据分析
date: 2018-08-21 19:54:27
tags: [运筹学, SAS]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->



### Zoutendijk可行方向法:

{% raw %}
<div class="p1">适用于线性约束和非线性不等式约束的非线性规划的两种算法。

<p>1. 线性约束的情形：

</p><p></p><p align="center">minf(X)</p>

满足<p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1345.21%5B4935d0084059%5D.gif"></p>

其中A和E分别是m×n和l×n阶矩阵，b和e分别是m和l维列向量。Zoutendijk可行方向法的迭代步骤：

<p>(1) 给定初始可行点X°，允许误差ε&gt;0，令k=0。

</p><p>(2) 令<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1345.24%5B4c871b147055%5D.gif">使A<sub>1</sub>X<sup>k</sup>＝b<sub>1</sub>，A<sub>2</sub>X<sup>k</sup>&gt;b<sub>2</sub>。

</p><p>(3) 求解线性规划问题</p><p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1345.27%5B40c7ec26b0d5%5D.gif"></p>

这里P= (p<sub>1</sub>，p<sub>2</sub>，…，p<sub>n</sub>)<sup>T</sup>，得最优解P<sup>k</sup>。

<p>(4) 若|▽f (X<sup>k</sup>)<sup>T</sup>P<sup>k</sup>|≤ε，则迭代停止，得X<sup>k</sup>为K-T点。否则，转 (5)。

</p><p>(5) 令μ<sup>k</sup>＝A<sub>2</sub>X<sup>k</sup>-b<sub>2</sub>，<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1345.68.36.bmp"><sup>k</sup>＝-A<sub>2</sub>P<sup>k</sup>。

</p><p>(6) 若<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1345.69.5.bmp"><sup>k</sup>≤0，则从X<sup>k</sup>出发，沿P<sup>k</sup>进行一维搜索</p><p align="center">minf(X<sup>k</sup>+λP<sup>k</sup>)=f(X<sup>k</sup>+λ<sub>k</sub>P<sup>k</sup>)</p>

令X<sup>k+1</sup>＝X<sup>k</sup>+λ<sub>k</sub>P<sup>k</sup>确定在点X<sup>k+1</sup>的起作用约束 (见“库恩-塔克条件”)，修改A<sub>1</sub>，A<sub>2</sub>及b<sub>1</sub>，b<sub>2</sub>，并令k=k+1，返回 (2)。否则转 (7)。

<p>(7) 计算<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1346.1%5B17d0ea173056%5D.gif">求解</p><p align="center">minf(X<sup>k</sup>+λP<sup>k</sup>)，0≤λ≤λ<sub>max</sub></p>

得最优解λ<sub>k</sub>。令X<sup>k+1</sup>＝X<sup>k</sup>+λ<sub>k</sub>P<sup>k</sup>，确定在点X<sup>k+1</sup>的起作用约束，修改A<sub>1</sub>，A<sub>2</sub>及b<sub>1</sub>，b<sub>2</sub>，并令k=k+1，返回 (2)。

<p>2. 非线性不等式约束情形：

</p><p>minf(X)，满足g<sub>i</sub>(X)≥0，i=1，…，m. 其迭代步骤：

</p><p>(1)给定初始可行点X°，允许误差ε&gt;0，令k= 0。

</p><p>(2)设I (X<sup>k</sup>)={i|g<sub>i</sub>(X<sup>k</sup>)=0}。求解线性规划问题

</p><p></p><p align="center">min Z</p>

<p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1346.4%5B12f3ee22d09d%5D.gif"></p>

得最优解 (Z<sup>k</sup>，P<sup>k</sup>)。

<p>(3)若|Z<sup>k</sup>|≤ε，则X<sup>k</sup>是Fritz John点，迭代停止;否则转 (4)。

<Eprime(4) 解一维搜索问题Eprime
EprimeEprime
</p><p></p><p align="ceEprimeminf(X<sup>k</supEprimeup>k</sup>)，0≤λ≤λ<sub>max</sub></p>

其中λ<sub>max</sub>＝max{λ|g<sub>i</sub>(X<sup>k</sup>+λP<sup>k</sup>)≥0}，得最优解λ<sub>k</sub>。令X<sup>k+1</sup>＝X<sup>k</sup>+λ<sub>k</sub>P<sup>k</sup>，k=k+1返回 (2)。</div>
{% endraw %}
Eprime


### [SAS](/tags/SAS/)中[相关概念](/categories/数据分析服务)

- **Zoutendijk可行方向法**: 适用于线性约束和非线性不等式约束的非线性规划的两种算法。1. 线性约束的情形:minf(X)满足其中A和E分别是m×n和l...
- **可行方向法**: 从可行点出发,沿下降可行方向进行一维搜索获得一新的目标函数下降的可行点,如此反复以逐步寻求约束非线性规划问题最优解的一类下降算法。包含卓坦狄克 (Zoutendijk) 可行方向法、梯度投影法、简约梯度法和广义简约梯度法等,常特指卓坦狄克可行方向法。...


### [SAS](/tags/SAS/)[参考文献](/categories/数据分析服务/)

- [1]  王月娇;刘三阳; 生物地理学优化算法中基于Zoutendijk可行方向法的变异算子设计. 浙江大学学报(理学版) ,2018,(01)
- [2]  刘建美; 基于不同线搜索技术的改进Zoutendijk可行方向法及Matlab实现——浅谈在交通配流问题上的应用. 数学的实践与认识 ,2014,(21)
- [3]  李晓;杨虹;高红霞; 浅谈Zoutendijk可行方向法对焊接工字钢的优化设计. 四川建筑 ,2011,(04)
- [4]  王佳佳; 线性约束情形下Zoutendijk可行方向法的改进. 科技信息 ,2009,(05)
- [5]  许宏洲;王全凤; Zoutendijk可行方向法可能失效的原因及其对策. 基建优化 ,2005,(01)


### [SAS](/tags/SAS/)[数据分析服务](/categories/数据分析服务/):
[EPRIME工作室](http://eprime.cn/)专注于数据分析服务。
为科研人员提供[SAS技术支持](http://eprime.cn/2018/08/18/EPRIME工作室SAS代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://eprime.cn/2018/08/17/关于EPRIME工作室/)。

QQ: 3597392976

Email: eprime[at]163.com


