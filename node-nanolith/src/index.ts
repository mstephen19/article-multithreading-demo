// Import the definitions we created before.
import { api } from './worker.js';

console.time('Workflow');

// Create an array to store promises generated
// by each multithreaded operation.
const promises: Promise<void>[] = [];

for (let i = 0; i <= 10; i++) {
    // Use the "api" as a function to call the
    // task as a multithreaded operation.
    const promise = api({ name: 'work' });
    // Add the task's promise to the array.
    promises.push(promise);
}

// Wait for all of the operations to complete.
await Promise.all(promises);

console.timeEnd('Workflow');
