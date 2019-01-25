import React from 'react';
import { shallow, mount } from 'enzyme';
import HelloWorld from '../../../src/shared/components/HelloWorld';

describe('<HelloWorld />', () => {
    it('renders <HelloWorld /> component properly', () => {
        const wrapper = shallow(<HelloWorld />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.helloWorld').length).toEqual(1);

    });
});