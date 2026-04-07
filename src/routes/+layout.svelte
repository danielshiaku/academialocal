<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../global.css';
	import '@fontsource-variable/cabin/wght.css';
	import '@fontsource-variable/roboto-condensed/wght.css';


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
