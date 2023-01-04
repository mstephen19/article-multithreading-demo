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
	var waitGroup sync.WaitGroup

	start := time.Now()

	// Run the "work" function 10 times.
	for i := 1; i <= 10; i++ {
		waitGroup.Add(1)

		go func() {
			defer waitGroup.Done()
			work()
		}()
	}

	waitGroup.Wait()

	fmt.Printf("Workflow: %vs\n", time.Since(start).Round(time.Millisecond).Seconds())
}
