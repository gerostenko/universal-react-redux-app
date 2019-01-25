import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../src/shared/App';

describe('<App />', () => {
    it('renders three <HelloWorld /> components', () => {
        const wrapper = mount(<App />);

        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.exists(".helloWorld")).toEqual(true);
    });
});