import ava from 'ava';
import { Timestamp, TimestampTemplateEntry } from '../dist';

function extractParsedTemplate(timestamp: Timestamp): TimestampTemplateEntry[] {
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore 2341
	return timestamp._template;
}

ava('template(empty)', (test): void => {
	const timestamp = new Timestamp('');
	const parsedTemplate = extractParsedTemplate(timestamp);
	test.deepEqual(parsedTemplate, []);
});

ava('template(hh:mm:ss)', (test): void => {
	const timestamp = new Timestamp('hh:mm:ss');
	const parsedTemplate = extractParsedTemplate(timestamp);
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
	const timestamp = new Timestamp('hh[ hours, ]mm[ minutes]');
	const parsedTemplate = extractParsedTemplate(timestamp);
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
