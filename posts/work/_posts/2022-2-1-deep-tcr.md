---
layout: post
title: "DeepTCR: Tropical Cyclone Rainfall Forecasting @ PNNL"
date: 2021-2-15
description: work 2
img: hurricane.jpg
img-caption: https://www.britannica.com/event/Hurricane-Katrina
tags: [deep-learning, computer-vision, ocean/atmospheric-science, remote-sensing]
links:
 paper (draft): /files/Deep_TCR_rev11.pdf
start: Winter 2021
end: Present
---

Developing a physics-inspired deep learning architecture for hurricane rainfall forecasting, outperforming state-of-the-art numerical models. Work is continuing as a funded project.

In Winter 2021, I joined as a paid intern at Pacific Northwest National Lab, beginning another project with mentor Wenwei Xu. This project, which came to be called DeepTCR, seeks to incorporate physics and atmospheric science understandings of Tropical Cyclones (also known as Hurricanes or Typhoons) into deep-learning models. We integrated features of [Lu et al.][TCR]'s cutting-edge physical model of Tropical Cyclones to our own custom neural network architecture.

![DeepTCR Results on Hurricane Harvey](/assets/img/deeptcr-harvey.png)
*DeepTCR comparative results*

Evaluated on at a pixel-level, our model produced more accurate results than  the purely physical approach. Qualitatively, we found that our model tended to predict a better spatial distribution, though did not capture the magnitude of rainfall peaks as accurately. We are actively continuing work on this front, exploring weighted losses and potentially Generative Adversarial Network components.

<i>All opinions expressed are my own and do not reflect those of PNNL or other collaborators.</i>

[TCR]: https://doi.org/10.1175/JAS-D-17-0264.1