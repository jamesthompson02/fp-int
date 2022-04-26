// The next (approximately) 25 lines of code relate to the 'See More' and 'See Less' buttons
// which expand and contract the size of the profile card depending on whether or not the 
// user decides to click them.

let additional_info = document.getElementById('additional-info');
let card = document.getElementById('card');
let see_more = document.getElementById('see-more');
let see_less = document.getElementById('see-less');

function expandProfile() {
    see_more.style.display = 'none';
    card.setAttribute('style', 'height: 1073px')
    additional_info.style.display = 'flex';
    see_less.style.display = 'block';
}

function contractProfile() {
    see_less.style.display = 'none';
    additional_info.style.display = 'none';
    see_more.style.display = 'block';
    card.setAttribute('style', 'height: 610px');
}

see_more.addEventListener('click', () => {
    expandProfile();
})

see_less.addEventListener('click', () => {
    contractProfile();
})

// document.getElementById('container').classList.toggle('dark1');

// The next block of code relates to submitting answers to the 'True or False' quiz.

const form = document.getElementById('form');
const true1 = document.getElementById('true1');
const true2 = document.getElementById('true2');
const true3 = document.getElementById('true3');
const false1 = document.getElementById('false1');
const false2 = document.getElementById('false2');
const false3 = document.getElementById('false3');
let submit_btn = document.getElementById('quiz-submit');
let quiz = document.getElementById('quiz1');
let quiz_results = document.getElementById('quiz-results');
let correct_answers = document.getElementById('correct-answers');
let incorrect_answers = document.getElementById('wrong-answers');
let clarify_answers = document.getElementById('clarify-answers');

// if (true1.checked == true || false1.checked == true && true2.checked == true || false2.checked == true && true3.checked == true || false3.checked == true) {
//     answer_counter = 3;
// }

function submitQuiz() {
    let answer_counter = 0;
    let correct_counter = 0;
    let incorrect_counter = 0;
    if (true1.checked == true || false1.checked == true) {
        answer_counter += 1;
    }
    if (true2.checked == true || false2.checked == true) {
        answer_counter += 1;
    }
    if (true3.checked == true || false3.checked == true) {
        answer_counter += 1;
    }
    if (answer_counter < 3) {
        alert('Please answer all questions');
    } else {
        let para3 = undefined;
        let para4 = undefined;
        let para5 = undefined;
        if (false1.checked == true) {
            correct_counter += 1;
        } else {
            incorrect_counter += 1;
            para3 = document.createElement('p');
            para3.innerText = 'I actually support Arsenal F.C';
        }
        if (true2.checked == true) {
            correct_counter += 1;
        } else {
            incorrect_counter += 1;
            para4 = document.createElement('p');
            para4.innerText = "I actually did adopt my neighbour's cat. He rejected my neighbour!"
        }
        if (false3.checked == true) {
            correct_counter += 1;
        } else {
            incorrect_counter += 1;
            para5 = document.createElement('p');
            para5.innerText = "I've never been skydiving";
        }
        if (incorrect_counter == 0) {
            let para1 = document.createElement('p');
            para1.innerText = 'You got all ' + correct_counter + ' questions correct. Well done!';
            correct_answers.appendChild(para1);
            quiz.style.display = 'none';
            quiz_results.style.display = 'flex';
        } else if (incorrect_counter == 1) {
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            para1.innerText = 'You got ' + correct_counter + ' questions correct';
            correct_answers.appendChild(para1);
            para2.innerText = 'You got ' + incorrect_counter + ' question wrong';
            incorrect_answers.appendChild(para2);
            if (para3 != undefined) {
                clarify_answers.appendChild(para3);
            }
            if (para4 != undefined) {
                clarify_answers.appendChild(para4);
            }
            if (para5 != undefined) {
                clarify_answers.appendChild(para5);
            }
            quiz.style.display = 'none';
            quiz_results.style.display = 'flex';
      
        } else if (incorrect_counter == 2) {
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            para1.innerText = 'You got ' + correct_counter + ' question correct';
            correct_answers.appendChild(para1);
            para2.innerText = 'You got ' + incorrect_counter + ' questions wrong';
            incorrect_answers.appendChild(para2);
            if (para3 != undefined) {
                clarify_answers.appendChild(para3);
            }
            if (para4 != undefined) {
                clarify_answers.appendChild(para4);
            }
            if (para5 != undefined) {
                clarify_answers.appendChild(para5);
            }
            quiz.style.display = 'none';
            quiz_results.style.display = 'flex'; 
        } else {
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            para1.innerText = 'You got ' + correct_counter + ' questions correct';
            correct_answers.appendChild(para1);
            para2.innerText = 'You got ' + incorrect_counter + ' questions wrong';
            incorrect_answers.appendChild(para2);
            if (para3 != undefined) {
                clarify_answers.appendChild(para3);
            }
            if (para4 != undefined) {
                clarify_answers.appendChild(para4);
            }
            if (para5 != undefined) {
                clarify_answers.appendChild(para5);
            }
            quiz.style.display = 'none';
            quiz_results.style.display = 'flex';
        }
    }


}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitQuiz();
    
})

// The following block of code relates to the toggle switch at the top right-hand corner of the page.
// The idea is that the user can click the toggle switch to alternate between dark and light mode.


let toggle_switch = document.getElementById('switch-label');
let container = document.getElementById('container');
let all_elements = [...document.querySelectorAll('*')];
let toggle_counter = 0;
console.log(all_elements);

function darkMode1(element1) {
    if (element1.classList.contains('background-cyan')) {
        element1.classList.toggle('dark-background-1');
    }
    if (element1.classList.contains('background-banner-blue')) {
        element1.classList.toggle('dark-background-2');
    }
    if (element1.classList.contains('background-white')) {
        element1.classList.toggle('dark-background-3');
    }
    
    if (element1.classList.contains('font-white')) {
        element1.classList.toggle('font-grey1');
    }
    if (element1.classList.contains('font-grey')) {
        element1.classList.toggle('font-dark-blue');
    }
    if (element1.classList.contains('font-banner-blue')) {
        element1.classList.toggle('font-dark-blue');
    }
    
}

toggle_switch.addEventListener('click', () => {
    toggle_counter += 1;
    all_elements.forEach(darkMode1);
    if (toggle_counter % 2 != 0) {
        toggle_switch.innerText = 'Dark Mode'
        toggle_switch.setAttribute('style', 'color: grey');
    } else {
        toggle_switch.innerText = 'Light Mode'
        toggle_switch.setAttribute('style', 'color: black');
    }
})

// This last bit of code is to ensure that the media queries do not interfere with the previous
//blocks of code.


let screen_detector = window.matchMedia('(min-width: 992px)');


screen_detector.onchange = (e) => {
    if (e.matches) {
        see_more.style.display = 'none';
        see_less.style.display = 'none';
        additional_info.style.display = 'flex';
        card.style.height = '610px'
    } else {
        see_more.style.display = 'block';
        additional_info.style.display = 'none';
    }
}

