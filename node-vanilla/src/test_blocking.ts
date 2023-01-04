// A function that will sleep synchronously for a certain
// number of milliseconds, blocking the main thread.
function sleepSync(milliseconds: number) {
    const start = Date.now();
    const expire = start + milliseconds;
    while (Date.now() < expire) {}
}

// A function that simulates a heavy blocking workload by
// synchronously sleeping for 2 seconds.
function work() {
    sleepSync(2_000);
}

function doWork() {
    for (let i = 0; i <= 10; i++) {
        work();
    }
    console.log('Workflow finished.');
}

doWork();
console.log('Hello world!');
