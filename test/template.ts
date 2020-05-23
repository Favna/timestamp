import ava from 'ava';
import { Timestamp, TimestampTemplateEntry } from '../src';

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

ava('template(llllll)', (test): void => {
	const timestamp = new Timestamp('llllll');
	const parsedTemplate = extractParsedTemplate(timestamp);
	test.deepEqual(parsedTemplate, [{
		content: null,
		type: 'llll'
	}, {
		content: null,
		type: 'll'
	}]);
});

ava('template-edit(llllll -> llll)', (test): void => {
	test.plan(3);

	const timestamp = new Timestamp('llllll');
	const parsedTemplate = extractParsedTemplate(timestamp);
	test.deepEqual(parsedTemplate, [{
		content: null,
		type: 'llll'
	}, {
		content: null,
		type: 'll'
	}]);

	test.is(timestamp.edit('llll'), timestamp);

	const editedParsedTemplate = extractParsedTemplate(timestamp);
	test.deepEqual(editedParsedTemplate, [{
		content: null,
		type: 'llll'
	}]);
});

// You'll probably wonder why did I put "kaira" as written in Japanese, but it's
// because I couldn't think of characters that are guaranteed not to be
// supported in the foreseeable future.
ava('template(カイラ)', (test): void => {
	const timestamp = new Timestamp('カイラ');
	const parsedTemplate = extractParsedTemplate(timestamp);
	test.deepEqual(parsedTemplate, [{
		content: 'カイラ',
		type: 'literal'
	}]);
});

ava('template(][)', (test): void => {
	const timestamp = new Timestamp('][');
	const parsedTemplate = extractParsedTemplate(timestamp);
	test.deepEqual(parsedTemplate, [{
		content: ']',
		type: 'literal'
	}, {
		content: '[',
		type: 'literal'
	}]);
});
