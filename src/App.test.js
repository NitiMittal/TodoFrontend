// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import {add,total} from './components/Fake'

test("add",()=>{
  const value=add(1,2);
  expect(value).toBe(3);
})

test("total",()=>{
  expect(total(10,15)).toBe("$25");
})