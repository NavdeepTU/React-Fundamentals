import React from 'react';
import ReactDOM from 'react-dom';

// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

const NumberList = (props) => {
  const numbers = props.numbers;
  let list = numbers.map((num, idx) => <li key={num.toString()}> {num} </li>);
  return <ul> {list} </ul>;
};

let numbers = [1, 2, 3, 4];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

export { NumberList };

// Some Important points:

// 1. We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
// 2. Keys only make sense in the context of the surrounding array. A good rule of thumb is that elements inside the map() call need keys.
// 3. Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique. We can use the same keys when we produce two different arrays.
// 4. Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name.
// 5. JSX allows embedding any expression in curly braces so we could inline the map() result.
