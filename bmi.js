const checkBMI = function (berat, tinggi){
    let result
    const calculate = berat / (tinggi * tinggi)
    console.log(calculate);
    if (calculate < 17){
        result = "Kurus (kurang berat badan)"
    } else if (calculate >= 17 && calculate <= 18.4){
        result = "kurus"
    } else if (calculate >= 18.5 && calculate <= 25){
        result = "Normal"
    } else if (calculate >= 25.1 && calculate <= 27){
        result = "Gemuk"
    } else {
        result = "Butuh Olahraga"
    }
    return result
}

const BMI = checkBMI(73, 1.7)
console.log(BMI);