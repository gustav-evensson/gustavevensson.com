<script setup>
import anime from 'animejs/lib/anime.es';
import SplitType from 'split-type';
import { onMounted, ref } from 'vue';
import standardLink from '../components/standardLink.vue'

const title = ref(null);
const filledChars = ref(null);
const bgArt = ref(null);
const socialLinks = ref(null);

onMounted(() => {
	const splitTitle = new SplitType(title.value);
	const tl = anime.timeline();
    
	tl
    .add({
        targets: bgArt.value,
        translateX: [5, 0],
        opacity: [0, .3],
        duration: 300,
        easing: 'easeOutSine',
        delay: 4000
    })
    .add(
        {
            targets: [...splitTitle.words],
			translateY: [100, 0],
			opacity: [0, 1],
			duration: 400,
			easing: 'easeOutSine',
			delay: anime.stagger(50),
		},
        '+=1'
        )
    .add({
        targets: [...socialLinks.value.childNodes],
		translateY: [100, 0],
		opacity: [0, 1],
		duration: 400,
		easing: 'easeOutSine',
		delay: anime.stagger(50),
    })
    const splitChars = new SplitType(filledChars.value).chars

	splitChars.forEach((char) => {
		char.addEventListener('mouseover', () => {
			splitChars.forEach((c) => {
				c.classList.remove('lift');
			});
			char.classList.add('lift');
		});
	});

	filledChars.value.addEventListener('mouseleave', () => {
		splitChars.forEach((c) => {
			c.classList.remove('lift');
		});
	});
});
</script>

<template>
	<section id="home">
        <div class="homeContent">
            <h1 ref="title">Hi i'm <span ref="filledChars">gustav</span><br />i'm a frontend developer</h1>
            <div ref="socialLinks" class="socialLinks">
                <standard-link text="linkedin" path="https://www.linkedin.com/in/gustav-evensson-bb9547222/"/>
                <standard-link text="github" path="https://github.com/gustav-evensson"/>
                <standard-link text="twitter" path="https://twitter.com/ge_frontend"/>
            </div>
        </div>
        <img ref="bgArt" class="bgArt" src="../assets/bgArt.png" alt="">
	</section>
</template>
