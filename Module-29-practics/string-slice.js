const anthem = "Amar sonar Bangla Ami Tomai Valobashi ";
const words = anthem.split(" ");
const withoutA = anthem.split("a");
//console.log(withoutA);

//slice 

const smallSlice = anthem.slice(5, 13);
//console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11, 6);

//console.log(anotherPart);



//substring
const anotherAnotherPart = anthem.substring(11, 17);
//console.log(anotherAnotherPart);


//concat
const frist = "Amader ";
const second = "City ";
//const fullString = frist + second;
const fullString = frist.concat(second).concat("rj kibria ");
//console.log(fullString);



//join
const words2 = ['alim', 'balim','casim','david',];
//const allJoined = words2.join( "" );
//const allJoined = words2.join( " " );
// const allJoined = words2.join( "," );
const allJoined = words2.join( ", " );
console.log(allJoined);