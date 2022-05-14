<template>
	<div class="contentCard list-group">
		<div
			class="list-group-item list-group-item-action flex-column align-items-start active"
		>
			<div class="d-flex w-100 justify-content-between">
				<small>{{ date }} days ago</small>
			</div>
			<p class="desc m-3" v-html="content"></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContentCard',
	props: {
		date: String,
		content: String,
	},
};
</script>

<style scoped>
.desc {
	font-style: italic;
	font-weight: 400;
	font-size: 18px;
	font-family: 'Roboto Condensed', sans-serif;
}
</style>
