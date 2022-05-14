<template>
	<div class="sectionCard mb-4">
		<div class="list-group">
			<router-link
				:to="`/section/${sectionId}`"
				class="list-group-item list-group-item-action flex-column align-items-start active"
			>
				<div class="d-flex w-100 justify-content-between">
					<h5>{{ section.title }}</h5>
					<small>{{ $luxon(section.createdAt) }}</small>
				</div>
				<picture class="desc">{{ section.conten }}</picture>
			</router-link>
		</div>
	</div>
</template>

<script>
import api from '../../api';

export default {
	name: 'SectionCard',
	props: {
		sectionId: String,
	},
	data() {
		return {
			section: {},
		};
	},
	async created() {
		this.section = await api.fetchSectionById(this.sectionId);
	},
};
</script>

<style scoped>
.sectionCard {
	width: 70%;
	margin: 0 auto;
}
.desc {
	font-style: italic;
	font-weight: 400;
	font-size: 18px;
	font-family: 'Roboto Condensed', sans-serif;
	color: white;

	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
}
</style>
