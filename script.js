
let input = document.querySelector('.inputBox');
let btns = document.querySelectorAll('.button');
let mode = document.querySelector('#mode');
let calc = document.querySelector('.calculator');
let icons = document.querySelector('.icons');
let operators = document.querySelectorAll('.button.operator');

let result = '';

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.innerText)
        if (btn.innerText == "=") {
            if((input.value).search('%')) {
                input.value = (input.value).replace('%', '/100');
            }
            result = eval(input.value);
            input.value = result;
        }
        else if (btn.innerText == "AC") {
            result = '';
            input.value = result;
        }
        else if (btn.id == "CE") {
            result = input.value;
            result = result.slice(0, result.length-1);
            input.value = result;
        }
        else if (btn.id == "sign") {
            result = input.value;
            result = result.slice(0, result.length-1) + `(${-result.slice(-1)})`;
            input.value = result;
        }
        else {
            input.value += btn.innerText;
        }
    }
    )
}
)

document.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        if((input.value).search('%')) {
                input.value = (input.value).replace('%', '/100');
        }
        console.log(input.value);
        result = eval(input.value);
        console.log(result);
        input.value = result;
        console.log(input.value);
        e.preventDefault();
    }
})


mode.addEventListener("click", () => {
    calc.classList.toggle('light');
    icons.classList.toggle('light');
    input.classList.toggle('light');
    mode.classList.toggle('fa-moon');
    btns.forEach((btn) => {
        btn.classList.toggle('light-shadow');
    })
    operators.forEach((operator) => {
        operator.classList.toggle('light');
    })

})