function sumMultiplesOf3And5(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

const limit = 100; // You can change this limit as needed
console.log(`Sum of multiples of 3 and 5 below ${limit} is:`, sumMultiplesO(limit));