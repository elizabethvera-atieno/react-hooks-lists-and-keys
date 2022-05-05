import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  // return (
  //   <div>
  //     <h1>Top 5 CSS Colors</h1>
  //     <ol>
  //       <li style={{ color: colors[0] }}>{colors[0]}</li>
  //       <li style={{ color: colors[1] }}>{colors[1]}</li>
  //       <li style={{ color: colors[2] }}>{colors[2]}</li>
  //       <li style={{ color: colors[3] }}>{colors[3]}</li>
  //       <li style={{ color: colors[4] }}>{colors[4]}</li>
  //     </ol>
  //   </div>
  // );
  const colorElements = colors.map((color) => {
    return <li key={color}  style={{ color: color }}>{color}</li>;
  });

  const users = [
    { id: 1, firstName: "Duane", lastName: "Watson" },
    { id: 2, firstName: "Duane", lastName: "Johnson" },
  ];

  const userHeadings = users.map((user) => {
    return <h1 key={user.id}>{user.firstName}</h1>
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colorElements}
      </ol>
      {userHeadings}
    </div>);
}

export default ColorList;
