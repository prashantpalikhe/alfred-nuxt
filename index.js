const alfy = require('alfy');
const algoliasearch = require('algoliasearch');
const {last} = require('lodash');

const client = algoliasearch('BH4D9OD16A', 'ff80fbf046ce827f64f06e16f82f1401');
const index = client.initIndex('nuxtjs');

(async () => {
	const {hits} = await index.search({
		query: alfy.input,
		hitsPerPage: 5,
		facetFilters: ['tags:en']
	});

	const output = hits.map(hit => {
		const result = {
			title: hit.anchor,
			subtitle: hit.anchor,
			arg: hit.url,
			quicklookurl: hit.url
		};

		if (hit.hierarchy) {
			const hierarchies = Object.values(hit.hierarchy).filter(Boolean);

			result.title = last(hierarchies);
			result.subtitle = hierarchies.join(' > ');
		}

		return result;
	});

	alfy.output(output);
})();
