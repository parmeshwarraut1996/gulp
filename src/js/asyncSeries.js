let async = require('async'); 

let array = [9, 20, 1, 45, 8, 5],a=10,b=20;
async.series([
    function (callback) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = 0;
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        console.log("Sorted element are ==>"+array);
        
        callback(null, 1);
    },
    function (callback) {
        let area_of_rectangle = a * b;
        console.log("Area of rectangle ==>  " + area_of_rectangle);
        callback(null, 2);
    },
    function (callback) {
        let area_of_square = a * a;
        console.log("Area of square ==>  " + area_of_square);
        callback(null, 3);
    }
], function (error, results) {
    if (error) {
        //if error is accure then return error
        console.log(error);
    }
    else {
        // if resolve result then return result 
        console.log(results);
    }
});