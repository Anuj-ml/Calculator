
let input = document.getElementById('inputBox');
let btns = document.querySelectorAll('.button');


let result = '';

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.innerText)
        if (btn.innerText == "=") {
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

