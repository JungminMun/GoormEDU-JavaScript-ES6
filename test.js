const numarr = [1, 2, 3, 4];
/* // console.log(typeof numarr);

//배열의 길이 알아보기 : .length
// console.log(numarr.length);
const arr = [];
arr[2] = 3;
console.log(arr); */
// 원본 배열을 직접 건드리는 방식
numarr.push(5, 6);
// console.log(numarr); 

// 원본 내열을 직접 건드리지 않는 방식
/* const result = numarr.concat(7, 8);
console.log(result);
console.log(numarr);
 */

 numarr.pop();
 console.log(numarr);