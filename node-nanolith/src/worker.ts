// The "define" function lets you tell Nanolith
// what functions you'd like to be able to multithread.
import { define } from 'nanolith';

// Create and export a variable with a name of your choice
// that points to the awaited result of defining your tasks.
export const api = await define({
    // Define the work function inside of the object.
    work() {
        sleepSync(2_000);
    },
});

// A function that will sleep synchronously for a certain
// number of milliseconds, blocking the main thread.
function sleepSync(milliseconds: number) {
    const start = Date.now();
    const expire = start + milliseconds;
    while (Date.now() < expire) {}
    return;
}
