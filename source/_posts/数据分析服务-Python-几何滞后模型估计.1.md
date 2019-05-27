
---
title: 几何滞后模型估计-Python实证分析
date: 2018-11-27 20:53:14
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



### 几何滞后模型估计:

{% raw %}
<div class="p1">科伊克几何滞后模型、适应性期望模型和局部调整模型三者都是几何滞后模型。它们具有二种共同形式，一是解释变量中含有应变量滞后值：

<p></p><p align="center">y<sub>t</sub>＝γ<sub>0</sub>+γ<sub>1</sub>x<sub>t</sub>+λy<sub>t-1</sub>+e<sub>t</sub> (1)</p>

二是滞后权数几何地下降的无限分布滞后形式：

<p></p><p align="center">y<sub>t</sub>＝α<sub>0</sub>+γ<sub>1</sub>x<sub>t</sub>+γ<sub>1</sub>λx<sub>t-1</sub>+γ<sub>1</sub>λ<sup>2</sup>x<sub>t-2</sub>+…+e<sub>t</sub>(2)</p>

根据模型中e<sub>t</sub>的不同情况而采用不同的估计方法。

<p>1.最小平方估计。考虑解释变量中含有应变量滞后值的模型形式 (1)。如果e<sub>t</sub>满足古典假定，即e～(0，δ<sup>2</sup>I)表示以0为均值，δ<sup>2</sup>I为方差的分布，则参数γ=(γ<sub>0</sub>，γ<sub>1</sub>，λ)′可以采用最小平方法估计。但是由于在解释变量中有滞后应变量y<sub>t-1</sub>，它是随机的。因此，最小平方估计量

</p><p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1309.1%5B0484113391bd%5D.gif"></p>

不是最佳线性无偏的，但它是一致的。局部调整模型属于这种情况。这种模型与上述(1)式相对应的参数是：γ<sub>0</sub>＝δα，γ<sub>1</sub>＝δβ，λ=1-δ。因此δ=1-λ，α=γ<sub>0</sub>/(1-λ)，β=γ<sub>1</sub>/(1-λ)，由<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1309.18.16.bmp">可以得到原始参数α，β和δ的一致估计量。

<p>2. 工具变量估计法。当解释变量中的y<sub>t-1</sub>与误差项e<sub>t</sub>相关时，不能采用普通最小平方法，而须采用工具变量法。利维亚坦(N. Liviatan)于1963年提出了此法。此法要求y<sub>t-1</sub>的工具变量与y<sub>t-1</sub>高度相关而与误差项e<sub>t</sub>不相关。利维亚坦建议以x<sub>t-1</sub>作为y<sub>t-1</sub>的工具变量。 工具变量(IV)法估计量<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1309.25.17.bmp"><sub>IV</sub>为

</p><p></p><p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1309.26.0.bmp"><sub>IV</sub>＝(Z′X)<sup>-1</sup>Z′y (4)</p>

式中Z是工具变量 [(T-1) ×3]矩阵：<p align="center"><img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.1309.3%5B14390a1b90cd%5D.gif"></p>

<p>工具变量法估计量是一致而不一定是有效估计量。

</p><p>3. 极大似然 (ML) 估计。如果上述无限分布滞后形式的几何滞后模型

</p><p></p><p align="center">y<sub>t</sub>＝α<sub>0</sub>+γ<sub>1</sub>x<sub>t</sub>+γ<sub>1</sub>λx<sub>t-1</sub>+γ<sub>1</sub>λ<sup>2</sup>x<sub>t-2</sub>+…+e<sub>t</sub>(2)</p>

的误差e= (e<sub>1</sub>，…，e<sub>T</sub>)′是N (0，σ<sup>2</sup>I)分布的，则

可采用极大似然估计法估计。</div>
{% endraw %}



### [Python](/tags/Python/)中[相关概念](/categories/数据分析服务)

- **几何滞后模型估计**: 科伊克几何滞后模型、适应性期望模型和局部调整模型三者都是几何滞后模型。它们具有二种共同形式,一是解释变量中含有应变量滞后值:yt＝γ0+γ1xt+λyt-1+et (1)二是滞后权...
- **科伊克几何滞后模型**: 滞后权数βi按几何级数递减的模型,由科伊克于1954年提出。他假定βi＝λβi-1其中0<λ<1,这样,i期的滞后权数βi是前期权数的一个部分。通过重复替代,可以得到几何递减的一套权数βi＝...
- **适应性期望模型**: 含有适应性期望假设的模型。由费希尔 (I. Fisher)于1925年、1937年首先使用,卡根 (P · Cagan) 于1956年和弗里德曼 (M.Freidman)于1957年推广。设yt为消费,xt*是期望收入,xt是实际收入。假定消费不是与实际收入而是与期望收入有...
- **局部调整模型**: 含有局部调整假设的模型,由纳洛夫 (M. Nerlove) 于1956年提出。局部调整假设的基本思想是自变量的现值决定应变量的 “所需”值,却yt*＝ α+βxt+et (1)比如,yt*...





