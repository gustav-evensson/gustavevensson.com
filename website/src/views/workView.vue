<script setup>
import { ref, onMounted, reactive } from 'vue';
import projectCard from '../components/projectCard.vue';

import aerialShotsImg from '../assets/projectImages/aerialshots.jpg';
import allStoreImg from '../assets/projectImages/allstore.jpg';
import colorTinterImg from '../assets/projectImages/colortinter.jpg';
import colorApiImg from '../assets/projectImages/color-api.jpg';
import mntnImg from '../assets/projectImages/mntn.jpg';
import alertsjsImg from '../assets/projectImages/alertsjs.jpg';
import gustavevensson_01 from '../assets/projectImages/gustavevensson_01.jpg';
import gewebImg from '../assets/projectImages/geweb.jpg';

const state = reactive({
	showMoreProjects: false
})

onMounted(() => {
	const track = document.getElementById('drag-track');
	const images = document.querySelectorAll('.projectImage');
	const dragContainer = document.querySelector('#work');

	function calcOffset() {
		// We can count with 50 since the width is set to 50vmin and 5 since the gap is 5vmin
		const trackLenght = 50 * track.children.length + 5 * (track.children.length - 1);

		const offset = -100 + (50 * 100) / trackLenght;

		return offset;
	}

	const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

	const handleOnUp = () => {
		track.dataset.mouseDownAt = '0';
		track.dataset.prevPercentage = track.dataset.percentage;
	};

	const handleOnMove = (e) => {
		if(window.innerWidth <= 850) {
			images.forEach((image) => {
				image.style.objectPosition = 'center'
			});
			return
		}
		if (track.dataset.mouseDownAt === '0') return;

		const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
			maxDelta = dragContainer.offsetWidth;

		const percentage = (mouseDelta / maxDelta) * -100,
			nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
			nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), calcOffset());

		track.dataset.percentage = nextPercentage;
		track.animate(
			{
				transform: `translate(${nextPercentage}%, -50%)`,
			},
			{ duration: 1200, fill: 'forwards' }
		);

		images.forEach((image) => {
			image.animate(
				{
					objectPosition: `${100 + nextPercentage}% center`,
				},
				{ duration: 1200, fill: 'forwards' }
			);
		});
	};

	dragContainer.onmousedown = (e) => handleOnDown(e);

	dragContainer.ontouchstart = (e) => handleOnDown(e.touches[0]);

	dragContainer.onmouseup = (e) => handleOnUp(e);

	dragContainer.ontouchend = (e) => handleOnUp(e.touches[0]);

	dragContainer.onmousemove = (e) => handleOnMove(e);

	dragContainer.ontouchmove = (e) => handleOnMove(e.touches[0]);
});
</script>

<template>
	<section id="work">
		<div data-aos="fade-up" data-aos-offset="0" class="sectionTitle">
			<span class="sectionNumber">02</span>
			<h3>my work</h3>
			<p>Here is some of my work, hope you like it!</p>
		</div>
		<div class="centerContainer">
			<div id="drag-track" data-mouse-down-at="0" data-prev-percentage="0">
				<project-card data-aos="fade-up" data-aos-delay="0" webPath="https://color-tinter.web.app/" gitPath="https://github.com/gustav-evensson/color-tinter" title="Color Tinter" :imgSrc="colorTinterImg" :tools="['vue', 'scss', 'firebase']"/>
				<project-card data-aos="fade-up" data-aos-delay="100" webPath="https://geweb.se/" title="GeWeb" :imgSrc="gewebImg" :tools="['Nuxt', 'Vue', 'scss', 'firebase']"/>
				<project-card data-aos="fade-up" data-aos-delay="200" webPath="https://gustav-evensson.github.io/MNTN/" gitPath="https://github.com/gustav-evensson/MNTN" title="MNTN" :imgSrc="mntnImg" :tools="['github pages', 'scss']"/>
				<project-card data-aos="fade-up" data-aos-delay="300" webPath="https://aerialshots.se/" gitPath="https://github.com/gustav-evensson/aerialshots" title="AerialShots" :imgSrc="aerialShotsImg" :tools="['firebase']" />
				<project-card data-aos="fade-up" data-aos-delay="400" webPath="https://www.npmjs.com/package/alerts.js?activeTab=readme" gitPath="https://github.com/gustav-evensson/alerts.js" :imgSrc="alertsjsImg" title="Alerts.js" :tools="['npm']" />
				<project-card data-aos="fade-up" data-aos-delay="500" webPath="https://gustavevensson-v1.web.app/" gitPath="https://github.com/gustav-evensson/gustavevensson-v1" :imgSrc="gustavevensson_01" title="Portfolio v1" :tools="['vue', 'scss', 'firebase']" />
				<project-card data-aos="fade-up" data-aos-delay="500" webPath="https://color-api-ncwh.onrender.com/bases/tints/8B45A1" gitPath="https://github.com/gustav-evensson/color-api/" :imgSrc="colorApiImg" title="Color API" :tools="['Node.js', 'Express.js']" />
			</div>
		</div>
		<div class="columnDisplay">
			<project-card webPath="https://color-tinter.web.app/" gitPath="https://github.com/gustav-evensson/color-tinter" title="Color Tinter" :imgSrc="colorTinterImg" :tools="['vue', 'scss', 'firebase']"/>
			<project-card webPath="https://geweb.se/" title="GeWeb" :imgSrc="gewebImg" :tools="['Nuxt', 'Vue', 'scss', 'firebase']"/>
			<project-card webPath="https://gustav-evensson.github.io/MNTN/" gitPath="https://github.com/gustav-evensson/MNTN" title="MNTN" :imgSrc="mntnImg" :tools="['github pages', 'scss']"/>
			<project-card webPath="https://aerialshots.se/" gitPath="https://github.com/gustav-evensson/aerialshots" title="AerialShots" :imgSrc="aerialShotsImg" :tools="['firebase']" />
			<div class="showMoreProjects" :class="{ show: state.showMoreProjects }">
				<project-card webPath="https://www.npmjs.com/package/alerts.js?activeTab=readme" gitPath="https://github.com/gustav-evensson/alerts.js" :imgSrc="alertsjsImg" title="Alerts.js" :tools="['npm']" />
				<project-card webPath="https://gustavevensson-v1.web.app/" gitPath="https://github.com/gustav-evensson/gustavevensson-v1" :imgSrc="gustavevensson_01" title="Portfolio v1" :tools="['vue', 'scss', 'firebase']" />
				<project-card webPath="https://color-api-ncwh.onrender.com/bases/tints/8B45A1" gitPath="https://github.com/gustav-evensson/color-api/" :imgSrc="colorApiImg" title="Color API" :tools="['Node.js', 'Express.js']" />
			</div>
			<div class="showMoreBtnContainer">
				<button v-if="!state.showMoreProjects" class="showMoreBtn" @click="state.showMoreProjects = true">Show More</button>
				<button v-else class="showMoreBtn" @click="state.showMoreProjects = false">Show Less</button>
			</div>
		</div>
	</section>
</template>
