
//  function 1
function multby5(num1,num2) {
    let result1 = (num1 + num2) *5;
    return result1;
}

console.log(multby5(5,2));
console.log(multby5(24,85));
console.log(multby5(31278,77458));

// Function 2

function length(string){
    let result2 = (string.length) >10;
    return result2; 
}
console.log(length(`Jacksonville`));
console.log(length(`Edmonton`));
console.log(length(`Saskatchewan`));

function PHString([text]) {
        let result3 = ([text.startswith(`ph`)]);
        return result3;
}

console.log(PHString([`John`, `Jack`, `Phil`, `Bobby`]));

