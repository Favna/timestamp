import ava from 'ava';
import { TestTimestamp } from './lib/shared';

// Saturday 9th March 2019, at 16:20:35:500
const date = new Date(2019, 2, 9, 16, 20, 35, 1);

ava('display(empty)', (test): void => {
	const timestamp = new TestTimestamp('');
	const formatted = timestamp.display(date);
	test.deepEqual(formatted, '');
});

ava('display(Y)', (test): void => {
	const timestamp = new TestTimestamp('Y');
	const formatted = timestamp.display(date);
	test.is(formatted, '19');
});

ava('display(YY)', (test): void => {
	const timestamp = new TestTimestamp('YY');
	const formatted = timestamp.display(date);
	test.is(formatted, '19');
});

ava('display(YYY)', (test): void => {
	const timestamp = new TestTimestamp('YYY');
	const formatted = timestamp.display(date);
	test.is(formatted, '2019');
});

ava('display(YYYY)', (test): void => {
	const timestamp = new TestTimestamp('YYYY');
	const formatted = timestamp.display(date);
	test.is(formatted, '2019');
});

ava('display(Q)', (test): void => {
	const timestamp = new TestTimestamp('Q');
	const formatted = timestamp.display(date);
	test.is(formatted, '1');
});

ava('display(M)', (test): void => {
	const timestamp = new TestTimestamp('M');
	const formatted = timestamp.display(date);
	test.is(formatted, '3');
});

ava('display(MM)', (test): void => {
	const timestamp = new TestTimestamp('MM');
	const formatted = timestamp.display(date);
	test.is(formatted, '03');
});

ava('display(MMM)', (test): void => {
	const timestamp = new TestTimestamp('MMM');
	const formatted = timestamp.display(date);
	test.is(formatted, 'March');
});

ava('display(MMMM)', (test): void => {
	const timestamp = new TestTimestamp('MMMM');
	const formatted = timestamp.display(date);
	test.is(formatted, 'March');
});

ava('display(D)', (test): void => {
	const timestamp = new TestTimestamp('D');
	const formatted = timestamp.display(date);
	test.is(formatted, '9');
});

ava('display(DD)', (test): void => {
	const timestamp = new TestTimestamp('DD');
	const formatted = timestamp.display(date);
	test.is(formatted, '09');
});

// Seems to be broken, figure out why later.
ava.skip('display(DDD)', (test): void => {
	const timestamp = new TestTimestamp('DDD');
	const formatted = timestamp.display(date);
	test.is(formatted, '0');
});

// Seems to be broken, figure out why later.
ava.skip('display(DDDD)', (test): void => {
	const timestamp = new TestTimestamp('DDDD');
	const formatted = timestamp.display(date);
	test.is(formatted, '0');
});

ava('display(d)', (test): void => {
	const timestamp = new TestTimestamp('d');
	const formatted = timestamp.display(date);
	test.is(formatted, '9th');
});

ava('display(dd)', (test): void => {
	const timestamp = new TestTimestamp('dd');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Sa');
});

ava('display(ddd)', (test): void => {
	const timestamp = new TestTimestamp('ddd');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Sat');
});

ava('display(dddd)', (test): void => {
	const timestamp = new TestTimestamp('dddd');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Saturday');
});

ava('display(X)', (test): void => {
	const timestamp = new TestTimestamp('X');
	const formatted = timestamp.display(date);
	test.is(formatted, '1552144835.001');
});

ava('display(x)', (test): void => {
	const timestamp = new TestTimestamp('x');
	const formatted = timestamp.display(date);
	test.is(formatted, '1552144835001');
});

ava('display(H)', (test): void => {
	const timestamp = new TestTimestamp('H');
	const formatted = timestamp.display(date);
	test.is(formatted, '16');
});

ava('display(HH)', (test): void => {
	const timestamp = new TestTimestamp('HH');
	const formatted = timestamp.display(date);
	test.is(formatted, '16');
});

ava('display(h)', (test): void => {
	const timestamp = new TestTimestamp('h');
	const formatted = timestamp.display(date);
	test.is(formatted, '4');
});

ava('display(hh)', (test): void => {
	const timestamp = new TestTimestamp('hh');
	const formatted = timestamp.display(date);
	test.is(formatted, '04');
});

