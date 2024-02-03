function dorjaKhulo(){
    console.log('Hello world')
}
// dorjaKhulo();

function square(number){
    const borgo = number*number;
    console.log('Square of the number is : ', borgo);
}
function add(number){
    const jog = number+number;
    console.log('Addition of the number is : ', jog);
}

function tenTimes(number){
    const result = number*10;
    return result;
}

const bigNumber = tenTimes(99);
// console.log(bigNumber);

// square(6);
// add(10);

function sumOfNumbers(numbers){
    let sum = 0;

    for(const number of numbers){
        sum = sum + number;
    } return sum;
}
const numbs = [1,2,3,4,5,6];

const sum = sumOfNumbers(numbs);

console.log('Sum of numbers is  ', sum);
