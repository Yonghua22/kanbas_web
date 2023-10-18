import React from "react";

function ImpliedReturns() {
    function divide(a,b){
        return a/b;
    }
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
}
export default ImpliedReturns;
