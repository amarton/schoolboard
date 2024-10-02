<script>
	import LnnLogo from '$lib/images/lnn-logo.jpg';
	import MdiLogo from '$lib/images/mdi-logo.png';
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<div class="logos-container">
		<a href="https://cnsmaryland.org/local-news-network/"><img src="{LnnLogo}" width="80px"></a>	
		<a href="https://spp.umd.edu/research-impact/projects/maryland-democracy-initiative"><img src="{MdiLogo}" width="250px"></a>	
	</div>
	<footer class="footer">
  <!-- Footer-->
	<p class="text-center">Copyright 2024 Captial News Service</p>
<!-- end footer-->
</footer>
</div>

<style>
</style>
