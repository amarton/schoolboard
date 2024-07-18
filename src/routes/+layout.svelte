<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="footer">
  <!-- Footer-->
	<p class="text-center">Copyright 2024 Captial News Service</p>
<!-- end footer-->
</footer>
</div>

<style>
</style>
