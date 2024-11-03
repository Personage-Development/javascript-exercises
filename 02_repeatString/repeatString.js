const repeatString = function(word, number) {
    let final_string = "";

    if(number >= 0) {

        for(let i = 0; i < number; i++) {
            final_string += word;
        }
        return final_string;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
