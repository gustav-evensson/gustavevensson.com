<script setup>
import { ref, onMounted } from 'vue';
import workCard from '../components/workCard.vue';

import aerialShotsImg from '../assets/projectImages/aerialshots.jpg';
import allStoreImg from '../assets/projectImages/allstore.jpg';
import colorTinterImg from '../assets/projectImages/colortinter.jpg';
import mntnImg from '../assets/projectImages/mntn.jpg';
import gustavevensson_01 from '../assets/projectImages/gustavevensson_01.jpg'

const innerContainer = ref(null);
const projectDescriptions = {
	aerialshots:
		'This is a landigpage that i did not design but built from this predesigned figma project. I made some small changes and also implemented a responsive design for mobile/tabletusers. Otherwise its a very simple project where i practiced building something from a predesigned project.',
	allstore:
		'AllStore is a project i did solely for my own learning purpose. I tried to implement a few different functions that a had not worked on before. The website is not functional in any other way than visual content. I used an API from DummyJSON to get the products that are show on the page. I did not put that much time into the design on this project I felt I would rather focus on the functionality of the site.',
	colortinter:
		'Color Tinter is a color tool mainly diracted towards frontend developers. It takes a color as the input and the return to the users a wide variety of different color spectrums. The color can be copied by clicking it but what makes Color Tinter different is its ability to return a copyable text of the entire spectrum wich can be changed from CSS variable to SCSS variables or an array with the colors in string format.',
	mntn: 'This is a landigpage that i did not design but built from this predesigned figma project. I made some small changes and also implemented a responsive design for mobile/tablet users. Otherwise its a very simple project where i practiced building something from a predesigned project.',
	ge_01: 'This is my old portfolio website i created a few years ago'
};

let touchstartX = 0;
let touchendX = 0;
let currentSlide = 0;

onMounted(() => {
	const items = innerContainer.value.childNodes;
	const indexArray = [...items];

	function checkDirection() {
		if (touchendX < touchstartX) {
			if (currentSlide == indexArray.length - 1) {
				return currentSlide;
			} else {
				return currentSlide + 1;
			}
		}
		if (touchendX > touchstartX) {
			if (currentSlide == 0) {
				return currentSlide;
			} else {
				return currentSlide - 1;
			}
		}
	}

	items.forEach((item) => {
		item.addEventListener('click', (e) => {
			items.forEach((i) => {
				i.classList.remove('selected');
			});
			innerContainer.value.style.transform = `translate(-${item.offsetWidth * indexArray.indexOf(item)}px, 0)`;
			currentSlide = indexArray.indexOf(item);
			item.classList.add('selected');
		});
	});

	innerContainer.value.addEventListener('touchstart', (e) => {
		touchstartX = e.changedTouches[0].screenX;
	});

	innerContainer.value.addEventListener('touchend', (e) => {
		touchendX = e.changedTouches[0].screenX;
		currentSlide = checkDirection();
		innerContainer.value.style.transform = `translate(-${indexArray[0].offsetWidth * currentSlide}px, 0)`;
		items.forEach((i) => {
			i.classList.remove('selected');
		});
		indexArray[currentSlide].classList.add('selected');
	});

	window.addEventListener('resize', () => {
		innerContainer.value.style.transform = `translate(-${indexArray[0].offsetWidth * currentSlide}px, 0)`;
	});
});
</script>

<template>
	<section id="work">
		<div data-aos="fade-up" data-aos-offset="300" class="sectionTitle">
			<span class="sectionNumber">02</span>
			<h3>my work</h3>
			<p>Here is some of my work, hope you like it!</p>
		</div>
		<div class="carousel">
			<div ref="innerContainer" class="innerContainer">
				<work-card web-path="https://aerialshots.se/" :imgSrc="gustavevensson_01" title="gustavevensson.com v1" class="selected" :projectDesc="projectDescriptions.ge_01" />
				<work-card web-path="https://aerialshots.se/" gitPath="https://github.com/gustav-evensson/aerialshots" title="AerialShots" :imgSrc="aerialShotsImg" :projectDesc="projectDescriptions.aerialshots" />
				<work-card web-path="https://gustav-evensson.github.io/MNTN/" gitPath="https://github.com/gustav-evensson/MNTN" title="MNTN" :imgSrc="mntnImg" :projectDesc="projectDescriptions.mntn" />
				<work-card web-path="https://color-tinter.web.app/" gitPath="https://github.com/gustav-evensson/color-tinter" title="Color Tinter" :imgSrc="colorTinterImg" :projectDesc="projectDescriptions.colortinter" />
				<work-card web-path="https://all-store-dae9a.web.app/" gitPath="https://github.com/gustav-evensson/allstore" title="AllStore" :imgSrc="allStoreImg" :projectDesc="projectDescriptions.allstore" />
			</div>
		</div>
	</section>
</template>
