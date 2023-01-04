package main

import (
	"fmt"
	"sync"
	"time"
)

// A function that simulates a heavy blocking workload by
// synchronously sleeping for 2 seconds.
func work() {
	time.Sleep(time.Second * 2)
}

func main() {
	// Create a group to keep track of and wait for our
	// operations.
	var waitGroup sync.WaitGroup
	start := time.Now()

	// Run the "work" function 10 times.
	for i := 1; i <= 10; i++ {
		waitGroup.Add(1)

		// Run the task on a different thread.
		go func() {
			defer waitGroup.Done()
			work()
		}()
	}

	// Wait for all the operations to complete.
	waitGroup.Wait()

	// Comparable to "console.timeEnd" in Javascript
	fmt.Printf("Workflow: %vs\n", time.Since(start).Round(time.Millisecond).Seconds())
}
