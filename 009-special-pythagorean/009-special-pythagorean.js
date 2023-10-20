
export function specialPythagoreanTriplet(n) {
    let sumOfABC = n;

    let numberFound=0;
    let found =[]

    for (var a = 3; a<sumOfABC; a++) {
        for (var b = a + 1; ; b++) {
            // a+b+c = sumOfABC --> c = sumOfABC - a - b
            let c = sumOfABC - a - b;
            let c2 =Math.sqrt(a*a + b*b);
            let specialPythagoreanTriplet = a * a + b * b == c * c
            if (c < b) {
                break;
            }
            if (specialPythagoreanTriplet) {
                found.push(a*b*c);
                numberFound++;
            }
        }
    }
    console.log(`found array: ${found} for input ${n}`)
    return Math.min(...found);
}

