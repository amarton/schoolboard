<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
	import github from '$lib/images/github.svg';
</script>

<header>

	<nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
		<div class="container-fluid">
		    <a class="navbar-brand" href="http://cnsmaryland.org/">
				<img src="{logo}" id="nav-logo"> 
			</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li  class="nav-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/" class="nav-link active">Home</a>
				</li>
			</ul>
		
		  </div>
		</div>
	  </nav>

</header>

