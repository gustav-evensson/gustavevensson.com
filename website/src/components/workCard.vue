<script setup>
const props = defineProps({
    title: String,
    webPath: String,
    gitPath: String,
    imgSrc: String,
    projectDesc: String
});
</script>

<template>
	<div data-aos="fade-up" data-aos-offset="300" class="carouselItem">
		<div class="itemContent">
			<img :src="props.imgSrc" alt="" draggable="false" />
			<div class="itemInfo">
				<div class="textContainer">
					<h3>{{ props.title }}</h3>
					<p>{{ props.projectDesc }}</p>
				</div>
				<div class="actionContainer"></div>
				<div class="itemActions">
					<a v-if="props.gitPath" :href="props.gitPath">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16 3C8.8175 3 3 8.96465 3 16.3288C3 22.2268 6.72125 27.2085 11.8888 28.9745C12.5388 29.0912 12.7825 28.6913 12.7825 28.3414C12.7825 28.0249 12.7663 26.9752 12.7663 25.8589C9.5 26.4754 8.655 25.0425 8.395 24.2928C8.24875 23.9096 7.615 22.7267 7.0625 22.4101C6.6075 22.1602 5.9575 21.5437 7.04625 21.5271C8.07 21.5104 8.80125 22.4934 9.045 22.8933C10.215 24.9092 12.0838 24.3428 12.8313 23.9929C12.945 23.1265 13.2863 22.5434 13.66 22.2102C10.7675 21.8769 7.745 20.7273 7.745 15.6291C7.745 14.1795 8.24875 12.98 9.0775 12.0469C8.9475 11.7137 8.4925 10.3475 9.2075 8.5148C9.2075 8.5148 10.2962 8.16492 12.7825 9.881C13.8225 9.58111 14.9275 9.43116 16.0325 9.43116C17.1375 9.43116 18.2425 9.58111 19.2825 9.881C21.7688 8.14826 22.8575 8.5148 22.8575 8.5148C23.5725 10.3475 23.1175 11.7137 22.9875 12.0469C23.8163 12.98 24.32 14.1629 24.32 15.6291C24.32 20.744 21.2812 21.8769 18.3888 22.2102C18.86 22.6267 19.2663 23.4264 19.2663 24.676C19.2663 26.4587 19.25 27.8916 19.25 28.3414C19.25 28.6913 19.4937 29.1078 20.1438 28.9745C22.7244 28.0812 24.9669 26.3806 26.5556 24.1121C28.1443 21.8437 28.9992 19.1215 29 16.3288C29 8.96465 23.1825 3 16 3Z"
								fill="white"
							/>
						</svg>
						github repo
					</a>
					<a :href="props.wepPath">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M27 12.5V5H19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M18 14L27 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path
								d="M23 18V26C23 26.2652 22.8946 26.5196 22.7071 26.7071C22.5196 26.8946 22.2652 27 22 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V10C5 9.73478 5.10536 9.48043 5.29289 9.29289C5.48043 9.10536 5.73478 9 6 9H14"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						view website
					</a>
				</div>
			</div>
			<div class="mobileContent">
				<h3>{{ props.title }}</h3>
				<div class="mobileItemActions">
					<a v-if="props.gitPath" :href="props.gitPath">
						<svg class="githubLinkIcon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16 3C8.8175 3 3 8.96465 3 16.3288C3 22.2268 6.72125 27.2085 11.8888 28.9745C12.5388 29.0912 12.7825 28.6913 12.7825 28.3414C12.7825 28.0249 12.7663 26.9752 12.7663 25.8589C9.5 26.4754 8.655 25.0425 8.395 24.2928C8.24875 23.9096 7.615 22.7267 7.0625 22.4101C6.6075 22.1602 5.9575 21.5437 7.04625 21.5271C8.07 21.5104 8.80125 22.4934 9.045 22.8933C10.215 24.9092 12.0838 24.3428 12.8313 23.9929C12.945 23.1265 13.2863 22.5434 13.66 22.2102C10.7675 21.8769 7.745 20.7273 7.745 15.6291C7.745 14.1795 8.24875 12.98 9.0775 12.0469C8.9475 11.7137 8.4925 10.3475 9.2075 8.5148C9.2075 8.5148 10.2962 8.16492 12.7825 9.881C13.8225 9.58111 14.9275 9.43116 16.0325 9.43116C17.1375 9.43116 18.2425 9.58111 19.2825 9.881C21.7688 8.14826 22.8575 8.5148 22.8575 8.5148C23.5725 10.3475 23.1175 11.7137 22.9875 12.0469C23.8163 12.98 24.32 14.1629 24.32 15.6291C24.32 20.744 21.2812 21.8769 18.3888 22.2102C18.86 22.6267 19.2663 23.4264 19.2663 24.676C19.2663 26.4587 19.25 27.8916 19.25 28.3414C19.25 28.6913 19.4937 29.1078 20.1438 28.9745C22.7244 28.0812 24.9669 26.3806 26.5556 24.1121C28.1443 21.8437 28.9992 19.1215 29 16.3288C29 8.96465 23.1825 3 16 3Z"
								fill="white"
							/>
						</svg>
						github repo
					</a>
					<a :href="props.webPath">
						<svg class="websiteLinkIcon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M27 12.5V5H19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M18 14L27 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path
								d="M23 18V26C23 26.2652 22.8946 26.5196 22.7071 26.7071C22.5196 26.8946 22.2652 27 22 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V10C5 9.73478 5.10536 9.48043 5.29289 9.29289C5.48043 9.10536 5.73478 9 6 9H14"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						view website
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
