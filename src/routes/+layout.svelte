<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
	
	// Keep track of the current path for transition key
	const currentPath = $derived($page.url.pathname);
	
	function getActivePage(path: string): string {
		if (path === '/') return 'home';
		if (path.startsWith('/track')) return 'track';
		if (path.startsWith('/about')) return 'about';
		if (path.startsWith('/contact')) return 'contact';
		if (path.startsWith('/components')) return 'components';
		return 'home';
	}
</script>

{#key currentPath}
	<div class="page-wrapper">
		<Header activePage={getActivePage($page.url.pathname)} />
		{@render children()}
	</div>
{/key}

<style>
	.page-wrapper :global(header) {
		/* Keep the header outside the animation effect */
		position: sticky;
		top: 0;
		z-index: 50;
		transition: all 0.3s ease;
	}

	.page-wrapper :global(main) {
		transform-origin: top center;
		animation: page-hover-up 0.5s ease-out forwards;
	}
	
	@keyframes page-hover-up {
		0% {
			opacity: 0;
			transform: translateY(40px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
