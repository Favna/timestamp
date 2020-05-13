import ava from 'ava';
import { Timestamp } from '../dist';

// Saturday 9th March 2019, at 16:20:35:500
const date = new Date(2019, 2, 9, 16, 20, 35, 1);

ava('display(empty)', (test): void => {
	const timestamp = new Timestamp('');
	const formatted = timestamp.display(date);
	test.deepEqual(formatted, '');
});

ava('display(Y)', (test): void => {
	const timestamp = new Timestamp('Y');
	const formatted = timestamp.display(date);
	test.is(formatted, '19');
});

ava('display(YY)', (test): void => {
	const timestamp = new Timestamp('YY');
	const formatted = timestamp.display(date);
	test.is(formatted, '19');
});

ava('display(YYY)', (test): void => {
	const timestamp = new Timestamp('YYY');
	const formatted = timestamp.display(date);
	test.is(formatted, '2019');
});

ava('display(YYYY)', (test): void => {
	const timestamp = new Timestamp('YYYY');
	const formatted = timestamp.display(date);
	test.is(formatted, '2019');
});

ava('display(Q)', (test): void => {
	const timestamp = new Timestamp('Q');
	const formatted = timestamp.display(date);
	test.is(formatted, '1');
});

ava('display(M)', (test): void => {
	const timestamp = new Timestamp('M');
	const formatted = timestamp.display(date);
	test.is(formatted, '3');
});

ava('display(MM)', (test): void => {
	const timestamp = new Timestamp('MM');
	const formatted = timestamp.display(date);
	test.is(formatted, '03');
});

ava('display(MMM)', (test): void => {
	const timestamp = new Timestamp('MMM');
	const formatted = timestamp.display(date);
	test.is(formatted, 'March');
});

ava('display(MMMM)', (test): void => {
	const timestamp = new Timestamp('MMMM');
	const formatted = timestamp.display(date);
	test.is(formatted, 'March');
});

ava('display(D)', (test): void => {
	const timestamp = new Timestamp('D');
	const formatted = timestamp.display(date);
	test.is(formatted, '9');
});

ava('display(DD)', (test): void => {
	const timestamp = new Timestamp('DD');
	const formatted = timestamp.display(date);
	test.is(formatted, '09');
});

ava('display(DDD)', (test): void => {
	const timestamp = new Timestamp('DDD');
	const formatted = timestamp.display(date);
	test.is(formatted, '68');
});

ava('display(DDDD)', (test): void => {
	const timestamp = new Timestamp('DDDD');
	const formatted = timestamp.display(date);
	test.is(formatted, '68');
});

ava('display(d)', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.display(date);
	test.is(formatted, '9th');
});

ava('display(dd)', (test): void => {
	const timestamp = new Timestamp('dd');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Sa');
});

ava('display(ddd)', (test): void => {
	const timestamp = new Timestamp('ddd');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Sat');
});

ava('display(dddd)', (test): void => {
	const timestamp = new Timestamp('dddd');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Saturday');
});

ava('display(X)', (test): void => {
	const timestamp = new Timestamp('X');
	const formatted = timestamp.display(date);
	test.is(formatted, (date.getTime() / 1000).toString());
});

ava('display(x)', (test): void => {
	const timestamp = new Timestamp('x');
	const formatted = timestamp.display(date);
	test.is(formatted, date.getTime().toString());
});

ava('display(H)', (test): void => {
	const timestamp = new Timestamp('H');
	const formatted = timestamp.display(date);
	test.is(formatted, '16');
});

ava('display(HH)', (test): void => {
	const timestamp = new Timestamp('HH');
	const formatted = timestamp.display(date);
	test.is(formatted, '16');
});

ava('display(h)', (test): void => {
	const timestamp = new Timestamp('h');
	const formatted = timestamp.display(date);
	test.is(formatted, '4');
});

ava('display(hh)', (test): void => {
	const timestamp = new Timestamp('hh');
	const formatted = timestamp.display(date);
	test.is(formatted, '04');
});

ava('display(a)', (test): void => {
	const timestamp = new Timestamp('a');
	const formatted = timestamp.display(date);
	test.is(formatted, 'pm');
});

ava('display(A)', (test): void => {
	const timestamp = new Timestamp('A');
	const formatted = timestamp.display(date);
	test.is(formatted, 'PM');
});

ava('display(m)', (test): void => {
	const timestamp = new Timestamp('m');
	const formatted = timestamp.display(date);
	test.is(formatted, '20');
});

ava('display(mm)', (test): void => {
	const timestamp = new Timestamp('mm');
	const formatted = timestamp.display(date);
	test.is(formatted, '20');
});

ava('display(s)', (test): void => {
	const timestamp = new Timestamp('s');
	const formatted = timestamp.display(date);
	test.is(formatted, '35');
});

ava('display(ss)', (test): void => {
	const timestamp = new Timestamp('ss');
	const formatted = timestamp.display(date);
	test.is(formatted, '35');
});

ava('display(S)', (test): void => {
	const timestamp = new Timestamp('S');
	const formatted = timestamp.display(date);
	test.is(formatted, '1');
});

ava('display(SS)', (test): void => {
	const timestamp = new Timestamp('SS');
	const formatted = timestamp.display(date);
	test.is(formatted, '01');
});

ava('display(SSS)', (test): void => {
	const timestamp = new Timestamp('SSS');
	const formatted = timestamp.display(date);
	test.is(formatted, '001');
});

ava('display(T)', (test): void => {
	const timestamp = new Timestamp('T');
	const formatted = timestamp.display(date);
	test.is(formatted, '4:20 PM');
});

