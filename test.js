import test from 'ava';
import fn from './';

test('happy', t => {
	t.is(fn(1), true);
	t.is(fn(7), true);
	t.is(fn(10), true);
	t.is(fn(13), true);
	t.is(fn(19), true);
	t.is(fn(23), true);
	t.is(fn(28), true);
	t.is(fn(31), true);
});

test('unhappy', t => {
	t.is(fn(4), false);
	t.is(fn(16), false);
	t.is(fn(20), false);
	t.is(fn(37), false);
	t.is(fn(42), false);
	t.is(fn(58), false);
	t.is(fn(89), false);
	t.is(fn(145), false);
});
