#!/bin/bash
target_image=${1}
if [ -f ${target_image} ];then
    target_path0=`dirname ${target_image}`
    target_path=`readlink -f ${target_path0}`
    out_filename_base=`basename ${target_image} .jpg`
    convert -crop 25%x25% +repage "${target_image}" "${target_path}/${out_filename_base}_%02d.jpg"
else
    echo ${target_image} not found
fi
