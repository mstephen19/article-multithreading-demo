import { api } from './worker.js';

// Run the "work" function 10 times.
console.time('Workflow');

// Create an array to store the promises generated
// by each multithreaded operation.
const promises: Promise<void>[] = [];

for (let i = 0; i <= 10; i++) {
    // Each time, call the "work" function as a multithreaded
    // operation and add the promise to the "promises" array.
    promises.push(api({ name: 'work' }));
}

// Wait for all of the operations to finish.
await Promise.all(promises);

console.timeEnd('Workflow');
