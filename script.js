
    let button = document.getElementById("krm-button")
    button.addEventListener("click", hitung)


function hitung() {
    
    let tinggi = document.getElementById("tinggi").value
    let berat = document.getElementById("berat").value
    let hasil = document.getElementById("hasil")
 

    if (tinggi === "") 
        hasil.innerHTML = "Masukkan tinggi badan yang benar"
    
    else if (berat === "") 
        hasil.innerHTML = "Masukkan berat badan yang benar"
    
    else {
        let bmi = (berat / (tinggi /100)**2).toFixed(1)
 
        if (bmi < 18.5){
            hasil.innerHTML = `Hasil BMI anda <span>${bmi}</span>, Anda Kekuarangan berat badan.`
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            hasil.innerHTML = `Hasil BMI anda <span>${bmi}</span>, Berat badan anda ideal.`
        }
        else hasil.innerHTML = `Hasil BMI anda <span>${bmi}</span>, Anda kelebihan berat badan.`
    }
}
























// let tinggi = parseInt(document.querySelector("#tinggi").value)
// let berat = parseInt(document.querySelector("#berat").value)
// let hasil = document.getElementById("hasil")
// let hasilHitung

// function hitung(){

    
//     if(tinggi == null || berat == null){
//         hasil.innerHTML = "<p>Silahkan masukan berat dan tinggi</p>"
//     }

//     hasilHitung = berat / (tinggi / 100 * tinggi)

//     if(hasilHitung > 10){
//         hasil.innerHTML = "<p>berat normal</p>"
//     }
//     console.log(hasilHitung)
//     console.log(tinggi)
// }

// document.getElementById("krm-button").addEventListener("click",hitung)
// console.log(tinggi)