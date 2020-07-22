const namearr = ['민철', '영수', '영희', '민수'];

//foreach
namearr.forEach (name => console.log(`내 이름은 ${name}이야`));
//map
const oddarr = [1, 3, 5, 7, 9];
const newarr = oddarr.map( num => num*2 );
console.log(newarr);