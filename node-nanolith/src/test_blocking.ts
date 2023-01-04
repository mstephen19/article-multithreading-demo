import { api } from './worker.js';

async function doWork() {
    const promises: Promise<void>[] = [];

    for (let i = 0; i <= 10; i++) {
        const promise = api({ name: 'work' });
        promises.push(promise);
    }

    await Promise.all(promises);
    console.log('Workflow finished.');
}

doWork();
console.log('Hello world!');
