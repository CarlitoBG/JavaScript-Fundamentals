function quadraticEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c

    if (discriminant > 0){
        let x1 = ((-1 * b) - Math.sqrt(discriminant)) / (2 * a);
        let x2 = ((-1 * b) + Math.sqrt(discriminant)) / (2 * a);

        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } else if (discriminant === 0){
        let x1 = ((-1 * b) - Math.sqrt(discriminant)) / (2 * a);
        console.log(x1);
    } else {
        console.log("No");
    }
}

quadraticEquation(6, 11, -35)