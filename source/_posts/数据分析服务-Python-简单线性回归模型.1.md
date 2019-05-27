
---
title: 简单线性回归模型-Python论文数据分析代做
date: 2018-11-29 10:53:14
tags: [计量经济学, Python]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->

### [Python](/tags/Python/)[数据分析服务](/categories/数据分析服务/):
[Eprime工作室](http://Eprime.cn/)专注于数据分析服务。
为科研人员提供[Python技术支持](http://Eprime.cn/2018/08/18/Eprime工作室Python代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://Eprime.cn/2018/08/17/关于Eprime工作室/)。

QQ: 3597392976

Email: Eprime[at]163.com



### 简单线性回归模型:

{% raw %}
<div class="p1">二变量线性回归模型。模型

是对现实的抽象和表述;在计量经济学中，模型一般是

用数学形式表示的。回归在字面上是返回之意。英国生

物学家高尔顿 (Francis Galton)在研究子女身高与父

母身高之间的关系时引入回归一词，他认为子女身高

有回归到总体平均身高的趋势，说这是 “回归到普通

人”。而在计量经济学中的回归分析，则是指描述和研

究经济变量之间的随机关系。最简单的形式是只有X

和Y两个变量之间随机关系的数学形式，这就是简单

线性回归模型，也就是二变量线性回归模型。如下式所

示。

<p></p><p align="center">Y=α+βX+e (1)</p>

式中，Y是应变量，亦称回归应变量或被解释变量;X

是自变量，亦称回归自变量或解释变量、设计变量，为

固定的或非随机的; e是随机扰动，亦称误差项，为随

机变量;α和β是未知的回归参数或称位置参数，其中

α是截距，β是斜率。比如一定时期的家庭消费支出

(Y)与家庭收入 (X)之间的关系就可用 (1)式来表

示。

<p>(1) 式中，解释变量X的方次为1，Y是X的线

性函数;同时，就参数而言，Y也是参数α和β的线性

函数。线性回归中的线性，一般是指参数的线性，而不

管解释变量是否为线性。

</p><p>(1)式中，α+βX是Y的确定部分，e是Y的随机

部分。随机变量e使Y也成为随机变量。于是，对于

X的每一个值，Y与之对应的不是各个确定值而是各

值的概率分布。这就是X与Y的随机关系，也是回归

模型的随机性。

</p><p>随机扰动e代表着四种主要因素。即模型中变量

的省略;模型的数学形式不完善;人们的随机行为和其

它不可预料的随机影响; 测量误差和归并误差。

</p><p>(1)式中的变量X和Y的值是可观测的，而e是

不可观测的。如果X和Y有n个观测值，则(1)式可

写成如下形式：

</p><p></p><p align="center">Y<sub>i</sub>＝α+βX<sub>i</sub>+e<sub>i</sub> (i=1，2，…n) (2)</p>

式中参数α和β是未知的，是利用已知的X和Y的n

个观测值加以估计的。为此，必须对不可观测的e<sub>i</sub>作

出四条古典假定(见“古典线性回归模型”)，然后运用

普通最小平方法(OLS)可得出参数α和β的估计量<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.24.24.bmp">

和<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.25.1.bmp">如下：<p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.1%5B13167f29508e%5D.gif"></p>

式中<span class="PUC01_E7"></span>和<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.26.4.bmp">分别是X和Y的n个观测值的平均数。

<p>如果(3)式中的X<sub>i</sub>和Y<sub>i</sub>都用其与平均数的离差

表示， 即x<sub>i</sub>＝X<sub>i</sub>-<span class="PUC01_E7"></span>，y<sub>i</sub>＝Y<sub>i</sub>-<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.28.39.bmp">，则可得到比较简单

的估计量公式：</p><p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.3%5B1bd7fe20a08e%5D.gif"></p>

<p>简单线性回归模型也可用矩阵和向量形式表示。

如果把 (2) 式的n个观测值都写出式子来，则为：</p><p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.5%5B17b9451180d1%5D.gif"></p>

可改写成<p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.7%5B48210127e1b4%5D.gif"></p>

可简写为

<p></p><p align="center">Y=Xβ+e (7)</p>

式中<p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.9%5B4193723440d0%5D.gif"></p>

其中X称为设计矩阵。若满足对不可观测的扰动e的

古典假定，则可用OLS法得到(7)式中参数β的估计

量b：<p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.11%5B4ff4f8272065%5D.gif"></p>

式中<p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.13%5B4135a735f216%5D.gif"></p>

<p>上面各个参数估计量公式，都是根据各个变量的

观测值计算出来的。例如，家庭支出Y<sub>i</sub>和家庭收入X<sub>i</sub>

有n年(或季)资料，各公式分别要求相应的计算资料，

见表1。

</p><p>表1中的第1、2、3、4栏的四个合计数 (∑) 及

平均数<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.45.3.bmp">、<span class="PUC01_E7"></span>，用以计算(3)、(4)以及(9)、 (10)式

再算(8)式，第7、8栏的两个合计数(Σ)及平均数<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.47.0.bmp">、 <span class="PUC01_E7"></span>用以计算 (5)、 (6) 式。

</p><p>参数的OLS估计量具有一些优良特性： 1.具有

线性特性， 即样本观测值Y<sub>i</sub>的线性函数： <img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.49.26.bmp">＝f(Y)，<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.50.0.bmp">＝f (Y); 2.具有无偏特性， 即E(<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.50.22.bmp">)=α，E (<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1292.50.30.bmp">)

=β;3.具有最小方差特性，即在任何线性无偏估计量

中，OLS估计量的方差最小，称为最佳估计量。总起

来说，OLS估计量是最佳线性无偏估计量(Best Linear Unbiased Estimotor，BLUE)。

</p><p></p><p align="center">表1 有关数据的计算资料</p>

<p align="center"></p><div class="dtable"><table class="viewtb" border="1"><tr valign="top"><td class="viewtd">

时 间</td><td class="viewtd">　<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043_R200806043.1293.2%5B06217F70D264%5D.3.0.bmp"></td><td class="viewtd">　<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043_R200806043.1293.2%5B06217F70D264%5D.4.0.bmp"></td><td class="viewtd">

X<sub>i</sub>Y<sub>i</sub></td><td class="viewtd">

X<sub>i</sub><sup>2</sup></td><td class="viewtd">

Y<sub>i</sub>-<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043_R200806043.1293.2%5B06217F70D264%5D.7.8.bmp">＝y<sub>i</sub></td><td class="viewtd">

X<sub>i</sub>-<span class="PUC01_E7"></span>＝x<sub>i</sub></td><td class="viewtd">

x<sub>i</sub>y<sub>i</sub></td><td class="viewtd">

x<sub>i</sub><sup>2</sup></td></tr><tr valign="top"><td class="viewtd">　</td><td class="viewtd">

1</td><td class="viewtd">

2</td><td class="viewtd">

3</td><td class="viewtd">

4</td><td class="viewtd">

5</td><td class="viewtd">

6</td><td class="viewtd">

7</td><td class="viewtd">

8</td></tr><tr valign="top"><td class="viewtd">

1

<p>2

</p><p>…</p></td><td class="viewtd">

Y<sub>1</sub>

<p>Y<sub>2</sub>

</p><p>…</p></td><td class="viewtd">

X<sub>1</sub>

<p>X<sub>2</sub>

</p><p>…</p></td><td class="viewtd">

X<sub>1</sub>Y<sub>1</sub>

<p>X<sub>2</sub>Y<sub>2</sub>

</p><p>…</p></td><td class="viewtd">

X<sub>1</sub><sup>2</sup>

<p>X<sub>2</sub><sup>2</sup>

</p><p>…</p></td><td class="viewtd">

y<sub>1</sub>

<p>y<sub>2</sub>

</p><p>…</p></td><td class="viewtd">

x<sub>1</sub>

<p>x<sub>2</sub>

</p><p>…</p></td><td class="viewtd">

x<sub>1</sub>y<sub>1</sub>

<p>x<sub>2</sub>y<sub>2</sub>

</p><p>…</p></td><td class="viewtd">

x<sub>1</sub><sup>2</sup>

<p>x<sub>2</sub><sup>2</sup>

</p><p>…</p></td></tr><tr valign="top"><td class="viewtd">

n</td><td class="viewtd">

Y<sub>n</sub></td><td class="viewtd">

X<sub>n</sub></td><td class="viewtd">

X<sub>n</sub>Y<sub>n</sub></td><td class="viewtd">

X<sub>n</sub><sup>2</sup></td><td class="viewtd">

y<sub>n</sub></td><td class="viewtd">

x<sub>n</sub></td><td class="viewtd">

x<sub>n</sub>y<sub>n</sub></td><td class="viewtd">

x<sub>n</sub><sup>2</sup></td></tr><tr valign="top"><td class="viewtd">

n</td><td class="viewtd">

ΣY<sub>i</sub></td><td class="viewtd">

ΣX<sub>i</sub></td><td class="viewtd">

∑X<sub>i</sub>Y<sub>i</sub></td><td class="viewtd">

ΣX<sub>i</sub><sup>2</sup></td><td class="viewtd">

∑y<sub>i</sub>＝0</td><td class="viewtd">

∑x<sub>i</sub>＝0</td><td class="viewtd">

∑x<sub>i</sub>y<sub>i</sub></td><td class="viewtd">

∑x<sub>i</sub><sup>2</sup></td></tr><tr valign="top"><td class="viewtd">　</td><td class="viewtd"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043_R200806043.1293.2%5B06217F70D264%5D.66.0.bmp">＝ΣY<sub>i</sub>/n</td><td class="viewtd"><span class="PUC01_E7"></span>＝ΣX<sub>i</sub>/n</td><td class="viewtd" colspan="6">　</td></tr></table></div></div>
{% endraw %}



### [Python](/tags/Python/)中[相关概念](/categories/数据分析服务)

- **简单线性回归模型**: 二变量线性回归模型。模型是对现实的抽象和表述;在计量经济学中,模型一般是用数学形式表示的。回归在字面上是返回之意。英国生物学家高尔顿 (Francis Galton)在研究子女身高与父母身高之间的关系时引入回归一词,他认为子女身高有回归到总体平均身高的趋势,说这是 ...
- **简单线性回归模型**: 见“一元线性回归模型”。...
- **简单线性回归模型**: simple linear regression model...
- **一元线性回归模型**: 又称“简单线性回归模型”。只含有一个自变量的线性回归模型。参见“经济计量模型”。...
- **多元线性回归模型**: 三变量或多于三变量的线性回归模型,即两个或多于两个解释变量的线性回归模型。它比简单线性回归模型多一个以上的解释变量,更符合现实。比如影响家庭消费支出(y)的除了家庭收入之外,还有其它因素。用一般的数学形式表达,为yi＝β...
- **12.3 线性回归算法**: 12.3.1　一元线性回归算法在客观世界中,普遍存在着变量之间的关系。数学的一个重要作用就是从数量上来揭示、表达和分析这些关系。而变量之间的关系,一般可分为确定的和非确定的两类。确定性关系可用函数关系表示,而非确定性关系则不然。在实际中最简...
- **经济计量模型**: 由具体的方程式所组成的随机的经济数学模型。方程式为:Y= a+ bX+ u式中Y代表某种商品的需求量,X代表居民个人可支配收入。Y和X称为“经济变量”,即用以描述经济活动或经济现象的数量特征和数值变化的量。在式中,变量Y称为“被解释变量”,其数值的变化是因为模型中其他变量(X)...
- **simple linear regression model**: 简单线性回归模型...
- **双变量回归模型**: 指包含有一个应变量和一个自变量的回归模型。将自变量与应变量合在一起称两个变量,是计量经济学中特有的说法。由于模型通常是线性的,所以也有人意译为“一元线性回归模型”或“简单线性回归模型”。其线性模型的一般形式如下:Yi...
- **最小二乘估计**: 也称最小平方估计,寻求回归函数中未知参数的一种估计方法。这种方法要求观察数据与回归函数估计值之间的离差平方和达最小。例如在线性回归yi＝β0+β1x1i+…+βpxpi+εi (i...





