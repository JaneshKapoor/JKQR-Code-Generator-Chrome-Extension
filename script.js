const container = document.querySelector('.container');
const qrinput = document.querySelector('.container input');
const genbtn = document.querySelector('.container button');
const qrImg = document.querySelector('.qrsection img');

genbtn.addEventListener("click", () => {
    let qrValue = qrinput.value;
    if(!qrValue) return;
    genbtn.innerText = "Generating QR code..."
    console.log(qrValue);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    // Once Image is loaded then add 
    qrImg.addEventListener("load" , () => {
        container.classList.add('active');
        genbtn.classList.add('active');
        genbtn.innerText = "Generate QR code";
    });
})

qrinput.addEventListener("keyup",() => {
    if(!qrInput.value){
        container.classList.remove("active");
    }
})