//  let sum = 0;
// for (let i = 1; 1 <= 10; i++){
//     sum = sum + i;
//     document.write(sum);
// };
// document.write("Program end");

let i = 1;
let sum = 0;

while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
         sum = sum + i;
    }
   
    i = i++;
}

document.write("Total sum is = ", + sum);
document.write("End");

for (let i = 1; i <= 100; i++){
    if (i == 10) {
        break;
    }
    document.write("" + i )
}