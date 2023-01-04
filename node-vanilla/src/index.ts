// A function that will sleep synchronously for a certain
// number of milliseconds, blocking the main thread.
function sleepSync(milliseconds: number) {
    const start = Date.now();
    const expire = start + milliseconds;
    while (Date.now() < expire) {}
    return;
}

// A function that simulates a heavy blocking workload by
// synchronously sleeping for 2 seconds.
function work() {
    sleepSync(2_000);
}

// Run the "work" function 10 times.
console.time('Workflow');

for (let i = 0; i <= 10; i++) {
    work();
}

console.timeEnd('Workflow');
