<template>
	<section class="container">
		<div class="row">
			<div class="col-4">
				<h3>{{ content.title }}</h3>
				<div v-html="content.desc"></div>
			</div>
			<div class="col-8">
				<h3 class="text-center mb-3">Bolumler</h3>
				<h5 class="text-center mb-3" v-if="!content.sections">
					Henüz bölümler yayınlanmadı. Merak etme çok yakında gelicek :)
				</h5>
				<SectionCard
					v-for="(section, key) in content.sections"
					:key="key"
					:sectionId="section._id"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import api from '../api';

import SectionCard from '@/components/Content/SectionCard.vue';

export default {
	name: 'Home',
	components: {
		SectionCard,
	},
	data() {
		return {
			content: {},
		};
	},
	async created() {
		this.content = await api.fetchContentById(this.$route.params.id);
	},
};
</script>

<style scoped>
.content {
	margin: 0 auto;
}
.pages {
	display: flex;
	justify-content: center;
}
</style>
