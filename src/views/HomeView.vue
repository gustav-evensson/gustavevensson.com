<template>
	<div :class="{ main: true, switchPage: data.switchPage }">
		<section id="home">
			<nav>
				<svg class="geLogo" width="128" height="66" viewBox="0 0 128 66" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M128 38H68V52C68 56 70 58 74 58H128V66H0V58H54C58 58 60 56 60 52V38H0V14C0 6 6 0 14 1.57561e-10L54 0C62 0 64 5 64 5C64 5 66 0 74 0H114C122 0 128 6 128 14V38ZM8 30H60V14C60 10 58 8 54 8H14C10 8 8 10 8 14V30ZM120 30H68V14C68 10 70 8 74 8H114C118 8 120 10 120 14V30Z"
					/>
				</svg>
				<div class="navItems">
					<a href="#about"><button>ABOUT</button></a>
					<a href="#work"><button>WORK</button></a>
					<a href="#contact" class="CTA">
						<div class="border"></div>
						<button>CONTACT</button>
					</a>
					<button class="switchTheme" @click="switchTheme">
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none" :class="{ isDarkMode: data.isDarkMode }" xmlns="http://www.w3.org/2000/svg">
							<circle cx="14" cy="14" r="14" fill="white" :class="{ isDarkModeSub: !data.isDarkMode }" />
							<path
								d="M14.0001 1.4001C15.6548 1.4001 17.2932 1.72601 18.8219 2.35921C20.3506 2.99242 21.7396 3.92053 22.9096 5.09055C24.0797 6.26057 25.0078 7.64958 25.641 9.17829C26.2742 10.707 26.6001 12.3454 26.6001 14.0001C26.6001 15.6548 26.2742 17.2932 25.641 18.8219C25.0078 20.3506 24.0797 21.7396 22.9096 22.9096C21.7396 24.0797 20.3506 25.0078 18.8219 25.641C17.2932 26.2742 15.6548 26.6001 14.0001 26.6001L14.0001 14.0001L14.0001 1.4001Z"
								fill="white"
								:class="{ isDarkModeSub: data.isDarkMode }"
							/>
							<path
								d="M13.9999 7.55994C13.1542 7.55994 12.3168 7.72652 11.5355 8.05016C10.7541 8.3738 10.0442 8.84816 9.44617 9.44617C8.84816 10.0442 8.37379 10.7541 8.05015 11.5355C7.72651 12.3168 7.55994 13.1542 7.55994 13.9999C7.55994 14.8457 7.72651 15.6831 8.05015 16.4644C8.37379 17.2458 8.84816 17.9557 9.44617 18.5537C10.0442 19.1517 10.7541 19.6261 11.5355 19.9497C12.3168 20.2734 13.1542 20.4399 13.9999 20.4399L13.9999 13.9999L13.9999 7.55994Z"
								fill="white"
								:class="{ isDarkModeSub: data.isDarkMode }"
							/>
							<path
								d="M14.0001 7.55994C14.8458 7.55994 15.6832 7.72652 16.4645 8.05016C17.2459 8.3738 17.9558 8.84816 18.5538 9.44617C19.1518 10.0442 19.6262 10.7541 19.9498 11.5355C20.2735 12.3168 20.4401 13.1542 20.4401 13.9999C20.4401 14.8457 20.2735 15.6831 19.9498 16.4644C19.6262 17.2458 19.1518 17.9557 18.5538 18.5537C17.9558 19.1517 17.2459 19.6261 16.4645 19.9497C15.6832 20.2734 14.8458 20.4399 14.0001 20.4399L14.0001 13.9999L14.0001 7.55994Z"
								fill="white"
								:class="{ isDarkModeSub: !data.isDarkMode }"
							/>
						</svg>
					</button>
				</div>
			</nav>
			<div class="homeContent">
				<div>
					<h1>Hi I'm Gustav</h1>
					<p>I'm a frontend developer</p>
					<a class="CTA large" href="#contact">
						<div class="border"></div>
						<button>Let's talk</button>
					</a>
				</div>
				<div class="imgContainer">
					<img :class="{ darkenImage: data.isDarkMode }" src="../assets/me.jpg" alt="" />
				</div>
			</div>
		</section>
		<section id="about">
			<div class="bgArt">
				<img :class="{ darkArt: data.isDarkMode }" src="../assets/bgArt.png" alt="background art" />
			</div>
			<div class="aboutText">
				<h3 class="title">About me</h3>
				<p>
					My name is Gustav Evensson and I'm an self-taught frontend developer / product designer. I have in high school studied web development and electrical engineering. Since then i have
					been expanding my frontend development skills through youtube and online courses.
					<br /><br />
					I live in Sweden and I'm 20 years old and dream of landing a job as a frontend developer. I also love working out and flying drones, check out my work on AerialShots down below.
				</p>
			</div>
		</section>
		<section id="work">
			<h3 class="title">My work</h3>
			<div class="featured">
				<a href="https://github.com/gustav-evensson/aerialshots" class="projectLink">
					<img src="../assets/featuredProjects/aerialshotsThumb.jpg" alt="AerialShots" :class="{ darkenImage: data.isDarkMode }" />
					<p>View More</p>
				</a>
				<a href="https://github.com/gustav-evensson/color-tinter" class="projectLink">
					<img src="../assets/featuredProjects/colortinterThumb.jpg" alt="ColorTinter" :class="{ darkenImage: data.isDarkMode }" />
					<p>View More</p>
				</a>
				<a href="https://github.com/gustav-evensson/geweb" class="projectLink">
					<img src="../assets/featuredProjects/gewebThumb.jpg" alt="GeWeb" :class="{ darkenImage: data.isDarkMode }" />
					<p>View More</p>
				</a>
				<a href="https://github.com/gustav-evensson/allstore" class="projectLink">
					<img src="../assets/featuredProjects/allstoreThumb.jpg" alt="AllStore" :class="{ darkenImage: data.isDarkMode }" />
					<p>View More</p>
				</a>
			</div>
			<div class="CTA black large">
				<div class="border"></div>
				<button @click="switchPage('/morework')">MORE WORK</button>
			</div>
			<div class="toolsContainer">
				<h4>TOOLS</h4>
				<div class="tools">
					<img src="../assets/tools/HTMLtools.png" alt="" />
					<img src="../assets/tools/CSStools.png" alt="" />
					<img src="../assets/tools/JStools.png" alt="" />
					<img src="../assets/tools/vuetools.png" alt="" />
					<img src="../assets/tools/figmatools.png" alt="" />
					<img src="../assets/tools/vs_codetools.png" alt="" />
					<img src="../assets/tools/Firebasetools.png" alt="" />
					<img src="../assets/tools/GitHubtools.png" :class="{ invertImage: data.isDarkMode }" alt="" />
				</div>
			</div>
		</section>
		<section id="contact">
			<h3 class="title">Contact Me</h3>
			<form @submit.prevent="sendMsg()">
				<div class="credentials">
					<input type="text" placeholder="Your name..." class="credInput inputStyle" v-model="data.clientName" />
					<input type="email" placeholder="Your E-mail..." class="credInput inputStyle" v-model="data.clientEmail" />
				</div>
				<textarea class="inputStyle msgInput" placeholder="Your message..." v-model="data.clientMessage"></textarea>
				<div class="bottomArea">
					<div class="CTA large">
						<div class="border"></div>
						<button type="submit" v-if="!data.sending">Send Message</button>
						<button v-if="data.sending"><div class="loader"></div></button>
					</div>
					<div class="socials">
						<a href="https://www.instagram.com/gustav_evensson/">
							<img :class="{ invertImage: data.isDarkMode }" src="../assets/socials/InstagramLogo.png" alt="" />
						</a>
						<a href="https://www.linkedin.com/in/gustav-evensson-bb9547222/">
							<img :class="{ invertImage: data.isDarkMode }" src="../assets/socials/LinkedinLogo.png" alt="" />
						</a>
						<a href="https://www.facebook.com/profile.php?id=100009016109763">
							<img :class="{ invertImage: data.isDarkMode }" src="../assets/socials/FacebookLogo.png" alt="" />
						</a>
						<a href="https://twitter.com/ge_frontend">
							<img :class="{ invertImage: data.isDarkMode }" src="../assets/socials/TwitterLogo.png" alt="" />
						</a>
						<a href="https://github.com/gustav-evensson">
							<img :class="{ invertImage: data.isDarkMode }" src="../assets/socials/GithubLogo.png" alt="" />
						</a>
					</div>
				</div>
			</form>
			<div :class="{response: true, show: data.response, error: data.error}">{{data.responseMsg}}</div>
		</section>
	</div>
