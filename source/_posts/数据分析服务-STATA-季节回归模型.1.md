
---
title: 季节回归模型-STATA论文数据分析代做
date: 2018-11-28 09:53:15
tags: [计量经济学, STATA]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->

### [STATA](/tags/STATA/)[数据分析服务](/categories/数据分析服务/):
[Eprime工作室](http://jupyter. cn/)专注于数据分析服务。
为科研人员提供[STATA技术支持](http://jupyter. cn/2018/08/18/Eprime工作室STATA代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://jupyter. cn/2018/08/17/关于Eprime工作室/)。

QQ: 3597392976

Email: Eprime[at]163.com



### 季节回归模型:

{% raw %}
<div class="p1">用虚变量估计自变量对应变量的季节影响的模型。设用电量y与气温x的关系式为

<p></p><p align="center">y=α+βx+e (1)</p>

<p>夏季当气温上升时，空调的需求使电力消费增大，

因而可预期β取正号，y与x之间表现出正的关系;冬

季当气温上升时室内取暖的需求下降，因而可预期β

取负号，y与x之间表现出负的关系。象这样，季节这

一定性变量对用电量的影响可定义虚变量来测定。为

了避免完全多元共线性，不能定义四个虚变量而只能

定义三个虚变量称为季节虚变量。</p><p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1304.12%5B5206661a3141%5D.gif"></p>

<p>把秋季作为基础期。于是设 (1) 式中的a=a<sub>0</sub>+a<sub>1</sub>D+a<sub>2</sub>D<sub>2</sub>+a<sub>3</sub>D<sub>3</sub>，β=β<sub>0</sub>+β<sub>1</sub>D<sub>1</sub>+β<sub>2</sub>D<sub>2</sub>+β<sub>3</sub>D<sub>3</sub>。把这些代入 (1) 式，得到完全的设定：

</p><p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1304.14%5B4c78622da061%5D.gif"></p>

<p>每一季度的估计模型为</p><p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1304.16%5B48e9091fd0d7%5D.gif"></p>

<p>α<sub>1</sub>是冬季截距项对秋季截距项的离差，β<sub>1</sub>是冬季斜率项对秋季斜率项的离差。对上述这些模型可进行各种检验。例如，一个待检验的假设可以是秋季和春季之间的关系没有差异，这意味着α<sub>2</sub>＝β<sub>2</sub>＝0，这是使用(2) 式为无约束模型而约束模型为

</p><p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1305.1%5B0d412a2c406e%5D.gif"></p>

的沃尔德(Wald)检验进行检验的。如果发现某些时

期，比如说秋季和春季的用电量与气温的关系是相同

的，则可把这两季合并为一个季度，定义一个虚变量<p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1305.3%5B10a2401c1065%5D.gif"></p>

为了检验所有季节具有相同关系的假设，其条件为α<sub>1</sub>＝α<sub>2</sub>＝α<sub>3</sub>＝β<sub>1</sub>＝β<sub>2</sub>＝β<sub>3</sub>＝0。这时无约束模型为(2)式，约束模型为y=α<sub>0</sub>+β<sub>0</sub>x+e。沃尔德F统计量的分子自由度为6，分母自由度为观测值个数-8。可以预期会拒绝这个假设，因为y与x的关系在夏季为正的，在冬季为负的。</div>
{% endraw %}



### [STATA](/tags/STATA/)中[相关概念](/categories/数据分析服务)

- **季节回归模型**: 用虚变量估计自变量对应变量的季节影响的模型。设用电量y与气温x的关系式为y=α+βx+e (1)夏季当气温上升时,空调的需求使电力消费增大,因而可预期β取正号,y与x之间表现出正的关系;冬季当气温上升时室内取暖的需求下降,因而可预期β...
- **可变参数模型**: 参数随样本数据而变动的模型。一般回归模型的一个基本假定是参数不随样本观测值而变化,而可变参数模型则是违反参数为常数的假定。例如,有的模型,其解释变量在不同时期比如平时和战时对应变量有不同的影响。参数的这种变动可利用虚变量。可变参数有下列几种情况。1. 截...





