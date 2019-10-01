import ava from 'ava';
import { TestTimestamp } from './lib/shared';

ava('basic', (test): void => {
	const timestamp = new TestTimestamp('');
	const parsedTemplate = timestamp.getParsedTemplate();
	test.is(parsedTemplate.length, 0);
});
