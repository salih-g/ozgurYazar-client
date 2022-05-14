<template>
	<section>
		<h2 class="text-center mb-5">{{ section.title }}</h2>
		<div class="content">
			<ContentCard
				class="mb-5"
				:date="section.createdAt"
				:content="section.content"
			/>
			<div class="pages">
				<ul class="pagination pagination-lg pages">
					<li class="page-item disabled">
						<a class="page-link" href="#">&laquo;</a>
					</li>
					<li class="page-item active">
						<a class="page-link" href="#">1</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">2</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">3</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">4</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">5</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">&raquo;</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import api from '../api';
import ContentCard from '@/components/Content/ContentCard.vue';

export default {
	name: 'Home',
	components: {
		ContentCard,
	},
	data() {
		return {
			section: {},
		};
	},
	async created() {
		this.section = await api.fetchSectionById(this.$route.params.id);
		console.log(this.section);
	},
};
</script>

<style scoped>
.content {
	width: 80%;
	margin: 0 auto;
}
.pages {
	display: flex;
	justify-content: center;
}
</style>
