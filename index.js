const myCar = ["ayla",1,"brio",2,"avanza",3,"sigra"];
const types = []
for (let i = 0; i < myCar.length; i++){
    types.push(typeof myCar[i])
}

console.log(types);

for (let i = 1; i <= 5; i++){
    console.log(`---keliling ke ${i}`);
    for (let a = 1; a <= 5; a++){
        console.log(`---push up ${a} kali`);
    }
}