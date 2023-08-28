let myArray = [0, 1, 2, 3];

const left = document.getElementById('left');
const right = document.getElementById('right');

left.addEventListener('click', (e)=>{
    let lastElement = myArray[myArray.length - 1];
    console.log('lastElement: ' + lastElement);
    myArray.pop(lastElement);
    myArray.unshift(lastElement);
    console.log(myArray);
});
right.addEventListener('click', (e)=>{
    let firstElement = myArray[0];
    myArray.shift();
    myArray.push(firstElement);
    console.log(myArray);
    console.log('firstElement: ' + firstElement);
});