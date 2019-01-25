import React from 'react';
import { shallow } from 'enzyme';
import PageNotFount from '../../src/shared/components/PageNotFound';

describe('<PageNotFound />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<PageNotFount />);
    expect(wrapper.exists()).toBe(true);
  });

});