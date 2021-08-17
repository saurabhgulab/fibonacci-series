n= prompt("Enter number for which you want a Fibonacci Series: ")
function fibonacciGenerator (n) {
    var x = [];
    if (n===1){
        x=[0];
    } else if (n===2){
        x=[0,1];
    } else {
        x = [0,1];
    for(var i=2; i<=n; i++){
        x.push(x[x.length-2]+x[x.length-1]);
        }
    }
    return x;
}
console.log("Fibonacci Series for" + n + " is:")
fibonacciGenerator(n);
