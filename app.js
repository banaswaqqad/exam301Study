'use strict'
let form = document.getElementById('myForm');
let table = document.getElementById('marksTable');



let userMarks = [];


function marks(name, markss, course) {
    this.name = name;
    this.markss = markss;
    this.course = course;
    userMarks.push(this);
    localStorage.setItem('userMarks', JSON.stringify(userMarks));


}







form.addEventListener('submit', clickHandler);
function clickHandler(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let course = event.target.course.value;
    let markss = randomNumbers();
    let submits = new marks(name, parseInt(markss), course);
    render();

}


function render() {
    table.innerHTML = '';
    for (let i = 0; i < userMarks.length; i++) 
    {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        let td_name = document.createElement('td')
        td_name.innerHTML = userMarks[i].name;
        tr.appendChild(td_name);

        let td_marks = document.createElement('td');
        td_marks.innerHTML = userMarks[i].markss;
        tr.appendChild(td_marks);

        let td_course = document.createElement('td');
        td_course.innerHTML = userMarks[i].course;
        tr.appendChild(td_course);



    }
}











function randomNumbers() {
    return Math.floor(Math.random() * (100));

}



let numbers = [5, 7, 8, 13, 9, 10]
let num = 5;
function comparing(numbers, num) {
    let counter = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > num) {
            counter++;
        }

    }
    console.log(counter);


}

comparing(numbers, num);




// *
// **
// ***
// ****
// *****
// ******
// *******
function stars() {

    for (let i = 0; i <= 7; i++) {
        let x = '';
        for (let j = 0; j < i; j++) {
            x = x + '*'

        }
        console.log(x);


    }
}
stars();






// *****
// ****
// ***
// **
// *

function startwo() {

    for (let i = 5; i >= 0; i--) {
        let x = '';
        for (let j = i; j >= 0; j--) {
            x = x + '*';
        }
        console.log(x);

    }

}
startwo();