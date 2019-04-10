import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Index from './src/Index.jsx';
// import AgentFinder from './src/components/AgentFinder';
// import Buy from './src/components/Buy';
// import HomeLoans from './src/components/HomeLoans';
// import Index from './src/components/Index';
// import Rent from './src/components/Rent';
// import Sell from './src/components/Sell';

describe('Index Component', () => {
  test('should render correctly', () => {
    const page = shallow( <Main /> );
    expect(page).toMatchSnapshot();
  });
});

// describe('Components', () => {
//   test('Index should have a handleHover function', () => {
//     const page = mount( <Index/> );
//     const mockHover = jest.fn(str => {
//       page.setState({
//         view: str
//       });
//     });
//     expect(mockHover).toBeTruthy()
//   });
//   test('should change the state when handleHover is triggered', () => {
//     const page = mount(<Index/> );
//     expect(wrapper.find('#superNavTextRent').exists).toBeTruthy()
//     expect(page.state.view).toBe('Rent')
//   });
// });