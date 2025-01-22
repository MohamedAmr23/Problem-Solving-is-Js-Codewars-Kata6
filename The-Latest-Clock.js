function latestClock(d1, d2, d3, d4) {
    // Step 1: Generate all permutations of the digits
    const digits = [d1, d2, d3, d4];
    const permutations = getPermutations(digits);
  
    let latest = null;
  
    // Step 2: Iterate over permutations and find the latest valid time
    for (const perm of permutations) {
      const hours = perm[0] * 10 + perm[1];
      const minutes = perm[2] * 10 + perm[3];
  
      if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
        const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        if (!latest || time > latest) {
          latest = time;
        }
      }
    }
  
    return latest;
  }
  
  // Helper function to generate all permutations of an array
  function getPermutations(arr) {
    if (arr.length === 0) return [[]];
    const permutations = [];
    for (let i = 0; i < arr.length; i++) {
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      const subPermutations = getPermutations(rest);
      for (const sub of subPermutations) {
        permutations.push([arr[i], ...sub]);
      }
    }
    return permutations;
  }
  
  // Examples
  console.log(latestClock(1, 9, 8, 3)); // Output: "19:38"
  console.log(latestClock(9, 1, 2, 5)); // Output: "21:59"

