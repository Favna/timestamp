import ava from 'ava';
import { Timestamp } from '../dist';

// Saturday 9th March 2019, at 16:20:35:500 (UTC)
const localTime = new Date(2019, 2, 9, 16, 20, 35, 1);
const date = new Date(localTime.getTime() - (localTime.getTimezoneOffset() * 60000));

ava('displayUTC(empty)', (test): void => {
	const timestamp = new Timestamp('');
	const formatted = timestamp.displayUTC(date);
	test.deepEqual(formatted, '');
});

ava('displayUTC(Y)', (test): void => {
	const timestamp = new Timestamp('Y');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '19');
});

ava('displayUTC(YY)', (test): void => {
	const timestamp = new Timestamp('YY');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '19');
});

ava('displayUTC(YYY)', (test): void => {
	const timestamp = new Timestamp('YYY');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '2019');
});

ava('displayUTC(YYYY)', (test): void => {
	const timestamp = new Timestamp('YYYY');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '2019');
});

ava('displayUTC(Q)', (test): void => {
	const timestamp = new Timestamp('Q');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '1');
});

ava('displayUTC(M)', (test): void => {
	const timestamp = new Timestamp('M');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '3');
});

ava('displayUTC(MM)', (test): void => {
	const timestamp = new Timestamp('MM');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '03');
});

ava('displayUTC(MMM)', (test): void => {
	const timestamp = new Timestamp('MMM');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'March');
});

ava('displayUTC(MMMM)', (test): void => {
	const timestamp = new Timestamp('MMMM');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'March');
});

ava('displayUTC(D)', (test): void => {
	const timestamp = new Timestamp('D');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '9');
});

ava('displayUTC(DD)', (test): void => {
	const timestamp = new Timestamp('DD');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '09');
});

ava('displayUTC(DDD)', (test): void => {
	const timestamp = new Timestamp('DDD');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '68');
});

ava('displayUTC(DDDD)', (test): void => {
	const timestamp = new Timestamp('DDDD');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '68');
});

ava('displayUTC(d)', (test): void => {
	const timestamp = new Timestamp('d');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '9th');
});

ava('displayUTC(dd)', (test): void => {
	const timestamp = new Timestamp('dd');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'Sa');
});

ava('displayUTC(ddd)', (test): void => {
	const timestamp = new Timestamp('ddd');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'Sat');
});

ava('displayUTC(dddd)', (test): void => {
	const timestamp = new Timestamp('dddd');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'Saturday');
});

ava('displayUTC(X)', (test): void => {
	const timestamp = new Timestamp('X');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, (localTime.getTime() / 1000).toString());
});

ava('displayUTC(x)', (test): void => {
	const timestamp = new Timestamp('x');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, localTime.getTime().toString());
});

ava('displayUTC(H)', (test): void => {
	const timestamp = new Timestamp('H');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '16');
});

ava('displayUTC(HH)', (test): void => {
	const timestamp = new Timestamp('HH');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '16');
});

ava('displayUTC(h)', (test): void => {
	const timestamp = new Timestamp('h');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '4');
});

ava('displayUTC(hh)', (test): void => {
	const timestamp = new Timestamp('hh');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '04');
});

ava('displayUTC(a)', (test): void => {
	const timestamp = new Timestamp('a');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'pm');
});

ava('displayUTC(A)', (test): void => {
	const timestamp = new Timestamp('A');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'PM');
});

ava('displayUTC(m)', (test): void => {
	const timestamp = new Timestamp('m');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '20');
});

ava('displayUTC(mm)', (test): void => {
	const timestamp = new Timestamp('mm');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '20');
});

ava('displayUTC(s)', (test): void => {
	const timestamp = new Timestamp('s');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '35');
});

ava('displayUTC(ss)', (test): void => {
	const timestamp = new Timestamp('ss');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '35');
});

ava('displayUTC(S)', (test): void => {
	const timestamp = new Timestamp('S');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '1');
});

ava('displayUTC(SS)', (test): void => {
	const timestamp = new Timestamp('SS');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '01');
});

ava('displayUTC(SSS)', (test): void => {
	const timestamp = new Timestamp('SSS');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '001');
});

ava('displayUTC(T)', (test): void => {
	const timestamp = new Timestamp('T');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '4:20 PM');
});

ava('displayUTC(t)', (test): void => {
	const timestamp = new Timestamp('t');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '4:20:35 pm');
});

ava('displayUTC(L)', (test): void => {
	const timestamp = new Timestamp('L');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '03/09/2019');
});

ava('displayUTC(l)', (test): void => {
	const timestamp = new Timestamp('l');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '3/09/2019');
});

ava('displayUTC(LL)', (test): void => {
	const timestamp = new Timestamp('LL');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'March 09, 2019');
});

ava('displayUTC(ll)', (test): void => {
	const timestamp = new Timestamp('ll');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'Mar 09, 2019');
});

ava('displayUTC(LLL)', (test): void => {
	const timestamp = new Timestamp('LLL');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'March 09, 2019 4:20 PM');
});

ava('displayUTC(lll)', (test): void => {
	const timestamp = new Timestamp('lll');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'Mar 09, 2019 4:20 PM');
});

ava('displayUTC(LLLL)', (test): void => {
	const timestamp = new Timestamp('LLLL');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'Saturday, March 09, 2019 4:20 PM');
});

ava('displayUTC(llll)', (test): void => {
	const timestamp = new Timestamp('llll');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, 'Sat Mar 09, 2019 4:20 PM');
});

ava('displayUTC(Z)', (test): void => {
	const timestamp = new Timestamp('Z');
	const formatted = timestamp.displayUTC(date);

	const offset = date.getTimezoneOffset();
	const unsigned = offset >= 0, absolute = Math.abs(offset);
	const expected = `${unsigned ? '+' : '-'}${String(Math.floor(absolute / 60)).padStart(2, '0')}:${String(absolute % 60).padStart(2, '0')}`;
	test.is(formatted, expected);
});

ava('displayUTC(ZZ)', (test): void => {
	const timestamp = new Timestamp('ZZ');
	const formatted = timestamp.displayUTC(date);

	const offset = date.getTimezoneOffset();
	const unsigned = offset >= 0, absolute = Math.abs(offset);
	const expected = `${unsigned ? '+' : '-'}${String(Math.floor(absolute / 60)).padStart(2, '0')}:${String(absolute % 60).padStart(2, '0')}`;
	test.is(formatted, expected);
});

ava('displayUTC(hh:mm:ss)', (test): void => {
	const timestamp = new Timestamp('hh:mm:ss');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '04:20:35');
});

ava('displayUTC(hh[ hours, ]mm[ minutes])', (test): void => {
	const timestamp = new Timestamp('hh[ hours, ]mm[ minutes]');
	const formatted = timestamp.displayUTC(date);
	test.is(formatted, '04 hours, 20 minutes');
});

ava('display-utc-arbitrary-default(H:m)', (test): void => {
	const formatted = Timestamp.displayUTCArbitrary('H:m');
	const localDate = new Date();
	test.is(formatted, `${localDate.getUTCHours()}:${localDate.getUTCMinutes()}`);
});

ava('display-utc-arbitrary-date-overload(H:m)', (test): void => {
	const formatted = Timestamp.displayUTCArbitrary('H:m', date.valueOf());
	test.is(formatted, '16:20');
});

ava('display-utc', (test): void => {
	const now = new Date();
	const utcDate = Timestamp.utc().getTime();
	const localDate = now.valueOf() + (now.getTimezoneOffset() * 60000);
	test.is(utcDate, localDate);
});
