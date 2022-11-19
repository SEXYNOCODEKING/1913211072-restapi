const Users =[{name:"SEXYNOCODEKING",
nickname : "NOCODE",
hobby : "NOCODEing",
address : "NOCOWHERE",
provincee : {
    province:"Thai",
    Postalcode:10200
}},
{name:"TPA",
nickname : "nova",
hobby : "protect world",
address : "nova world",
provincee : {
    province:"novaa",
    Postalcode:200
}},
{name:"Albert",
nickname : "bxbx",
hobby : "lol",
address : "meca",
provincee : {
    province:"sokovia",
    Postalcode:9999
}}]

for (const eiei of Users){
    console.log(`My name is ${eiei.name}, My hobby is ${eiei.hobby}
    and my postal code is ${eiei.provincee.Postalcode}`)
}