ava('display(t)', (test): void => {
	const timestamp = new Timestamp('t');
	const formatted = timestamp.display(date);
	test.is(formatted, '4:20:35 pm');
});

ava('display(L)', (test): void => {
	const timestamp = new Timestamp('L');
	const formatted = timestamp.display(date);
	test.is(formatted, '03/09/2019');
});

ava('display(l)', (test): void => {
	const timestamp = new Timestamp('l');
	const formatted = timestamp.display(date);
	test.is(formatted, '3/09/2019');
});

ava('display(LL)', (test): void => {
	const timestamp = new Timestamp('LL');
	const formatted = timestamp.display(date);
	test.is(formatted, 'March 09, 2019');
});

ava('display(ll)', (test): void => {
	const timestamp = new Timestamp('ll');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Mar 09, 2019');
});

ava('display(LLL)', (test): void => {
	const timestamp = new Timestamp('LLL');
	const formatted = timestamp.display(date);
	test.is(formatted, 'March 09, 2019 4:20 PM');
});

ava('display(lll)', (test): void => {
	const timestamp = new Timestamp('lll');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Mar 09, 2019 4:20 PM');
});

ava('display(LLLL)', (test): void => {
	const timestamp = new Timestamp('LLLL');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Saturday, March 09, 2019 4:20 PM');
});

ava('display(llll)', (test): void => {
	const timestamp = new Timestamp('llll');
	const formatted = timestamp.display(date);
	test.is(formatted, 'Sat Mar 09, 2019 4:20 PM');
});

ava('display-morning(Z)', (test): void => {
	const timestamp = new Timestamp('Z');
	const formatted = timestamp.display(date);

	const offset = date.getTimezoneOffset();
	const unsigned = offset >= 0, absolute = Math.abs(offset);
	const expected = `${unsigned ? '+' : '-'}${String(Math.floor(absolute / 60)).padStart(2, '0')}:${String(absolute % 60).padStart(2, '0')}`;
	test.is(formatted, expected);
});

ava('display-morning(ZZ)', (test): void => {
	const timestamp = new Timestamp('ZZ');
	const formatted = timestamp.display(date);

	const offset = date.getTimezoneOffset();
	const unsigned = offset >= 0, absolute = Math.abs(offset);
	const expected = `${unsigned ? '+' : '-'}${String(Math.floor(absolute / 60)).padStart(2, '0')}:${String(absolute % 60).padStart(2, '0')}`;
	test.is(formatted, expected);
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

ava('display(hh:mm:ss)', (test): void => {
	const timestamp = new Timestamp('hh:mm:ss');
	const formatted = timestamp.display(date);
	test.is(formatted, '04:20:35');
});

ava('display(hh[ hours, ]mm[ minutes])', (test): void => {
	const timestamp = new Timestamp('hh[ hours, ]mm[ minutes]');
	const formatted = timestamp.display(date);
	test.is(formatted, '04 hours, 20 minutes');
});

ava('display(d) [day: 01]', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.display(new Date(2019, 2, 1, 16, 20, 35, 1));
	test.is(formatted, '1st');
});

ava('display(d) [day: 11]', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.display(new Date(2019, 2, 11, 16, 20, 35, 1));
	test.is(formatted, '11th');
});

ava('display(d) [day: 21]', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.display(new Date(2019, 2, 21, 16, 20, 35, 1));
	test.is(formatted, '21st');
});

ava('display(d) [day: 02]', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.display(new Date(2019, 2, 2, 16, 20, 35, 1));
	test.is(formatted, '2nd');
});

ava('display(d) [day: 12]', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.display(new Date(2019, 2, 12, 16, 20, 35, 1));
	test.is(formatted, '12th');
});

ava('display(d) [day: 22]', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.display(new Date(2019, 2, 22, 16, 20, 35, 1));
	test.is(formatted, '22nd');
});

ava('display(d) [day: 03]', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.display(new Date(2019, 2, 3, 16, 20, 35, 1));
	test.is(formatted, '3rd');
});

ava('display(d) [day: 13]', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.display(new Date(2019, 2, 13, 16, 20, 35, 1));
	test.is(formatted, '13th');
});

ava('display(d) [day: 23]', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.display(new Date(2019, 2, 23, 16, 20, 35, 1));
	test.is(formatted, '23rd');
});

ava('display-toString(H:m)', (test): void => {
	const timestamp = new Timestamp('H:m');
	const localDate = new Date();
	test.is(timestamp.toString(), `${localDate.getHours()}:${localDate.getMinutes()}`);
});

ava('display-arbitrary-default(H:m)', (test): void => {
	const formatted = Timestamp.displayArbitrary('H:m');
	const localDate = new Date();
	test.is(formatted, `${localDate.getHours()}:${localDate.getMinutes()}`);
});

ava('display-arbitrary-date-overload(LLLL)', (test): void => {
	const formatted = Timestamp.displayArbitrary('LLLL', date.valueOf());
	test.is(formatted, 'Saturday, March 09, 2019 4:20 PM');
});

ava('display-arbitrary-number-overload(LLLL)', (test): void => {
	const formatted = Timestamp.displayArbitrary('LLLL', date.valueOf());
	test.is(formatted, 'Saturday, March 09, 2019 4:20 PM');
});

ava('display-arbitrary-string-overload(LLLL)', (test): void => {
	const formatted = Timestamp.displayArbitrary('LLLL', date.toUTCString());
	test.is(formatted, 'Saturday, March 09, 2019 4:20 PM');
});
