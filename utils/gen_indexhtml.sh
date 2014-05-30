#!/bin/bash
image_width=`identify out0_image.jpg |cut -d ' ' -f3 |cut -d 'x' -f 1`
image_height=`identify out0_image.jpg |cut -d ' ' -f3 |cut -d 'x' -f 2`
