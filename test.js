import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('async data');

	t.deepEqual(result[0], {
		title: 'Async Data',
		subtitle: 'Examples > Advanced > Async Data',
		arg: 'https://nuxtjs.org/examples/async-data#codefund_ad',
		quicklookurl: 'https://nuxtjs.org/examples/async-data#codefund_ad'
	});
});
