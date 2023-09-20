<script setup>
import { ref, onMounted, reactive } from 'vue';
import projectCard from '../components/projectCard.vue';

import aerialShotsImg from '../assets/projectImages/aerialshots.jpg';
import colorTinterImg from '../assets/projectImages/colortinter.jpg';
import colorApiImg from '../assets/projectImages/color-api.jpg';
import mntnImg from '../assets/projectImages/mntn.jpg';
import alertsjsImg from '../assets/projectImages/alertsjs.jpg';
import gustavevensson_01 from '../assets/projectImages/gustavevensson_01.jpg';
import gewebImg from '../assets/projectImages/geweb.jpg';
import nested_border_radius from '../assets/projectImages/nested_border_radius.jpg'

const projects = [
	{
		title: 'GeWeb',
		img: gewebImg,
		webPath: 'https://geweb.se/',
		gitPath: '',
		tools: ['Nuxt', 'Vue', 'Scss', 'Firebase']
	},
	{
		title: 'Nested Border Radius',
		img: nested_border_radius,
		webPath: 'https://nested-border-radius.web.app/',
		gitPath: 'https://github.com/gustav-evensson/nested-border-radius',
		tools: ['React', 'Tailwind', 'Firebase']
	},
	{
		title: 'Color Tinter',
		img: colorTinterImg,
		webPath: 'https://color-tinter.web.app/',
		gitPath: 'https://github.com/gustav-evensson/color-tinter',
		tools: ['Vue', 'Scss', 'Firebase']
	},
	{
		title: 'Color API',
		img: colorApiImg,
		webPath: 'https://color-api-ncwh.onrender.com/bases/tints/8B45A1',
		gitPath: 'https://github.com/gustav-evensson/color-api/',
		tools: ['Node', 'Express']
	},
	{
		title: 'Portfolio v1',
		img: gustavevensson_01,
		webPath: 'https://gustavevensson-v1.web.app/',
		gitPath: 'https://github.com/gustav-evensson/gustavevensson-v1',
		tools: ['Vue', 'Scss', 'Firebase']
	},
	{
		title: 'AerialShots',
		img: aerialShotsImg,
		webPath: 'https://aerialshots.se/',
		gitPath: 'https://github.com/gustav-evensson/aerialshots',
		tools: ['Firebase']
	},
	{
		title: 'Alerts.js',
		img: alertsjsImg,
		webPath: 'https://www.npmjs.com/package/alerts.js?activeTab=readme',
		gitPath: 'https://github.com/gustav-evensson/alerts.js',
		tools: ['Npm']
	},
	{
		title: 'NMTN',
		img: mntnImg,
		webPath: 'https://gustav-evensson.github.io/MNTN/',
		gitPath: 'https://github.com/gustav-evensson/MNTN',
		tools: ['Scss']
	},
]

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
				<project-card v-for="project, idx in projects" data-aos="fade-up" :data-aos-delay="idx*100" :webPath="project.webPath" :gitPath="project.gitPath" :title="project.title" :tools="project.tools" :imgSrc="project.img"/>
			</div>
		</div>
		<div class="columnDisplay">
			<!-- <project-card webPath="https://geweb.se/" title="GeWeb" :imgSrc="gewebImg" :tools="['Nuxt', 'Vue', 'Scss', 'Firebase']"/>
				<project-card webPath="https://nested-border-radius.web.app/" gitPath="https://github.com/gustav-evensson/nested-border-radius" title="Nested Border Radius" :imgSrc="nested_border_radius" :tools="['React', 'Tailwind', 'Firebase']"/>
				<project-card webPath="https://color-tinter.web.app/" gitPath="https://github.com/gustav-evensson/color-tinter" title="Color Tinter" :imgSrc="colorTinterImg" :tools="['Vue', 'Scss', 'Firebase']"/>
				<project-card webPath="https://color-api-ncwh.onrender.com/bases/tints/8B45A1" gitPath="https://github.com/gustav-evensson/color-api/" :imgSrc="colorApiImg" title="Color API" :tools="['Node', 'Express']" /> -->
			<project-card v-for="project in projects.slice(0, 3)" data-aos="fade-left" data-aos-delay="0" :webPath="project.webPath" :gitPath="project.gitPath" :title="project.title" :tools="project.tools" :imgSrc="project.img"/>
			<div class="showMoreProjects" :class="{ show: state.showMoreProjects }">
				<project-card v-for="project in projects.slice(3, projects.length-1)" data-aos="fade-left" data-aos-delay="0" :webPath="project.webPath" :gitPath="project.gitPath" :title="project.title" :tools="project.tools" :imgSrc="project.img"/>
				<!-- <project-card webPath="https://gustavevensson-v1.web.app/" gitPath="https://github.com/gustav-evensson/gustavevensson-v1" :imgSrc="gustavevensson_01" title="Portfolio v1" :tools="['Vue', 'Scss', 'Firebase']" />
				<project-card webPath="https://aerialshots.se/" gitPath="https://github.com/gustav-evensson/aerialshots" title="AerialShots" :imgSrc="aerialShotsImg" :tools="['Firebase']" />
				<project-card webPath="https://www.npmjs.com/package/alerts.js?activeTab=readme" gitPath="https://github.com/gustav-evensson/alerts.js" :imgSrc="alertsjsImg" title="Alerts.js" :tools="['Npm']" />
				<project-card webPath="https://gustav-evensson.github.io/MNTN/" gitPath="https://github.com/gustav-evensson/MNTN" title="MNTN" :imgSrc="mntnImg" :tools="['Scss']"/> -->
			</div>
			<div class="showMoreBtnContainer">
				<button v-if="!state.showMoreProjects" class="showMoreBtn" @click="state.showMoreProjects = true">Show More</button>
				<button v-else class="showMoreBtn" @click="state.showMoreProjects = false">Show Less</button>
			</div>
		</div>
	</section>
</template>
