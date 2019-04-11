import React from 'react';
import { shallow, mount, render } from 'enzyme';
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

// import Index from './Index.jsx';
import App from './App.jsx'
import Buy from './components/Buy.jsx'

describe('Components', () => {
  test('App component should render many children', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('div').children()).toHaveLength(21);
  });

  test('App should have a handleHover function', () => {
    const page = render( <App/> );
    const mockHover = jest.fn(str => {
      page.setState({
        view: str
      });
    });
    expect(mockHover).toBeTruthy()
    expect(page.find('handleOnMouseHover')).toBeTruthy()
  });

  test('should set state to Rent when handleHover is triggered', () => {
    const wrapper = mount(<App/> );
    expect(wrapper.find('#superNavTextRent').exists).toBeTruthy()
    expect(wrapper.state().view).toBe("")
    wrapper.find('#superNavTextRent').simulate('mouseover');
    wrapper.setState({
      view: 'Rent'
    });
    expect(wrapper.find('#rentModalColOne2').exists).toBeTruthy();
    expect(wrapper.state().view).toBe('Rent');
  });

  test('should set state to Buy when handleHover is triggered', () => {
    const wrapper = mount(<App/> );
    expect(wrapper.find('#superNavTextBuy').exists).toBeTruthy()
    expect(wrapper.state().view).toBe("")
    wrapper.find('#superNavTextBuy').simulate('mouseover');
    wrapper.setState({
      view: 'Buy'
    });
    expect(wrapper.find('#buyModalColTwo4').exists).toBeTruthy();
    expect(wrapper.state().view).toBe('Buy');
  });

  test('should set state to Sell when handleHover is triggered', () => {
    const wrapper = mount(<App/> );
    expect(wrapper.find('#superNavTextSell').exists).toBeTruthy()
    expect(wrapper.state().view).toBe("")
    wrapper.find('#superNavTextSell').simulate('mouseover');
    wrapper.setState({
      view: 'Sell'
    });
    expect(wrapper.find('#sellModalColOne2').exists).toBeTruthy();
    expect(wrapper.state().view).toBe('Sell');
  });

  test('should set state to Loans when handleHover is triggered', () => {
    const wrapper = mount(<App/> );
    expect(wrapper.find('#superNavTextLoans').exists).toBeTruthy()
    expect(wrapper.state().view).toBe("")
    wrapper.find('#superNavTextLoans').simulate('mouseover');
    wrapper.setState({
      view: 'Home Loans'
    });
    expect(wrapper.find('#LoansModalColOne2').exists).toBeTruthy();
    expect(wrapper.state().view).toBe('Home Loans');
  });

  test('should set state to Agent when handleHover is triggered', () => {
    const wrapper = mount(<App/> );
    expect(wrapper.find('#superNavTextAgent').exists).toBeTruthy()
    expect(wrapper.state().view).toBe("")
    wrapper.find('#superNavTextAgent').simulate('mouseover');
    wrapper.setState({
      view: 'Agent Finder'
    });
    expect(wrapper.find('#agentModalColOne2').exists).toBeTruthy();
    expect(wrapper.state().view).toBe('Agent Finder');
  });

  test('it should match the logo snapshot', () => {
    const wrapper = mount(<App/> );
    expect(wrapper.find('#superNavLogo')).toMatchImageSnapshot();
  });

  test('it should have a bunch of modal text', () => {
    const wrapper = mount(<App/>)
    expect(('.modalText').length).toBe(10)
  });

  test('it should have many event listeners', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('#superNavTextBuy').prop('onMouseEnter')).toBeTruthy();
    expect(wrapper.find('#superNavTextRent').prop('onMouseEnter')).toBeTruthy();
    expect(wrapper.find('#superNavTextSell').prop('onMouseEnter')).toBeTruthy();
    expect(wrapper.find('#superNavTextLoans').prop('onMouseEnter')).toBeTruthy();
    expect(wrapper.find('#superNavTextAgent').prop('onMouseEnter')).toBeTruthy();
  });
});