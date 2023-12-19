function Generate_otp(){
    let number = '1234567890';
    let length = 4;
    for(let i=0;i<length;i++){
    let otp = Math.floor(Math.random()*10);
    document.getElementById('OTP').innerHTML = otp+=;
    }
}