</template>

<script>
import { onBeforeMount, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import sendMessage from '@/message/msg';

export default {
	setup() {
		const router = useRouter();
		const store = useStore();
		const data = reactive({
			isDarkMode: true,
			switchPage: true,
			sending: false,
			colors: {
				primaryText: ['#000', '#fff'],
				accentColor: ['#ff773d', '#BE5A2F'],
				bgColor: ['#fff', '#282828'],
			},
			clientName: '',
			clientEmail: '',
			clientMessage: '',
			responseMsg: '',
			response: false,
			error: false
		});

		function setColors() {
			const root = document.querySelector(':root');
			let i = 0;
			if (data.isDarkMode) i = 1;
			root.style.setProperty('--primaryText', data.colors.primaryText[i]);
			root.style.setProperty('--accentColor', data.colors.accentColor[i]);
			root.style.setProperty('--bgColor', data.colors.bgColor[i]);
		}

		function switchTheme() {
			data.isDarkMode = !data.isDarkMode;
			store.commit('switchTheme');
			setColors();
		}

		function switchPage(path) {
			data.switchPage = true;
			setTimeout(() => {
				router.push(path);
			}, 300);
		}

		async function sendMsg(){
			data.error = false
			data.sending = true
			const response = await sendMessage(data.clientEmail, data.clientName, data.clientMessage)
			data.sending = false
			data.response = true
			if(response.status == 200){
				data.responseMsg = "Thank you, I will be in touch!"
			}
			else{
				data.error = true
				data.responseMsg = response.text
			}
			data.clientMessage = ''
			setTimeout(() => {
				data.response = false
			}, 2000);
		}

		onBeforeMount(() => {
			data.isDarkMode = store.state.isDarkMode;
			setColors();
		});

		onMounted(() => {
			setTimeout(() => {
				data.switchPage = false;
			}, 100);
		});

		return {
			data,
			switchTheme,
			switchPage,
			sendMsg
		};
	},
};
</script>
