console.log('Pregorori');
//boolean
//string
//number
//undefined
//null
//object

//JSON: Javascript Object Notation


console.log(typeof([]));

console.log([].length);


const people =[
{
    name: 'Boban Sugareski',
    club: 'Arsenal'
},
{
    name: 'Zoki.Z',
    club: 'Bregalnica'
},
{
    name: 'Zlatko',
    club: null
}
]

people.forEach(person =>{
   if (person.club){
       console.log(person.name);
       console.log(person.club);
   }else{
       console.log(person.name);
       console.log('Nema omilen klub!');
   }
});