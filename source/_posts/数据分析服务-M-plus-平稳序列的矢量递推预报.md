
---
title: 平稳序列的矢量递推预报-M-plus论文数据分析代做
date: 2018-10-31 13:34:12
tags: [统计的一般理论和方法, 时间序列, M-plus]
category: 数据分析服务
toc: true

---



<span></span>
<!-- more -->

### [M-plus](/tags/M-plus/)[数据分析服务](/categories/数据分析服务/):
[Eprime工作室](http://jupyter. cn/)专注于数据分析服务。
为科研人员提供[M-plus技术支持](http://jupyter. cn/2018/08/18/Eprime工作室M-plus代做服务详情/), 订单式, 先服务后收费, 不满意不收费。
关于我们的简介可以访问[这里](http://jupyter. cn/2018/08/17/关于Eprime工作室/)。

QQ: 3597392976

Email: Eprime[at]163.com



### 平稳序列的矢量递推预报:

{% raw %}
<div class="p1">设平稳序列{x<sub>t</sub>}适合ARMA (p， q) 模型，<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0169.49.15.bmp"><sub>t</sub>(l) 为在时刻t对t+l所作线性最小方差预报。定义预报矢量<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0169.50.15.bmp"><sub>t</sub>(q)=<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0169.50.26.bmp"><sub>t</sub>(1)，<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0169.50.37.bmp"><sub>t</sub>(2)， …，<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0169.51.7.bmp"><sub>t</sub>(q)。 通过递推关系可得<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0169.51.27.bmp"><sub>t+1</sub>(l) =<img align="absmiddle" src="/CRFDPIC/R200806043/R200806043.0169.51.41.bmp"><sub>t</sub>(l+1) +G<sub>l</sub>e<sub>t</sub>(1)，其中G<sub>l</sub>是ARMA模型的格林函数，表明新的预报值是在旧预报值的基础上加一修正项，这个修正项正比于旧的一步预报误差。这意味着如果已经有了旧的预报结果，则在重新预报时，只需要对旧预报值加以修正而不必对全部历史数据进行计算，因为旧的预报已利用了过去积累的全部历史信息，新的预报只要根据新的观察数据所带来的新信息加以修正即可。递推预报大大减少了对计算机存贮量的要求，同时也提高了计算速度，特别是对于需要对大量历史数据加权求和的MA和ARMA序列的预报来说更具有意义。</div>
{% endraw %}



### [M-plus](/tags/M-plus/)中[相关概念](/categories/数据分析服务)

- **平稳序列的矢量递推预报**: 设平稳序列{xt}适合ARMA (p, q) 模型,t(l) 为在时刻t对t+l所作线性最小方差预报。定义预报矢量...





