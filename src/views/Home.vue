<template>
	<div>
		<div class="loader" v-if="contents[0] == null"></div>
		<div v-else>
			<h1 class="text-center mb-5">Son eklenen içeriklerim</h1>
			<div class="home">
				<ItemCard
					v-for="(content, key) in contents"
					:key="key"
					:title="content.title"
					:desc="content.desc"
					:date="content.createdAt"
					:id="content._id"
					class="items"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import api from '../api';

import ItemCard from '@/components/Home/ItemCard.vue';

export default {
	name: 'Home',
	components: {
		ItemCard,
	},
	data() {
		return {
			contents: [],
		};
	},
	async created() {
		this.contents = await api.fetchAllContents();
	},
};
</script>

<style scoped>
.home {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 50px;
}
.items {
	width: 45%;
	max-width: 600px;
}

@media only screen and (max-width: 900px) {
	.items {
		width: 90%;
	}
}
</style>
