const alfy = require('alfy');
const algoliasearch = require('algoliasearch');

const client = algoliasearch('BH4D9OD16A', 'ff80fbf046ce827f64f06e16f82f1401');
const index = client.initIndex('nuxtjs');

(async () => {
	const { hits } = await index.search({
		query: alfy.input,
		hitsPerPage: 5,
		facetFilters: ['tags:en']
	});

	const output = hits.map(hit => ({
		title: hit.anchor,
		subtitle: hit.anchor,
		arg: hit.url,
		quicklookurl: hit.url
	}));

	alfy.output(output);
})();
