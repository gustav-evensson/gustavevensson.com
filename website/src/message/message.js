import emailjs from '@emailjs/browser';

const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

const SEERVICE_ID = 'service_av91kdf';
const PUBLIC_KEY = '_eD3yyrxRufBPIrqW';
const TEMPLATE_ID = 'template_oibq9m3';
const MY_EMAIL = 'evenssongustav@gmail.com';

async function sendMessage(email, name, msg) {
	if (!email.match(mailFormat)) return { status: 404, text: 'Invalid Email' };
	if (msg == '' || name == '') return { status: 404, text: 'Please fill in all sections' };
	const msgParams = {
		my_email: MY_EMAIL,
		sender_name: name,
		sender_email: email,
		message: msg,
	};

	const response = await new Promise((resolve) => {
		resolve(emailjs.send(SEERVICE_ID, TEMPLATE_ID, msgParams, PUBLIC_KEY));
	});

	return response;
}

export default sendMessage;
