const txtName = document.querySelector("#name");
const btnNotify = document.querySelector('#btn-notify');
const msgText = document.querySelector('.text-one');
const msgTexttwo = document.querySelector('.text-two')
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


btnNotify.addEventListener('click', () => {
    if(txtName.value.match(mailFormat)  ) {
        msgText.classList.add('hide');
        msgTexttwo.classList.add('hide');
        txtName.removeAttribute('style')
    
    }else {
        msgText.classList.remove('hide');
        msgTexttwo.classList.remove('hide');
        txtName.setAttribute('style', 'border: 2px solid red;');
    }


});

