<template>
	<div :class="{ moreWork: true, switchPage: data.switchPage }">
		<div class="bgArt">
			<img :class="{ darkArt: data.isDarkMode }" src="../assets/bgArt.png" alt="background art" />
		</div>
		<div class="topBar">
			<button class="backArrow" @click="switchPage('/')">
				<svg width="54" height="45" viewBox="0 0 54 45" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M51.5 22.25H2" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M22.25 2L2 22.25L22.25 42.5" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			<a href="https://github.com/gustav-evensson" class="CTA black large">
				<div class="border"></div>
				<button>
					<img src="../assets/tools/GitHubtools.png" alt="" :class="{ invertImage: !data.isDarkMode }" />
				</button>
			</a>
		</div>
		<div class="projects">
            <div class="topProjects">
				<h2 class="projectHeader">Top Projects</h2>
				<carousel :carouselData="projects.topProjects"/>
			</div>
			<div class="smallProjects">
				<h2 class="projectHeader">Small Projects</h2>
				<div class="smallProjectsContainer">
					<a v-for="(project, i) in projects.smallerProjects" :key="i" :href="project.path">
						<img v-if="project.image" :src="project.image" alt="">
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { onBeforeMount, onMounted, reactive } from 'vue';
import projects from '../../projects.json'
import { useStore } from 'vuex';
import carousel from '@/components/carouselView.vue';

export default {
	components: {
		carousel
	},
	setup() {
		const router = useRouter();
		const store = useStore();
		const data = reactive({
			switchPage: true,
			isDarkMode: true,
			testImg: 'aerialshots.jpg',
			colors: {
				primaryText: ['#000', '#fff'],
				accentColor: ['#ff773d', '#BE5A2F'],
				bgColor: ['#fff', '#282828'],
			},
		});

		function switchPage(path) {
			data.switchPage = true;
			setTimeout(() => {
				router.push(path);
			}, 300);
		}

        function getPhoto(){
            return 'aerialshots.jpg'
        }

		onBeforeMount(() => {
			data.isDarkMode = store.state.isDarkMode;
			const root = document.querySelector(':root');
			let i = 0;
			if (data.isDarkMode) i = 1;
			root.style.setProperty('--primaryText', data.colors.primaryText[i]);
			root.style.setProperty('--accentColor', data.colors.accentColor[i]);
			root.style.setProperty('--bgColor', data.colors.bgColor[i]);
		});

		onMounted(() => {
			setTimeout(() => {
				data.switchPage = false;
			}, 100);
		});

		return {
			switchPage,
            getPhoto,
			data,
			projects
		};
	},
};
</script>
