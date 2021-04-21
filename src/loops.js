import React from "react"

let cond, cond1, cond2, x, x1, x2, y1, y2, yd, xs

//map
let jsx1 = <Items>
  {xs.map(x => <Item x={x}/>)}
</Items>

let jsx2 = <Items>
  {xs.filter(x => cond ? <Item x={x}/> : null)}
</Items>

//flatMap to use separators e.q to insert ","
let jsx3 = <Items>
  {xs.flatMap(x => [<Item x={x}/>, ","]).slice(-1)}
</Items>

let jsx4 = <Items>
  {Object.keys(obj).map(x => {
    ...
  })}
</Items>
