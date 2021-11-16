const txtName = document.querySelector("#name");
const btnNotify = document.querySelector("#btn-notify");
const msgText = document.querySelector("#.text");
const msgTexttwo = document.querySelector("#.texttwo")
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


btnNotify.addEventListener('click', () => {
	if(txtName.value.match(mailFormat)  ) {
		msgText.classList.add('hide');
		msgTexttwo.classList.add('hide');
		txtName.removeAttribute('style')
	
	}else {
		msgText.classList.add('hide');
		msgTexttwo.classList.add('hide');
		txtName.setAttribute('style', 'border: 2px solid red;');
	}


});