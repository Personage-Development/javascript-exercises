const removeFromArray = function() {
    let numbers = arguments[0];
    for(i = 1; i < arguments.length; i++) {
        console.log(i);
        let numbers1 = [];
        for (let j = 0; j < numbers.length; j++) {
            console.log(j);  
            if (numbers[j] !== arguments[i]) {
                numbers1.push(numbers[j]);
            }
        }
        numbers = numbers1;
    }
    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
