import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore(
	'theme',
	() => {
		const isDarkMode = ref(true);
		function switchTheme(value) {
			isDarkMode.value = !isDarkMode.value;
		}
		return { isDarkMode, switchTheme };
	},
	{ persist: true }
);
