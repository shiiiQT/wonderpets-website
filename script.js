function validateEmail() {
    const email = document.getElementById('email').value;
    const domain = email.split('@')[1];
    if (domain !== 'goodsam.edu.ph') {
        alert('Please use your @goodsam.edu.ph email address.');
        return false;
    }
    return true;
}
