const myInfo = {
    name : 'dimas',
    born : 1995,
    addres : 'madiun',
    hobies : ['game', 'soccer'],
    sister:{
    name : 'rina',
    born : 2000,
    addres : 'madiun',
    hobies : ['game', 'soccer']
    },

    checkAge: function(){
        return 2022 - this.born
    },
    summary : function(){
        return `usia dia adalah ${this.checkAge()}`
    },
}

const info = myInfo.hobies
console.log(info);

const info2 = myInfo.sister.name
console.log(info2);

const age = myInfo.checkAge()
console.log(age);

const usia = myInfo.summary();
console.log(usia);