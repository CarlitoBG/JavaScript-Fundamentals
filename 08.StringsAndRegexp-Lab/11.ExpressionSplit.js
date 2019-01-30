function expressionSplit(expression) {
    let elements = expression.split(/[\s.();,]+/)
    console.log(elements.join('\n'))
}

expressionSplit('let sum = 1 + 2;if(sum &gt; 2){\tconsole.log(sum);}')