<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
		<div class="container-fluid">
			<div class="navbar-brand">Özgür Yazar</div>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<router-link class="nav-link active" to="/"
							>Kitaplar {{ '&' }} Hikayeler
							<span class="visually-hidden">(current)</span>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/about">Ben kimim ? </router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
	props: {},
};
</script>

<style scoped></style>
