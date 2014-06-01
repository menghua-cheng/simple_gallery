Simple Gallery Overview
=======================

This is a simple gallery website. It is built by
  * fancybox  http://fancybox.net/
  * free html template shutterpress : http://www.tekniksivama.com/

We use html5 canvas to show pictures and block right click for user download.
Click "index.html" to visit whole site.

The format of image-list.json
=============================

The gallery shows many images under **image/** directory, and you should list all the wanted images in **config/image-list.json**.

The format of config/image-list.json is as following :  
```json
{
    "file_list": {
        <image file base name/compressed image name> : [
            <width>x<height>,
            <num of horizontal parts>x<num of vertical parts>
        ],
        ...
    }
}
```

For example, If you have 
* a.jpg : 800 x 480 and is split to 16 parts ---> a_00.jpg to a_15.jpg, with a compressed image called a.jpg
* b.png : 1920 x 1080 and is split to 12 parts (3x4) ---> b_00.png to b_11.png, with a compressed image called b.png

The image-list.json is like :

```json
{
    "file_list": {
        "a.jpg" : [
            800x480,
            4x4
        ],
        "b.png" : [
            1920x1080,
            4x3
        ],
    }
}
```

