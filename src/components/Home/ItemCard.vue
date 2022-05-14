<template>
	<div class="mb-4">
		<div class="list-group">
			<router-link
				:to="`/content/${id}`"
				class="list-group-item list-group-item-action flex-column align-items-start active"
			>
				<div class="d-flex w-100 justify-content-between">
					<h5>{{ title }}</h5>
					<small> {{ $luxon(date) }}</small>
				</div>
				<div class="desc" v-html="desc"></div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ItemCard',
	props: {
		date: String,
		title: String,
		desc: String,
		id: String,
	},
};
</script>

<style scoped>
.desc {
	font-style: italic;
	font-weight: 400;
	font-size: 18px;
	font-family: 'Roboto Condensed', sans-serif;
	overflow: hidden;
	color: white;
	display: -webkit-box;
	-webkit-line-clamp: 10;
	-webkit-box-orient: vertical;
}
</style>
