#!/usr/bin/sh

# Minor utility script to clone the latest preview image from misc/img/

curDate=$(date "+%Y-%m-%d")

imageFile=misc/img/website_$curDate.png

echo Updating preview $imageFile...

if test -f $imageFile; then
	cp $imageFile preview.png
	echo Done.
else
	echo No such file.
fi
