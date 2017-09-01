# Web Ocr
A simple web app in using MEAN stack for OCR using Tesseract API
The app is hosted here : 

### Frontend Tools
* Angular js
* Bootstrap

### Backend Tools
* Node js
* Express js

### Api dependencies
* Tesseract Ocr
* Leptonica
* Node tesseract

## Usage
1. Clone the repository
2. Install dependencies using 

    ```
        npm install
    ``` 
3. For API dependencies refer
    [API-INSTALLATION.md](https://github.com/omkarprabhu-98/WebOCR/blob/master/API-INSTALLATION.md) 
4. Run 
    ```
        npm start
    ```
   and open http://localhost:3000 in your browser     

## Contributing    
    
## Limitations
The projects is dependent on the Tesseract API functions
* Best results come if a image of resolution atleast 300dpi is provided
* For better results tesseract converts the image to black and white which may go horribly wrong if the image has different lighting conditions in different parts
* Noise which is variations in color of image can result in lower accuracy
* Position of text in image if not horizontal is almost unreadable to tesseract
    
    