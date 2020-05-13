import ava from 'ava';
import { Timestamp } from '../dist';

// Saturday 9th March 2019, at 16:20:35:500
const date = new Date(2019, 2, 9, 16, 20, 35, 1);

ava('display-morning(H)', (test): void => {
	const timestamp = new Timestamp('H');
	const formatted = timestamp.display(date);
	test.is(formatted, '16');
});

ava('display-morning(HH)', (test): void => {
	const timestamp = new Timestamp('HH');
	const formatted = timestamp.display(date);
	test.is(formatted, '16');
});

ava('display-morning(h)', (test): void => {
	const timestamp = new Timestamp('h');
	const formatted = timestamp.display(date);
	test.is(formatted, '4');
});

ava('display-morning(hh)', (test): void => {
	const timestamp = new Timestamp('hh');
	const formatted = timestamp.display(date);
	test.is(formatted, '04');
});

ava('display-morning(a)', (test): void => {
	const timestamp = new Timestamp('a');
	const formatted = timestamp.display(date);
	test.is(formatted, 'pm');
});

ava('display-morning(A)', (test): void => {
	const timestamp = new Timestamp('A');
	const formatted = timestamp.display(date);
	test.is(formatted, 'PM');
});

ava('display-morning(T)', (test): void => {
	const timestamp = new Timestamp('T');
	const formatted = timestamp.display(date);
	test.is(formatted, '4:20 PM');
});

ava('display-morning(t)', (test): void => {
	const timestamp = new Timestamp('t');
	const formatted = timestamp.display(date);
	test.is(formatted, '4:20:35 pm');
});

ava('display-morning(LLL)', (test): void => {
	const timestamp = new Timestamp('LLL');
	const formatted = timestamp.display(date);
	test.is(formatted, 'March 09, 2019 4:20 PM');
});

ava('display-morning(lll)', (test): void => {
	const timestamp = new Timestamp('lll');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Mar 09, 2019 4:20 PM');
});

ava('display-morning(LLLL)', (test): void => {
	const timestamp = new Timestamp('LLLL');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Saturday, March 09, 2019 4:20 PM');
});

ava('display-morning(llll)', (test): void => {
	const timestamp = new Timestamp('llll');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Sat Mar 09, 2019 4:20 PM');
});

ava('display-number-overload(LLLL)', (test): void => {
	const timestamp = new Timestamp('LLLL');
	const formatted = timestamp.display(date.valueOf());
	test.is(formatted, 'Saturday, March 09, 2019 4:20 PM');
});

ava('display-string-overload(LLLL)', (test): void => {
	const timestamp = new Timestamp('LLLL');
	const formatted = timestamp.display(date.toUTCString());
	test.is(formatted, 'Saturday, March 09, 2019 4:20 PM');
});

ava('display-morning(hh:mm:ss)', (test): void => {
	const timestamp = new Timestamp('hh:mm:ss');
	const formatted = timestamp.display(date);
	test.is(formatted, '04:20:35');
});

ava('display-morning(hh[ hours, ]mm[ minutes])', (test): void => {
	const timestamp = new Timestamp('hh[ hours, ]mm[ minutes]');
	const formatted = timestamp.display(date);
	test.is(formatted, '04 hours, 20 minutes');
});
