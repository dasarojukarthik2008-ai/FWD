import multiply, { add } from "./math.js";
const btn = document.getElementById("calculateBtn");
btn.addEventListener("click", function() {
    let abc1 = Number(document.getElementsById("num1").value);
    let abc2 = Number(document.getElementsById("num2").value);
    let sum = add(abc1,abc2);
    let pro = multiply(abc1,abc2);
    document.getElementsById("result").innerHTML = 
        "Addition : " + sum + "<br>" + 
        "Multiplication : " + pro;
});