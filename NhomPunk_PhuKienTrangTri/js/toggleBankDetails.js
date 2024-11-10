function showAlert(message){
    const alertBox = document.querySelector('.alertBox');
    const msg = document.querySelector('.alertBox .msg');

    msg.innerText = message;
    alertBox.classList.remove('hide');
    alertBox.classList.add('show');
    //hide after 4 sec
    setTimeout(() => {
        alertBox.classList.remove('show');
        alertBox.classList.add('hide');
    }, 4000);
}
//close-btn
document.querySelector('.alertBox .close-btn').addEventListener('click', () => {
 const alertBox = document.querySelector('.alertBox');
 alertBox.classList.remove('show');
 alertBox.classList.add('hide');
});
//check price
document.getElementById('payment-Form').addEventListener('submit', function(event){
    event.preventDefault();
    const paymentPrice = document.getElementById('moneyNumber').value;
    let isValid = true;
    if(paymentPrice < 10000000){
        showAlert('Số tiền thanh toán còn thiếu');
        isValid = false;
    }
    if(isValid){
        alert('Thanh Toán Thành Công');
        this.submit();
    }
})
function toggleBankDetails() {
    var paymentMethod = document.getElementById("payment-method").value;
    var bankDetails = document.getElementById("bank-details");
    var onlineBankingDetails = document.getElementById("online-details");

     bankDetails.style.display = 'none';
     onlineBankingDetails.style.display = 'none';

    if (paymentMethod === "bank") {
        bankDetails.style.display = "block";
    } else if (paymentMethod == "onlineBanking") {
        onlineBankingDetails.style.display = "block";
    }
}
function showQRCode(walletType) {
    var qrCodeSection = document.getElementById("qr-code-section");
    var qrCodeImg = document.getElementById("qr-code-img");

    if (walletType === 'momo') {
        qrCodeImg.src = 'image/qrMoMo.jpg';
    } else if (walletType === 'zalo') {
        qrCodeImg.src = '/image/abstract-uv-ultraviolet-light-composition.jpg';
    }

    qrCodeSection.style.display = 'block';
}
