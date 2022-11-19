const User ={
    name : "Thanawat",
    nickname : "SEXYNOCODEKING",
    hobby : "NOCODE",
    address : "NOCOWHERE",
    provincee : {
        province:"Thai",
        Postalcode:10200
    }
}

const {name,nickname,hobby,address,provincee:{Postalcode},provincee:{province}} = User 
const Show = () => {
   
    return `My name is ${name} My hobby is ${hobby} 
    and my postal code is ${User.provincee.Postalcode}`
}
console.log(Show())
