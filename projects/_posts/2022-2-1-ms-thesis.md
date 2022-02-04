---
layout: post
title: "Deep Learning for Remote Detection of Urban Trees"
date: 2022-2-1
description: "Masters Thesis"
img: trees-split.png
tags: [deep-learning, earth-science, remote-sensing]
start: Fall 2021
end: Summer 2022 (expected)
links:
    githib (private at the moment): https://github.com/JRice15/trees-pointnet
---

My Master's thesis is an ongoing project to explore deep learning techniques for detection of urban trees from LIDAR data.

My Master's thesis, advised by [Dr. Jonathan Ventura](https://jonathanventura.github.io), is an ongoing project to explore deep learning techniques for detection of urban trees from LIDAR data.

## Background

LIDAR is a type of data collected by bouncing laserbeams off of surfaces and measuring the amount of time they take to return to the source. From this technique, we can generate a cloud of points in 3-D space that approximates the surfaces in the area of interest. This type of data is interesting for multiple reasons:
1. 3-dimensional: unlike images, LIDAR captures the 3D structure of objects.
2. Unstructured: The data itself has no structure beyond the point level; since we have to store the points in a file one after the other, we cannot preserve in memory the locality of the data; that is, two points that are close in 3D space may be very far apart from each other in the file

![Lidar](/assets/img/lidar.png)
*Example of LIDAR showing a region in Santa Monica*

## Approach

The first property makes LIDAR an especially appealing data source for machine learning tasks in comparison to, for example, images, which nescessarily lose structural information. However, the second property means we must utilize new
deep-learning algorithms that are _invariant_ to the order of its input points. Although a number of approaches have been developed around tranforming the pointcloud data into something easier to work with, Qi et al. were the first to develop deep neural networks that operated directly on the points themselves, with [PointNet]. They leverage symmetric functions (functions where `f(a, b) == f(b, a)`, such as `+` or `max`) to achieve invariance to the order of inputs, along with a few other tricks.

My goal is to extend their approach to the specific domain of remote urban tree detection. We have access to LIDAR data collected from aircraft in various cities, as well as high-resolution multi-spectral imagery, and tree inventories collected by arborists. Combining these sources of data, I hope to develop a novel approach to this task that can assist in the detection, inventory, and monitoring of our urban forests.



[PointNet]: https://arxiv.org/abs/1612.00593