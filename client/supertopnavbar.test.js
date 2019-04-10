import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './src/App';
import AgentFinder from './src/components/AgentFinder';
import Buy from './src/components/Buy';
import HomeLoans from './src/components/HomeLoans';
import Index from './src/components/Index';
import Rent from './src/components/Rent';
import Sell from './src/components/Sell';

describe('App Component', () => {
  test('should render correctly', () => {
    const page = shallow( <App /> );
    expect(page).toMatchSnapshot();
  })
})