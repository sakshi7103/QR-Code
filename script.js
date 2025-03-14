let imgBox= document.getElementById('imgBox');
let qrImage=document.getElementById('qrImage');
let text=document.getElementById('text');
let errorMsg = document.getElementById('errorMsg');

//generate qrcode
function generateQR(){
    if (text.value.trim() === '') {    
        errorMsg.style.display = 'block';
        qrImage.src = '';  
    } 
    else 
    {       
    errorMsg.style.display = 'none';
    qrImage.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + text.value;
}
}

//check input show/hide error
function checkInput() {
    if (text.value.trim() !== '') {
        errorMsg.style.display = 'none'; 
    } else {
        errorMsg.style.display = 'block';  
    }
}

//reset qr
function resetQRCode() {
   text.value='';
   qrImage.src='';
   errorMsg.style.display = 'none';
}