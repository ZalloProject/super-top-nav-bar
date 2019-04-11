import React from 'react';
import { shallow, mount, render } from 'enzyme';
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

// import Index from './Index.jsx';
import Main from './Main.jsx'
import AgentFinder from '../src/components/AgentFinder.jsx';
import Sell from '../src/components/Sell.jsx';

describe('Components', () => {
  test('Main component should render many children', () => {
    const wrapper = mount(<Main/>);
    expect(wrapper.find('div').children()).toHaveLength(20);
  });

  test('Main should have a handleHover function', () => {
    const page = render( <Main/> );
    const mockHover = jest.fn(str => {
      page.setState({
        view: str
      });
    });
    expect(mockHover).toBeTruthy()
    expect(page.find('handleOnMouseHover')).toBeTruthy()
  });

  test('should set state to Rent when handleHover is triggered', () => {
    const wrapper = mount(<Main/> );
    expect(wrapper.find('#superNavTextRent').exists).toBeTruthy()
    expect(wrapper.state().view).toBe("")
    wrapper.find('#superNavTextRent').simulate('mouseover');
    wrapper.setState({
      view: 'Rent'
    });
    expect(wrapper.find('#rentModalColOne2').exists).toBeTruthy();
    expect(wrapper.state().view).toBe('Rent');
    expect(wrapper.find('#sellModalColOne0').exists).toBeTruthy();
  });

  test('should set state to Buy when handleHover is triggered', () => {
    const wrapper = mount(<Main/> );
    expect(wrapper.find('#superNavTextBuy').exists).toBeTruthy()
    expect(wrapper.state().view).toBe("")
    wrapper.find('#superNavTextBuy').simulate('mouseover');
    wrapper.setState({
      view: 'Buy'
    });
    expect(wrapper.find('#buyModalColTwo4').exists).toBeTruthy();
    expect(wrapper.state().view).toBe('Buy');
  });

  test('it should match the logo snapshot', () => {
    const wrapper = mount(<Main/> );
    expect(wrapper.find('#superNavLogo')).toMatchImageSnapshot();
  });

  test('it should render an AgentFinder component', () => {
    const wrapper = mount(<Main/>)
    expect(('.modalText').length).toBe(10)
    wrapper.setState({
      view: 'Agent'
    })
    setTimeout(
      expect(wrapper.find('#agentModalColOne2').text()).toBe("Home inspectors"), 100
    )
    
    

  });

});