function solve(grads) {
    grads = grads % 400
    let degrees = grads * 0.9
    degrees = degrees < 0 ? 360 + degrees : degrees

    console.log(degrees);
}

solve(-50)