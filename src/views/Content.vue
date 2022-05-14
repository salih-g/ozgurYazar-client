<template>
	<section>
		<h2 class="text-center mb-5">{{ section.title }}</h2>
		<div class="content">
			<ContentCard
				class="mb-5"
				v-for="(page, key) in pages"
				:content="page"
				:pageNumber="key + 1"
				:key="key"
			/>
			<!-- <div class="pages">
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
			</div> -->
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

			pages: [],
		};
	},
	async mounted() {
		this.section = await api.fetchSectionById(this.$route.params.id);
		this.splitPage();
	},

	methods: {
		splitPage() {
			const content = this.section.content;
			const splitContent = content.split(' ');
			let pageCount = 0;

			for (let i = 0; i <= splitContent.length / 500; i++) {
				this.pages[pageCount] = '';
				for (let j = 0; j < 500; j++) {
					this.pages[pageCount] += splitContent[j] + ' ';
				}
				pageCount++;
			}
		},
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
