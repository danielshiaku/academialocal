<script>
    import Credits from '$lib/Credits.svelte';
    import Footer from '$lib/Footer.svelte';
    import Header from '$lib/Header.svelte';
	import '../global.css';
	import '@fontsource-variable/cabin/wght.css';
	import '@fontsource-variable/roboto-condensed/wght.css';


	let { children } = $props();
</script>

<div class="layout">
	<div class="main">
		{@render children()}
	</div>
	<div class="footer__container">
		<Footer/>
	</div>
	<div class="credits__container">
		<Credits/>
	</div>
</div>

<style>
	.layout{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.footer__container{
		margin-bottom: auto;
	}
	.credits__container{
		margin-bottom: -70px;
	}
</style>

