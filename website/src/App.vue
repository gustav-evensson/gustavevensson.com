<script setup>
import menuBtn from './svgIcons/menuBtn.vue';
import sunIcon from './svgIcons/sunIcon.vue';
import moonIcon from './svgIcons/moonIcon.vue';
import anime from 'animejs/lib/anime.es.js';
import { onMounted, reactive, ref } from 'vue';
import { useThemeStore } from './pinia/store';
import homeView from './views/homeView.vue';
import aboutView from './views/aboutView.vue';
import toolsView from './views/toolsView.vue';
import workView from './views/workView.vue';
import contactView from './views/contactView.vue';

const themeStore = useThemeStore();

const menuItems = ref(null);
const geLogo = ref(null);
const navActions = ref(null);
const root = document.querySelector(':root');
const data = reactive({
	showMenu: false,
	isDarkMode: false,
});

onMounted(() => {
	data.isDarkMode = themeStore.isDarkMode;
	if (data.isDarkMode) {
		root.style.setProperty('--text-color', '#FFFFFF');
		root.style.setProperty('--bg-color', '#1C1C1C');
	}
	var tl = anime.timeline({
		easing: 'easeOutQuad',
	});

	tl.add({
		targets: geLogo.value,
		translateY: [-100, 0],
		duration: 400,
		delay: 4000,
	}).add({
		targets: [...navActions.value.childNodes],
		translateY: [-100, 0],
		duration: 400,
		delay: anime.stagger(200),
	});
});

function switchTheme() {
	if (!data.isDarkMode) {
		root.style.setProperty('--text-color', '#FFFFFF');
		root.style.setProperty('--bg-color', '#1C1C1C');
	} else {
		root.style.setProperty('--text-color', '#000000');
		root.style.setProperty('--bg-color', '#FFFFFF');
	}
	themeStore.switchTheme();
	data.isDarkMode = !data.isDarkMode;
}

function showMenu() {
	if (!data.showMenu) {
		anime({
			targets: [...menuItems.value.childNodes],
			translateX: [-50, 0],
			opacity: [0, 1],
			duration: 200,
			easing: 'easeOutSine',
			delay: anime.stagger(100),
		});
	} else {
		anime({
			targets: [...menuItems.value.childNodes],
			translateX: [0, -50],
			opacity: [1, 0],
			duration: 200,
			easing: 'easeOutSine',
			delay: anime.stagger(100),
		});
	} // cubicBezier(1,-1.26,.92,.73)
	data.showMenu = !data.showMenu;
}
</script>

<template>
	<div class="startAnimationContainer">
		<svg width="132" height="70" viewBox="0 0 132 70" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				class="outer"
				d="M66 68H3C2.44772 68 2 67.5523 2 67V61C2 60.4477 2.43145 60 2.98373 60C8.60437 60 37.0672 60 56 60C60 60 62 58 62 54C62 49.6655 62 43.4043 62 40.9958C62 40.4435 61.5523 40 61 40H3C2.44771 40 2 39.5523 2 39V32C2 32 2 32 2 32C2 32 2 22.2484 2 16C2 8 8 2 16 2C31.621 2 40.379 2.00001 56 2C64 2 66 7 66 7"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<path
				class="outer"
				d="M66 68H129C129.552 68 130 67.5523 130 67V61C130 60.4477 129.569 60 129.016 60C123.396 60 94.9328 60 76 60C72 60 70 58 70 54C70 49.6655 70 43.4043 70 40.9958C70 40.4435 70.4477 40 71 40H129C129.552 40 130 39.5523 130 39V32C130 32 130 32 130 32C130 32 130 22.2484 130 16C130 8 124 2 116 2C100.379 2 91.621 2.00001 76 2C68 2 66 7 66 7"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<path
				class="inner"
				d="M11 32.0001H61C61.5523 32.0001 62 31.5555 62 31.0033V16.0001C62 12 60 10.0002 56 10.0001C40.379 9.9998 31.621 10.0002 16 10.0001C12 10.0001 10 12 10 16.0001V31.0033C10 31.5555 10.4477 32.0001 11 32.0001Z"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<path
				class="inner"
				d="M121 32H71C70.4477 32 70 31.5554 70 31.0031V16C70 12 72 10 76 10H116C120 9.99998 122 11.9999 122 16V31.0031C122 31.5554 121.552 32 121 32Z"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>
	</div>
	<nav>
		<div class="navItems">
			<svg ref="geLogo" class="geLogo" width="66" height="35" viewBox="0 0 66 35" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M33 34H1V30C1 30 17.4558 30 28 30C30 30 31 29 31 27C31 24.2663 31 20 31 20H1V16C1 16 1 11.1242 1 8C1 4 4 1 8 1C15.8105 1 20.1895 1 28 1C32 0.999998 33 3.5 33 3.5"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M33 34H65V30C65 30 48.5442 30 38 30C36 30 35 29 35 27C35 24.2663 35 20 35 20H65V16C65 16 65 11.1242 65 8C65 4 62 1 58 1C50.1895 1 45.8105 1 38 1C34 0.999998 33 3.5 33 3.5"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path stroke-width="2" d="M5 16.0001H31V8.00007C31 6 30 5.00011 28 5.00007C20.1895 4.9999 15.8105 5.0001 8 5.00007C6 5.00006 5 6.00002 5 8.00007V16.0001Z" stroke="white" />
				<path stroke-width="2" d="M61 16H35V8C35 6 36 5 38 5H58C60 4.99999 61 5.99995 61 8V16Z" stroke="white" />
			</svg>

			<div ref="navActions" class="navActions">
				<div class="themeSwitch" @click="switchTheme()" :class="{ themeSwitched: data.isDarkMode }">
					<sun-icon />
					<moon-icon />
				</div>
				<div :class="{ showMenu: data.showMenu }" class="navMenu">
					<menu-btn @click="showMenu()" />
					<div ref="menuItems" class="menuItems">
						<a href="#home">Home</a>
						<a href="#about">About</a>
						<a href="#work">Work</a>
						<a href="#contact">Contact</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
	<home-view />
	<about-view />
	<tools-view />
	<work-view />
	<contact-view/>
</template>
