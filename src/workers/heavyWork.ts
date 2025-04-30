// Web Worker code (runs separately from main thread)
self.onmessage = (event) => {
    const limit = event.data;
    const primes = [];
  
    for (let i = 2; i <= limit; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }
  
    // Post the result back
    self.postMessage(primes);
  };
  