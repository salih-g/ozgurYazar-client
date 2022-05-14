<template>
	<div class="contentCard list-group">
		<div
			class="list-group-item list-group-item-action flex-column align-items-start active"
		>
			<div class="d-flex w-100 justify-content-between">
				<div>Sayfa {{ pageNumber }}</div>
			</div>
			<article class="desc m-3">{{ content }}</article>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContentCard',
	props: {
		pageNumber: Number,
		content: String,
	},
};
</script>

<style scoped>
.desc {
	font-style: italic;
	color: white;
	font-weight: 400;
	font-size: 18px;
	line-height: 30px;
	text-align: justify;
	text-justify: inter-word;
	white-space: pre-wrap;
	font-family: 'Roboto Condensed', sans-serif;
}
</style>
