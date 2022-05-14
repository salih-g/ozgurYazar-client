<template>
	<section>
		<div class="loader" v-if="Object.keys(section).length === 0"></div>
		<div v-else>
			<h2 class="text-center mb-5" id="title">{{ section.title }}</h2>
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
					@click.native="scrollToTop"
				></b-pagination>
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
			currentPage: 1,
			pages: [],
			rows: 1,
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
			const lineBreaks = content.split(/\r?\n/).filter((element) => element);
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

			// console.log(lineBreaks);
		},
		scrollToTop() {
			document.getElementById('title').scrollIntoView();
		},
	},
};
</script>

<style scoped>
.content {
	width: 60%;
	margin: 0 auto;
}
@media only screen and (max-width: 600px) {
	.content {
		width: 95%;
	}
}
.center {
	display: flex;
	justify-content: center;
}
</style>
