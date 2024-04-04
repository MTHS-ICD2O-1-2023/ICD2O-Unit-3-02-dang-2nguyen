// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateTheVolume() {

  // input
  const length = parseFloat(document.getElementById('length').value)
  const width = parseFloat(document.getElementById('width').value)
  const height = parseFloat(document.getElementById('height').value)

  // process
  const volume = (length * width * height)/3


  // output
  document.getElementById('volume').innerHTML = 'volume is : ' + volume.toFixed(2) + 'mm²'
}