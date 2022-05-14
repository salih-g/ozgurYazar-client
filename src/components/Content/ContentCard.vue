<template>
	<div class="contentCard list-group">
		<div
			class="list-group-item list-group-item-action flex-column align-items-start active"
		>
			<div class="d-flex w-100 justify-content-between">
				<small>{{ $luxon(date) }}</small>
			</div>
			<div class="desc m-3" v-html="content"></div>
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
	color: white;
}
</style>
salla ya div olunca çözüyor nromalde p icinde p ye style ataymiyoz div p ilursa
ouyor ama simdi .desc inicdki p yi ggormuyor idk why bana şu yeter
