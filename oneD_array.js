// One Dimentional Array
// Create a function called higestSCORE THAT
// Receive a 1d arrray called score
// Return the higest score

console.clear();
function higestScore(scores) {
    let max = scores[0];
    for(let x = 1; x < scores.length; x++){
        if(max < scores[x]) {
            max = scores[x];
        }
    }
    return max;
}

let Value = [20, 50, 47, 36, 80, 70,100];
let maxScore = higestScore(Value);
console.log(maxScore);