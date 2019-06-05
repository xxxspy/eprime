
---
title: R数据分析案例:一个正态总体的协差阵检验
date: 2018-11-28 19:55:47
tags: [R]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->

### [R](/tags/R/)[数据分析服务](/categories/数据分析服务/):
[Eprime工作室](http://jupyter. cn/)专注于数据分析服务。
为科研人员提供[R技术支持](http://jupyter. cn/2018/08/18/Eprime工作室R代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://jupyter. cn/2018/08/17/关于Eprime工作室/)。

QQ: 3597392976

Email: Eprime[at]163.com



### 一个正态总体的协差阵检验:

{% raw %}
<div class="p1">设<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0204.58%5B6891b40fc025%5D.gif"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0204.59%5B42a1fd16a029%5D.gif">N是来自总体N<sub>p</sub>(μ，∑)的样本，μ是未知的，欲检验H<sub>0</sub>：∑=∑<sub>0</sub>，H<sub>1</sub>：∑≠∑<sub>0</sub>∑<sub>0</sub>&gt;0为已知的协差阵。似然比统计量为λ′<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0204.62%5B42c2cd35d04e%5D.gif">其中<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0204.64%5B47e32530d063%5D.gif">为样本容量，etr(A)表示e的tr(A)次幂，tr(A)为矩阵A的迹。但根据λ′作的检验是有偏的、需要作一简单的修正，即将上述统计量中的N改为n，即：λ<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0204.66%5B42d4322dd04d%5D.gif">称作修正的似然比统计量，可以证明这一检验是无偏的，当样本容量N较大时，-21nλ近似于自由度为f的χ<sup>2</sup>分布，其中<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0204.70%5B4cb4f411b04a%5D.gif">因此拒绝域为<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0204.72%5B6df5060ad028%5D.gif">(f)。若欲计算p值时，可用下面的公式<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0204.74%5B6c154a0ca026%5D.gif"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0204.75%5B429580365128%5D.gif"></div>
{% endraw %}



### [R](/tags/R/)中[相关概念](/categories/数据分析服务)

- **一个正态总体的协差阵检验**: 设N是来自总体Np(μ,∑)的样本,μ是未知的,欲检验H0:∑=∑0,H1:∑≠∑0∑0......





