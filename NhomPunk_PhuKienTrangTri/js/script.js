function showAlert(message){
    const alertBox = document.querySelector('.alertBox');
    const msg = document.querySelector('.alertBox .msg');

    msg.innerText = message;
    alertBox.classList.remove('hide');
    alertBox.classList.add('show');
    // Auto hide after 3 sec
    setTimeout(() => {
        alertBox.classList.remove('show');
        alertBox.classList.add('hide');
    }, 3000);
}
//close-btn
document.querySelector('.alertBox .close-btn').addEventListener('click', () => {
 const alertBox = document.querySelector('.alertBox');
 alertBox.classList.remove('show');
 alertBox.classList.add('hide');
});
//check Validation xem có lỗi không
document.getElementById('signupForm').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;

    let isValid = true;
    if (username.length < 5){
        showAlert('Tên đăng nhập dưới 5 ký tự');
        isValid = false;
    } else if (password !== confirmPassword){
        showAlert('Mật khẩu không khớp');
        isValid = false;
    } else if (!/^\d{10,11}$/.test(phone)){
        showAlert('Số điện thoại không hợp lệ');
        isValid = false;
    }
    if(isValid){
        alert('Đăng ký Thành Công');
        this.submit();
    }
})
const toggleMenu = document.querySelector('.toggle_btn');
const toggleMenuIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
toggleMenu.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleMenuIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'

}