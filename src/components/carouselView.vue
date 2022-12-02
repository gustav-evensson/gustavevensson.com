<template>
	<div ref="carousel" class="carouselView">
		<button class="previous" @click="previous()">
			<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36ZM21.2929 7.29289C21.6834 6.90237 22.3166 6.90237 22.7071 7.29289C23.0976 7.68342 23.0976 8.31658 22.7071 8.70711L13.4142 18L22.7071 27.2929C23.0976 27.6834 23.0976 28.3166 22.7071 28.7071C22.3166 29.0976 21.6834 29.0976 21.2929 28.7071L11.2929 18.7071C10.9024 18.3166 10.9024 17.6834 11.2929 17.2929L21.2929 7.29289Z"
					fill="white"
				/>
			</svg>
		</button>

		<div ref="slides" class="slidesContainer">
			<a :href="slide.path" :data-slide-title="slide.name ? slide.name : false /* get fallback value */" class="slide" v-for="(slide, i) in props.carouselData" :key="i">
				<img :src="slide.image" :alt="slide.alt" />
			</a>
		</div>

		<button class="next" @click="next()">
			<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289C12.9024 7.68342 12.9024 8.31658 13.2929 8.70711L22.5858 18L13.2929 27.2929C12.9024 27.6834 12.9024 28.3166 13.2929 28.7071C13.6834 29.0976 14.3166 29.0976 14.7071 28.7071L24.7071 18.7071C25.0976 18.3166 25.0976 17.6834 24.7071 17.2929L14.7071 7.29289Z"
					fill="white"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';

export default {
	props: { carouselData: undefined },
	setup(props) {
		const slides = ref(null);
		const carousel = ref(null);
		let slideIndex = 0;

		let touchstartX = 0;
		let touchendX = 0;

		function checkDirection() {
			if (touchendX < touchstartX) next();
			if (touchendX > touchstartX) previous();
		}

		onMounted(() => {
			slides.value.children[slideIndex].classList.add('currentSlide');

			if (carousel.value) {
				carousel.value.addEventListener('touchstart', (e) => {
					touchstartX = e.changedTouches[0].screenX;
				});

				carousel.value.addEventListener('touchend', (e) => {
					touchendX = e.changedTouches[0].screenX;
					checkDirection();
				});
			}
		});

		onUnmounted(() => {
			if (carousel.value) {
				carousel.value.removeEventListener('touchstart', (e) => {
					touchstartX = e.changedTouches[0].screenX;
				});

				carousel.value.removeEventListener('touchend', (e) => {
					touchendX = e.changedTouches[0].screenX;
					checkDirection();
				});
			}
		});

		function next() {
			for (let i = 0; i in slides.value.children; i++) {
				slides.value.children[i].classList.remove('currentSlide');
			}
			slideIndex == props.carouselData.length - 1 ? (slideIndex = 0) : slideIndex++;
			setTimeout(() => {
				slides.value.children[slideIndex].classList.add('currentSlide');
			}, 300);
		}

		function previous() {
			for (let i = 0; i in slides.value.children; i++) {
				slides.value.children[i].classList.remove('currentSlide');
			}
			slideIndex == 0 ? (slideIndex = props.carouselData.length - 1) : slideIndex--;
			setTimeout(() => {
				slides.value.children[slideIndex].classList.add('currentSlide');
			}, 300);
		}

		return {
			slides,
			carousel,
			next,
			previous,
			props,
		};
	},
};
</script>

<style scoped>
.carouselView {
	position: relative;
	overflow: hidden;
}
.previous,
.next {
	width: 48px;
	height: 48px;
	border-radius: 50%;
	position: absolute;
	background-color: transparent;
	top: 50%;
	transform: translateY(-50%);
	border: none;
	z-index: 3;
	opacity: 0.5;
	cursor: pointer;
	transition: opacity 300ms;
}
.next:hover,
.previous:hover {
	opacity: 1;
}
.next svg,
.previous svg {
	width: 100%;
	height: 100%;
}
.previous {
	left: 30px;
}
.next {
	right: 30px;
}
.slidesContainer {
	display: grid;
	grid-template-areas: 'stack';
	place-items: center;
	overflow: hidden;
	width: 100%;
	height: 100%;
}
.slide {
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: opacity 300ms;
	grid-area: stack;
	position: relative;
	pointer-events: none;
}
.slide::before {
	content: attr(data-slide-title);
	box-sizing: border-box;
	width: 100%;
	height: 30%;
	background: linear-gradient(0deg, #000000 -26.72%, rgba(0, 0, 0, 0) 100%);
	color: white;
	position: absolute;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	font-size: 32px;
	padding: 30px;
	bottom: 0;
	left: 0;
	z-index: 2;
}
.slide[data-slide-title='false']::before {
	/* If a title was not provided we dont want to render this element */
	display: none;
}
.slide img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: scale 300ms;
}
.currentSlide {
	opacity: 1;
	pointer-events: all;
	transition: filter 300ms, opacity 300ms;
	cursor: pointer;
}
.currentSlide:hover img {
	scale: 1.1;
}
@media screen and (max-width: 450px) {
	.slide::before {
		font-size: 18px;
		padding: 20px;
	}
	.previous,
	.next {
		width: 32px;
		height: 32px;
	}
	.previous {
		left: 20px;
	}
	.next {
		right: 20px;
	}
}
</style>
