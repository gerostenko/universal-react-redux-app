import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../src/shared/App';
import { Link, Route, BrowserRouter } from 'react-router-dom';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  const mockdata = {
    type: 'Users',
    payload: [{id: 1234, username: 'test', email: 'example@moutlook.com'}]
};

  it('renders when called', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // it('to have two Links rendered', () => {
  //   expect(wrapper.find(Link).length).toBe(2);
  // });

  // it('to have three Routes rendered', () => {
  //   expect(wrapper.find(Route).length).toBe(3);
  // });

  // it('to change the url to /posts if Posts Link was clicked', () => {
  //   let promise = Promise.resolve();
  //   const loadData = () => {
  //     promise = promise.resolve().then(mockdata);
  //     return promise;
  //   };

  //   let mountedWrapper = mount(<BrowserRouter><App data={loadData}/></BrowserRouter>);
    
  //   promise.then(() => {
  //     mountedWrapper.find(Link).at(1).simulate('click', { button: 0 });
  //     expect(window.location.pathname).toBe('/posts');
  //   });
   
  // });
});