import React from "react";

let cond, cond1, cond2, x1, x2, y1, y2, yd
//ternary on spot
let jsx = <div>
    {cond1 ? y1 :
     cond2 ? y2 : yd}
</div>

//using && operator that If expr1 can be converted to true, returns expr2; else, returns expr1.
// let x = "Cat" && "Dog" returns Dog
function Contacts({post}) {
  return <div>
      {contacts.bitbucket && // equals to-  cond ? x : null , cond has to be Null, Boolean or ""
      <p>BitBucket: {contacts.bitbucket}</p>}
      {contacts.github && // 0 will result in being rendered
      <p>Github: {contacts.github}</p>}
  </div>
}

function Profile1({account}) {
  return <div>
    <h4>
      {account.fullname ? account.fullname : "Anonymous"}
    </h4>
  </div>
}

function Profile2({account}) {
    return <div>
      <h4>
        {account.fullname || "Anonymous"}
      </h4>
    </div>
}
// cond ? cond : default
// consider "" and 0 cases
// eq. Number will result in 0 being renderedaaa


// using a function when there is a lot of and will be reused
function evalueteOperator() {
    return cond1 ? y1 :
        cond2 ? y2 : yd
}


let evaluation = <div>
    {evalueteOperator()}
</div>

// preliminary  calculations using if-else (1st variant), if-else is an instruction,
// not an expression so we need to use a function
let result
if (cond) result = y1
else if (cond2) result = y2
else result = yd

let jsxResult = <div>
    {result}
</div>

// using a function (2)
function () {
    if (cond) return = y1
    else if (cond2) return = y2
    else return = yd
}

//using do (3), experimental, turns instruction into an expression
let jsx = <div>
    {do {
        if     (cond1) y1
        else if(cond2) y2
        else           yd}}
</div>

