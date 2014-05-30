#!/bin/bash
img=${1}
if [ -f ${img} ];then
    image_width=` identify ${img} |cut -d ' ' -f3 |cut -d 'x' -f 1`
    image_height=`identify ${img} |cut -d ' ' -f3 |cut -d 'x' -f 2`
    echo w:${image_width} h:${image_height}
fi
