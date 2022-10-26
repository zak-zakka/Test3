var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

console.log('var_now: ' + now);
console.log('var_start: ' + start);
console.log('var_diff: ' + diff);
console.log('var_oneDay: ' + oneDay);

console.log('Day of year: ' + day);

// mod 2022-10-26 9:56 msk
// mod 2022-10-26 13:43 msk
