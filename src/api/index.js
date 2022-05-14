import axios from './axios';

export default {
	fetchAllContents: async () => {
		return await axios()
			.get('/contents')
			.then((r) => {
				console.log(r.data);
				return r.data;
			});
	},

	fetchContentById: async (id) => {
		return await axios()
			.get(`/contents/${id}`)
			.then((r) => {
				return r.data;
			});
	},

	fetchSectionById: async (id) => {
		return await axios()
			.get(`/sections/${id}`)
			.then((r) => {
				return r.data;
			});
	},
};
