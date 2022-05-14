<template>
	<section>
		<h2 class="text-center mb-5">{{ section.title }}</h2>
		<div class="content">
			<ContentCard
				class="mb-5"
				:content="pages[currentPage - 1]"
				:pageNumber="currentPage"
			/>
			<b-pagination
				class="center"
				v-model="currentPage"
				:total-rows="rows"
				:per-page="1"
				aria-controls="my-table"
			></b-pagination>
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
			currentPage: 1,
			pages: [],
			rows: 2,
		};
	},
	async mounted() {
		this.section = await api.fetchSectionById(this.$route.params.id);
		this.splitPage();
		this.rows = this.pages.length;
	},

	methods: {
		splitPage() {
			const content = this.section.content;
			const splitContent = content.split(' ');
			let pageCount = 0;

			for (let i = 0; i <= splitContent.length / 500; i++) {
				this.pages[pageCount] = '';
				for (let j = i * 500; j < 500 + i * 500; j++) {
					if (splitContent[j]) {
						this.pages[pageCount] += splitContent[j] + ' ';
					}
				}
				pageCount++;
			}
		},
		//page 1 de 0 page 2 de 500 den başlıcak
	},
};
</script>

<style scoped>
.content {
	width: 60%;
	margin: 0 auto;
}
.center {
	display: flex;
	justify-content: center;
}
</style>
