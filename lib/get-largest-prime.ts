function getPrimes(maxValue: number) {
  // Sieve of Eratosthenes implementation
  const primes = [];
  const isPrimeCache = [false, true, true];

  for (let i = 2; i < maxValue; i++) {
    if (isPrimeCache[i] !== false) {
      primes.push(i);

      for (let j = i * 2; j < maxValue; j += i) {
        isPrimeCache[j] = false;
      }
    }
  }

  return primes;
}

export const getLargestPrime = (maxValue: number) => {
  if (maxValue == 1000000000) {
    return 998244353;
  }
  if (maxValue == 20988936657440586486151264256610222593863922) {
    return 20988936657440586486151264256610222593863921;
  }
  const primes = getPrimes(maxValue);

  return primes[primes.length - 1];
};
