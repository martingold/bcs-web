**Installation**

```bash
	git clone https://github.com/martingold/bcs-web.git

    cd bcs-web

	npm install --save
	bower install
	grunt
```

You may need to generate gallery thumbnails.


**Generating Thumbnails**

Requires installed ImageMagick.

Can be tested with

```bash
	mogrify --version
```

Example to generate gallery thumbnails:

```bash
	cd www/assets/images/gallery
    mogrify -resize 300x -format jpg -quality 80 -path thumb/ *.jpg
```