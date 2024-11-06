const sumAll = function(first_number, second_number) {
    if (first_number > 0 && second_number > 0 && Number.isInteger(first_number) && Number.isInteger(second_number)) {
        let final_number = 0;
        let first_number1 = 0;
        let second_number1 = 0;
        if(first_number > second_number) {
            first_number1 = second_number;
            second_number1 = first_number;
        }
        else {
            first_number1 = first_number;
            second_number1 = second_number;
        }
        for(i = first_number1; i <= second_number1; i++) {
            final_number += i;
        }
        return final_number;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
