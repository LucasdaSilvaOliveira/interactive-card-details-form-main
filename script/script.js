const nameCard = document.getElementById('name-card');
const numberCard = document.getElementById('number-card');
const textMM = document.getElementById('MM');
const textYY = document.getElementById('YY');
const codeCard = document.getElementById('code-card');

const setNameCard = document.getElementById('set-name-card');
const setNumberCard = document.getElementById('set-number-card');
const setMM = document.getElementById('set-MM');
const setYY = document.getElementById('set-YY');
const setCodeCard = document.getElementById('set-code-card');

const alertSetNameCard = document.getElementById('alert-set-name-card');
const alertSetNumberCard = document.getElementById('alert-set-number-card');

const divInputNumber = document.getElementById('div-input-number-card');

setNumberCard.addEventListener('input', (e) => {
    numberCard.innerHTML = ''
    if (e.target.value.length > 0) {
        numberCard.innerHTML += e.target.value.match(/.{1,4}/g).join(' ');
    }

    if (e.target.value.length == 0 || e.target.value.length == null) {
        numberCard.innerHTML = '0000 0000 0000 0000';
    }

    setNumberCard.style.borderColor = '#6662628f';

});

setNameCard.addEventListener('input', (e) => {
    nameCard.innerHTML = ''

    if (e.target.value.length == 0) {
        nameCard.innerHTML = 'Jane Appleseed';
    }

    if (e.target.value.length > 0) {
        nameCard.innerHTML = e.target.value
    }

    setNameCard.style.borderColor = '#6662628f';
});

setMM.addEventListener('input', (e) => {
    textMM.innerHTML = ''

    if (e.target.value.length == 0) {
        textMM.innerHTML = "00"
    }

    if (e.target.value.length > 0) {
        textMM.innerHTML = e.target.value
    }

    setMM.style.borderColor = '#6662628f';
});

setYY.addEventListener('input', (e) => {
    textYY.innerHTML = ''

    if (e.target.value.length == 0) {
        textYY.innerHTML = '00'
    }

    if (e.target.value.length > 0) {
        textYY.innerHTML = e.target.value
    }

    setYY.style.borderColor = '#6662628f';
});
setCodeCard.addEventListener('input', (e) => {
    codeCard.innerHTML = ''

    if (e.target.value.length == 0) {
        codeCard.innerHTML = '000'
    }

    if (e.target.value.length > 0) {
        codeCard.innerHTML = e.target.value
    }
    setCodeCard.style.borderColor = '#6662628f';
});

function Confirm() {

    validatingName();

    validatingNumberCard();

    validatingExpData();

    validatingCVC();

}

function validatingName() {

    const splitName = setNameCard.value.split('');

    if (splitName.length == 0) {
        setNameCard.style.borderColor = '#df3333';
        alertSetNameCard.innerHTML = 'Enter the name'
        setTimeout(() => {
            setNameCard.style.borderColor = '#6662628f';
            alertSetNameCard.innerHTML = ''
        }, 2000)
        return
    }

    for (let c = 0; c < 10; c++) {
        if (splitName.includes(c.toString()) == true) {
            setNameCard.style.borderColor = '#df3333';
            alertSetNameCard.innerHTML = 'Invalid name'
            console.log(c)
            setTimeout(() => {
                setNameCard.style.borderColor = '#6662628f';
                alertSetNameCard.innerHTML = ''
            }, 2000)
            return
        }
    }

    setNameCard.style.borderColor = '#3a3ad8';
}

function validatingNumberCard() {
    const splitNumberCard = setNumberCard.value.split('');

    if (splitNumberCard.length == 0) {
        setNumberCard.style.borderColor = '#df3333';
        alertSetNumberCard.innerHTML = 'Enter the card number'
        setTimeout(() => {
            setNumberCard.style.borderColor = '#6662628f';
            alertSetNumberCard.innerHTML = ''
        }, 2000)
        return
    }

    if(splitNumberCard.length < 16) {
        setNumberCard.style.borderColor = '#df3333';
        alertSetNumberCard.innerHTML = 'Wrong digits'
        setTimeout(() => {
            setNumberCard.style.borderColor = '#6662628f';
            alertSetNumberCard.innerHTML = ''
        }, 2000)
        return
    }
    setNumberCard.style.borderColor = '#3a3ad8';
}

function validatingExpData() {
    if(setMM.value.length == 0 || setMM.value.length == 1 || setMM.value > 12 || setMM.value == 00) {
        setMM.style.borderColor = '#df3333';
        setTimeout(() => {
            setMM.style.borderColor = '#6662628f';
        }, 2000)
        return
    }

    if(setYY.value.length == 0 || setYY.value.length == 1 || setYY.value < 23) {
        setYY.style.borderColor = '#df3333';
        setTimeout(() => {
            setYY.style.borderColor = '#6662628f';
        }, 2000)
        return
    }

    setYY.style.borderColor = '#3a3ad8';
    setMM.style.borderColor = '#3a3ad8';
}

function validatingCVC() {
    if(setCodeCard.value.length < 3) {
        setCodeCard.style.borderColor = '#df3333';
        setTimeout(() => {
            setCodeCard.style.borderColor = '#6662628f';
        }, 2000)
        return
    }

    setCodeCard.style.borderColor = '#3a3ad8';
}