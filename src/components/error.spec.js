import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error from "./error";

configure({ adapter: new Adapter() });

describe('Test Error component', () => {
  let instance;
  let shallowComponent;
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      error: false,
      message: ''
    };
    shallowComponent = shallow(<Error {...defaultProps} />);
    instance = shallowComponent.instance();
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });

  test('should render message', () => {
    shallowComponent.setProps({
      error: true,
      message: 'message'
    });
    expect(shallowComponent.find('div').at(1).text()).toContain('message')
  });
});