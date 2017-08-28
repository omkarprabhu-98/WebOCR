# How I installed API and its dependencies from source

#### Pre installation dependencies (Linux)
   ```
        sudo apt-get install g++ # or clang++ (presumably)
        sudo apt-get install autoconf automake libtool
        sudo apt-get install autoconf-archive
        sudo apt-get install pkg-config
        sudo apt-get install libpng12-dev
        sudo apt-get install libjpeg8-dev
        sudo apt-get install libtiff5-dev
        sudo apt-get install zlib1g-dev
   ```
	
### All of them are in libs directory in my project

## Leptonica 
1. Cloned the repository 
	```
	    git clone https://github.com/DanBloomberg/leptonica.git
	```
	
2. Went inside leptonica and built it using autoconf
	
	```	
		cd leptonica 
		./autobuild
		./configure
		make
		sudo make install
	```
	
## Tesseract
1. Cloned the repository 
	
	```
		git clone https://github.com/tesseract-ocr/tesseract.git tesseract-ocr
	```
		
2. Went inside leptonica and built it

	```
		cd tesseract-ocr
   	    ./autogen.sh
   		./configure
    	make
    	sudo make install
    	sudo ldconfig
	```
	
3. Then downloaded the eng.testeddata file from [data file(s) for the language(s) you interest in](https://github.com/tesseract-ocr/tesseract/wiki/Data-Files) and placed it in the tessdata directory in tesseract-ocr directory

4. Then I moved the tessdata folder to 'usr/local/share/'

 	```
 		export TESSDATA_PREFIX='/usr/local/share/'
		sudo mv tessdata $TESSDATA_PREFIX	
	```

    		
