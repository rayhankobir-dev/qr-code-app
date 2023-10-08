let input = document.getElementById('qrInput');
let qrContainer = document.getElementById('qrcode');
const navbar = document.getElementById('nav-container');
const qrform = document.getElementById('main-container');
const qrScreen = document.getElementById('qr-main-container')
const buttonContainer = document.getElementById('button-container')
let generateQRBtn = document.getElementById('qr-button');
let tmpInput = "";

let DownloadBtn = document.getElementById('d-button');
let ShareBtn = document.getElementById('s-button');

generateQRBtn.addEventListener('click', () => {
    validURL = checkURL(input.value);

    if(validURL == true){
        generateQRCode();
        navbar.style.display = 'flex'
        qrform.style.display = 'none';
        qrScreen.style.display = 'flex';
        buttonContainer.style.display = 'block';
        tmpInput = input.value;
    }else{

    }
});

DownloadBtn.addEventListener('click', () => {
    downloadQRCode();
});

ShareBtn.addEventListener('click', () => {
    copyURL();
});


function generateQRCode() {


    new QRCode(qrContainer, input.value);
}

function downloadQRCode() {
    let QRCodeCanvas = document.getElementById('canvas-qrcode');
    urlImagen = QRCodeCanvas.toDataURL('image/png');
    downloadUrl = document.createElement('a')
    downloadUrl.href = urlImagen;
    downloadUrl.download = 'QRcode';
    downloadUrl.click();
}

function copyURL() {
    navigator.clipboard.writeText(tmpInput);
}

function checkURL(url) {
    const URLpattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return URLpattern.test(url);
}