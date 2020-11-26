
const input = document.querySelector('[type=text]')
const num = document.querySelectorAll('.no')
const equal = document.querySelector('.equal')


function showNumber() {
    if (input.placeholder == 0)
        input.placeholder = ''

    input.placeholder = input.placeholder + this.innerText

    console.log(eval(input.placeholder));

}

num.forEach(no => no.addEventListener('click', showNumber))



function showResult() {
    if (input.placeholder.includes('**') || input.placeholder.includes('//') || input.placeholder.includes('--') || input.placeholder.includes('++') ||
        input.placeholder.includes('+*') || input.placeholder.includes('+/') || input.placeholder.includes('-/') || input.placeholder.includes('-*') || input.placeholder.includes('*/') 
        || input.placeholder[0]==='*'|| input.placeholder[0]==='/')
        input.placeholder = "FUCK U BRUH"

    input.placeholder = eval(input.placeholder)

    console.log('exxxxxxxxxxxxxx');
}

equal.addEventListener('click', showResult)


function method() {


    location.reload();
}