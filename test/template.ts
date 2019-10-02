import ava from 'ava';
import { TestTimestamp } from './lib/shared';

ava('template(empty)', (test): void => {
	const timestamp = new TestTimestamp('');
	const parsedTemplate = timestamp.getParsedTemplate();
	test.deepEqual(parsedTemplate, []);
});

ava('template(hh:mm:ss)', (test): void => {
	const timestamp = new TestTimestamp('hh:mm:ss');
	const parsedTemplate = timestamp.getParsedTemplate();
	test.deepEqual(parsedTemplate, [{
		content: null,
		type: 'hh'
	}, {
		content: ':',
		type: 'literal'
	}, {
		content: null,
		type: 'mm'
	}, {
		content: ':',
		type: 'literal'
	}, {
		content: null,
		type: 'ss'
	}]);
});

ava('template(hh[ hours, ]mm[ minutes])', (test): void => {
	const timestamp = new TestTimestamp('hh[ hours, ]mm[ minutes]');
	const parsedTemplate = timestamp.getParsedTemplate();
	test.deepEqual(parsedTemplate, [{
		content: null,
		type: 'hh'
	}, {
		content: ' hours, ',
		type: 'literal'
	}, {
		content: null,
		type: 'mm'
	}, {
		content: ' minutes',
		type: 'literal'
	}]);
});
