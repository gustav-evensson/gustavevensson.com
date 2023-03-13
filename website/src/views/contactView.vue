<script setup>
import { ref, reactive } from 'vue';
import anime from 'animejs/lib/anime.es';
import sendMessage from '../message/message.js';

const submitBtn = ref(null);
const data = reactive({
	email: '',
	name: '',
	message: '',
	notificationMsg: '',
	error: false,
	showNotification: false,
});

async function send() {
    data.error = false
	const messageStatus = await new Promise((resolve) => {
		resolve(sendMessage(data.email, data.name, data.message));
	});
	console.log(messageStatus);
    if(messageStatus.status != 200) data.error = true
	data.notificationMsg = messageStatus.text;
	if (messageStatus.status == 200) {
        data.notificationMsg = "Thanks! I'll be in touch.";
		let tl = anime.timeline();
		tl.add({
			targets: submitBtn.value,
			translateX: [0, -100],
			duration: 300,
			easing: 'easeOutSine',
		})
			.add({
				targets: submitBtn.value,
				translateX: [-100, 1000],
				scale: [1, 0],
				skew: {
					duration: 50,
					value: 50,
				},
				opacity: [1, 0],
				duration: 500,
				easing: 'easeOutSine',
			})
			.add({
				targets: submitBtn.value,
				translateX: [0, 0],
				scale: [1, 1],
				skew: [0, 0],
				opacity: [0, 1],
				duration: 1500,
				delay: 2000,
			});
		data.message = '';
		data.email = '';
		data.name = '';
	}
    data.showNotification = true
    setTimeout(() => {
        data.showNotification = false
    }, 3000);
}
</script>

<template>
	<section id="contact">
		<div data-aos="fade-up" class="sectionTitle">
			<span class="sectionNumber">03</span>
			<h3>contact</h3>
			<p>Dont be a stranger, reach out!</p>
		</div>
		<form @submit.prevent="send()">
			<div class="smallFields">
				<div data-aos="fade-up" data-aos-delay="100" class="standardField">
					<input v-model="data.name" type="text" placeholder="Your name" />
				</div>
				<div data-aos="fade-up" data-aos-delay="200" class="standardField">
					<input v-model="data.email" type="email" placeholder="Your email" />
				</div>
			</div>
			<div data-aos="fade-up" data-aos-delay="300" class="standardField textAreaField">
				<textarea v-model="data.message" placeholder="Your message"></textarea>
			</div>
			<div class="aosDiv" data-aos="fade-up" data-aos-anchor=".textAreaField" data-aos-delay="400">
				<button ref="submitBtn">Send Message</button>
			</div>
		</form>
		<div class="notificationContainer" :class="{ showNotification: data.showNotification }">
			<div v-if="!data.error" class="successIcon">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9934 12.5542 27.6216 9.25145 25.1851 6.81491C22.7486 4.37837 19.4458 3.00661 16 3ZM22.1875 13.725L14.8625 20.725C14.6731 20.9031 14.4225 21.0016 14.1625 21C14.0354 21.0018 13.9093 20.9785 13.7913 20.9313C13.6733 20.8841 13.5658 20.814 13.475 20.725L9.81251 17.225C9.71092 17.1364 9.62831 17.0281 9.56963 16.9067C9.51095 16.7854 9.47741 16.6534 9.47104 16.5187C9.46467 16.3841 9.48559 16.2495 9.53255 16.1231C9.57951 15.9968 9.65154 15.8812 9.7443 15.7834C9.83706 15.6856 9.94865 15.6075 10.0723 15.5539C10.196 15.5003 10.3293 15.4723 10.4641 15.4715C10.5989 15.4707 10.7325 15.4972 10.8568 15.5493C10.9811 15.6015 11.0936 15.6783 11.1875 15.775L14.1625 18.6125L20.8125 12.275C21.0069 12.1054 21.2594 12.0174 21.5172 12.0296C21.7749 12.0418 22.018 12.1532 22.1955 12.3404C22.3731 12.5277 22.4714 12.7763 22.4699 13.0343C22.4684 13.2924 22.3672 13.5398 22.1875 13.725Z"
						fill="#5FD95D"
					/>
				</svg>
			</div>
			<div v-else class="errorIcon">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M28.4125 10.025L21.975 3.5875C21.5999 3.21337 21.0923 3.00227 20.5625 3H11.4375C10.9077 3.00227 10.4001 3.21337 10.025 3.5875L3.5875 10.025C3.21337 10.4001 3.00227 10.9077 3 11.4375V20.5625C3.00227 21.0923 3.21337 21.5999 3.5875 21.975L10.025 28.4125C10.4001 28.7866 10.9077 28.9977 11.4375 29H20.5625C21.0923 28.9977 21.5999 28.7866 21.975 28.4125L28.4125 21.975C28.7866 21.5999 28.9977 21.0923 29 20.5625V11.4375C28.9977 10.9077 28.7866 10.4001 28.4125 10.025ZM15 10C15 9.73478 15.1054 9.48043 15.2929 9.29289C15.4804 9.10536 15.7348 9 16 9C16.2652 9 16.5196 9.10536 16.7071 9.29289C16.8946 9.48043 17 9.73478 17 10V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18C15.7348 18 15.4804 17.8946 15.2929 17.7071C15.1054 17.5196 15 17.2652 15 17V10ZM16 23C15.7033 23 15.4133 22.912 15.1666 22.7472C14.92 22.5824 14.7277 22.3481 14.6142 22.074C14.5006 21.7999 14.4709 21.4983 14.5288 21.2074C14.5867 20.9164 14.7296 20.6491 14.9393 20.4393C15.1491 20.2296 15.4164 20.0867 15.7074 20.0288C15.9983 19.9709 16.2999 20.0007 16.574 20.1142C16.8481 20.2277 17.0824 20.42 17.2472 20.6666C17.412 20.9133 17.5 21.2033 17.5 21.5C17.5 21.8978 17.342 22.2794 17.0607 22.5607C16.7794 22.842 16.3978 23 16 23Z"
						fill="#E65858"
					/>
				</svg>
			</div>
			<p>{{ data.notificationMsg }}</p>
		</div>
	</section>
</template>