ava('display(a)', (test): void => {
	const timestamp = new TestTimestamp('a');
	const formatted = timestamp.display(date);
	test.is(formatted, 'pm');
});

ava('display(A)', (test): void => {
	const timestamp = new TestTimestamp('A');
	const formatted = timestamp.display(date);
	test.is(formatted, 'PM');
});

ava('display(m)', (test): void => {
	const timestamp = new TestTimestamp('m');
	const formatted = timestamp.display(date);
	test.is(formatted, '20');
});

ava('display(mm)', (test): void => {
	const timestamp = new TestTimestamp('mm');
	const formatted = timestamp.display(date);
	test.is(formatted, '20');
});

ava('display(s)', (test): void => {
	const timestamp = new TestTimestamp('s');
	const formatted = timestamp.display(date);
	test.is(formatted, '35');
});

ava('display(ss)', (test): void => {
	const timestamp = new TestTimestamp('ss');
	const formatted = timestamp.display(date);
	test.is(formatted, '35');
});

ava('display(S)', (test): void => {
	const timestamp = new TestTimestamp('S');
	const formatted = timestamp.display(date);
	test.is(formatted, '1');
});

ava('display(SS)', (test): void => {
	const timestamp = new TestTimestamp('SS');
	const formatted = timestamp.display(date);
	test.is(formatted, '01');
});

ava('display(SSS)', (test): void => {
	const timestamp = new TestTimestamp('SSS');
	const formatted = timestamp.display(date);
	test.is(formatted, '001');
});

ava('display(T)', (test): void => {
	const timestamp = new TestTimestamp('T');
	const formatted = timestamp.display(date);
	test.is(formatted, '4:20 PM');
});

ava('display(t)', (test): void => {
	const timestamp = new TestTimestamp('t');
	const formatted = timestamp.display(date);
	test.is(formatted, '4:20:35 pm');
});

ava('display(L)', (test): void => {
	const timestamp = new TestTimestamp('L');
	const formatted = timestamp.display(date);
	test.is(formatted, '03/09/2019');
});

ava('display(l)', (test): void => {
	const timestamp = new TestTimestamp('l');
	const formatted = timestamp.display(date);
	test.is(formatted, '3/09/2019');
});

ava('display(LL)', (test): void => {
	const timestamp = new TestTimestamp('LL');
	const formatted = timestamp.display(date);
	test.is(formatted, 'March 09, 2019');
});

ava('display(ll)', (test): void => {
	const timestamp = new TestTimestamp('ll');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Mar 09, 2019');
});

ava('display(LLL)', (test): void => {
	const timestamp = new TestTimestamp('LLL');
	const formatted = timestamp.display(date);
	test.is(formatted, 'March 09, 2019 4:20 PM');
});

ava('display(lll)', (test): void => {
	const timestamp = new TestTimestamp('lll');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Mar 09, 2019 4:20 PM');
});

ava('display(LLLL)', (test): void => {
	const timestamp = new TestTimestamp('LLLL');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Saturday, March 09, 2019 4:20 PM');
});

ava('display(llll)', (test): void => {
	const timestamp = new TestTimestamp('llll');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Sat Mar 09, 2019 4:20 PM');
});

// Timezone sensitive, figure out how to test this later.
ava.skip('display(Z)', (test): void => {
	const timestamp = new TestTimestamp('Z');
	const formatted = timestamp.display(date);
	test.is(formatted, '-02:00');
});

// Timezone sensitive, figure out how to test this later.
ava.skip('display(ZZ)', (test): void => {
	const timestamp = new TestTimestamp('ZZ');
	const formatted = timestamp.display(date);
	test.is(formatted, '-02:00');
});

ava('display(hh:mm:ss)', (test): void => {
	const timestamp = new TestTimestamp('hh:mm:ss');
	const formatted = timestamp.display(date);
	test.is(formatted, '04:20:35');
});

ava('display(hh[ hours, ]mm[ minutes])', (test): void => {
	const timestamp = new TestTimestamp('hh[ hours, ]mm[ minutes]');
	const formatted = timestamp.display(date);
	test.is(formatted, '04 hours, 20 minutes');
});
