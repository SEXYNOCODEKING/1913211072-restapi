/*const datefns = require('date-fns') //ดึง date-fns มาเก็บไว้
console.log(datefns.format(new Date(),"MM/dd/yyyy"))

console.log("Holle world");

let firstName = "Thanawat"
let age = 22

//console.log(firstName + age) // old style

let info = `
    My name is ${firstName}
    My age is ${age}
    `
    console.log(info)*/

    const user = {
        name:"Thanawat",
        salary:900000 ,
        address:{
            province: "Bangkok",
            PostalCode: 10200
        }
    }
    //console.log(user.address.PostalCode)
    const showData= () => `${user.name}`
    //console.log(showData())

    const showData2 = () => {
        let info = 'My name is '
        return `${info} ${user.name}`
    }
   // console.log(showData2())

    const sumNumber = (a,b) =>  a+b
    //console.log(sumNumber(9,1))

    const {name,salary,address:{PostalCode}} = user // แตก
    console.log(name)