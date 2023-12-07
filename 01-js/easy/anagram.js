/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // let comp=[] ;
// if(str1.length === str2.length){
//   for(let i=0; i<str1.length; i++){
//     for(let j=0; j<str2.length; j++){
//       if(str1[i]===str2[j]){ //apple pplea
//       comp.push(str1[i]);
//       break;
//       }
//     }
//   }
//  console.log(comp)
//   let count = 0;
//   comp.forEach((com,ind)=>{
//     console.log(ind)
//     if(com[ind]=== str1[ind]){
//       count = count+1;
      
// console.log("count", count)
//     }else return false
//   })

//   if(count === str1.length)return true
// }else return false;
console.log([...str1.toLowerCase()].sort())
if([...str1.toLowerCase()].sort().join("") === [...str2.toLowerCase()].sort().join("")){
  return true
}else return false
}
console.log(isAnagram("Debit Card","Bad Credit"));

module.exports = isAnagram;
