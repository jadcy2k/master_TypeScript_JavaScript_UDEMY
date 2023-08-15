function calculateDaysBetweenDates(begin, end) {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(begin);
    var secondDate = new Date(end);

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}
console.log("Days between:", calculateDaysBetweenDates("2020-01-15", "2020-01-25"));
// Expected output: 11

console.log("Days between:",calculateDaysBetweenDates("2020-01-15", "2020-01-15"));
// Expected output: 0

console.log("Days between:",calculateDaysBetweenDates("2020-01-15", "2020-01-01"));
// Expected output: 14
console.log("----------------------------------------------------------------");
// ----------------------------------------------------------------
let fibonacci = () => {
    let fib = [0, 1];
    let n = fib.length;
    while (n < 100) {
        fib.push(fib[n - 1] + fib[n - 2]);
        n++;
    }
    return fib;
};
console.log("Fibonacci:", fibonacci());
console.log("----------------------------------------------------------------");

