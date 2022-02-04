---
layout: post
title: "Computer Vision for School Safety"
date: 2022-2-1
img: school-safety-model.png
tags: [deep-learning, computer-vision]
start: Fall 2020
distributed: "CSCSU 2021"
links:
 paper: http://hdl.handle.net/20.500.12680/z603r339d
 conference: https://scholarworks.calstate.edu/collections/zp38wj490?locale=en
---

In collaboration with the World Bank, my group project team for CSC 480 Artificial Intelligence developed a system for classifying the structural integrity of school buildings in developing countries, specifically Kyrgystan.

<!--more-->

In collaboration with the World Bank, my group project team for CSC 480 Artificial Intelligence developed a system for classifying the structural integrity of school buildings in developing countries, specifically Kyrgystan (pron. _keer-guh-ston_).

The specific code and data is not publicly available, per our agreement with the World Bank and in concern for the privacy of participating schools. However, [our paper](http://hdl.handle.net/20.500.12680/z603r339d) was accepted to the peer-reviewed Computer Science Conference for CSU Undergraduates (CSCSU) 2021, and I had the honor of being the presenter for my group at that conference.

Our work consisted of upgrading, training, and tuning a very large Computer Vision model. The most interesting facet of this project, looking back on it now,
was the fact that the model that we inherited from the project's previous group was, frankly, in a terrible state. They claimed up to 90% accuracy in some categories; yet we quickly learned that the dataset was wildly imbalanced, so much so that that category was 90% one class. In fact, the model was just guessing the most likely category every time. This main improvements we made to the model were focused on addressing this issue: weighting the loss and augmenting the data toward loss frequent examples, to account for the drastic imbalance. 

<!-- <div class="dash-seperator"></div> -->

<i>All opinions expressed are my own and do not reflect those of the World Bank or other collaborators.</i>
