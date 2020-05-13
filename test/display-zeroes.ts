import ava from 'ava';
import { Timestamp } from '../dist';

// Saturday 9th March 2019, at 0:00:00:000
const date = new Date(2019, 2, 9, 0, 0, 0, 0);

ava('display-zeroes(H)', (test): void => {
	const timestamp = new Timestamp('H');
	const formatted = timestamp.display(date);
	test.is(formatted, '0');
});

ava('display-zeroes(HH)', (test): void => {
	const timestamp = new Timestamp('HH');
	const formatted = timestamp.display(date);
	test.is(formatted, '00');
});

ava('display-zeroes(h)', (test): void => {
	const timestamp = new Timestamp('h');
	const formatted = timestamp.display(date);
	test.is(formatted, '12');
});

ava('display-zeroes(hh)', (test): void => {
	const timestamp = new Timestamp('hh');
	const formatted = timestamp.display(date);
	test.is(formatted, '12');
});

ava('display-zeroes(a)', (test): void => {
	const timestamp = new Timestamp('a');
	const formatted = timestamp.display(date);
	test.is(formatted, 'am');
});

ava('display-zeroes(A)', (test): void => {
	const timestamp = new Timestamp('A');
	const formatted = timestamp.display(date);
	test.is(formatted, 'AM');
});

ava('display-zeroes(T)', (test): void => {
	const timestamp = new Timestamp('T');
	const formatted = timestamp.display(date);
	test.is(formatted, '12:00 AM');
});

ava('display-zeroes(t)', (test): void => {
	const timestamp = new Timestamp('t');
	const formatted = timestamp.display(date);
	test.is(formatted, '12:00:00 am');
});

ava('display-zeroes(LLL)', (test): void => {
	const timestamp = new Timestamp('LLL');
	const formatted = timestamp.display(date);
	test.is(formatted, 'March 09, 2019 12:00 AM');
});

ava('display-zeroes(lll)', (test): void => {
	const timestamp = new Timestamp('lll');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Mar 09, 2019 12:00 AM');
});

ava('display-zeroes(LLLL)', (test): void => {
	const timestamp = new Timestamp('LLLL');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Saturday, March 09, 2019 12:00 AM');
});

ava('display-zeroes(llll)', (test): void => {
	const timestamp = new Timestamp('llll');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Sat Mar 09, 2019 12:00 AM');
});

ava('display-zeroes-number-overload(LLLL)', (test): void => {
	const timestamp = new Timestamp('LLLL');
	const formatted = timestamp.display(date.valueOf());
	test.is(formatted, 'Saturday, March 09, 2019 12:00 AM');
});

ava('display-zeroes-string-overload(LLLL)', (test): void => {
	const timestamp = new Timestamp('LLLL');
	const formatted = timestamp.display(date.toUTCString());
	test.is(formatted, 'Saturday, March 09, 2019 12:00 AM');
});

ava('display-zeroes(hh:mm:ss)', (test): void => {
	const timestamp = new Timestamp('hh:mm:ss');
	const formatted = timestamp.display(date);
	test.is(formatted, '12:00:00');
});

ava('display-zeroes(hh[ hours, ]mm[ minutes])', (test): void => {
	const timestamp = new Timestamp('hh[ hours, ]mm[ minutes]');
	const formatted = timestamp.display(date);
	test.is(formatted, '12 hours, 00 minutes');
});
