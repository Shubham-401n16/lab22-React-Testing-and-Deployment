import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Counter from '../components/Counter';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../components/Footer';
import Header from '../components/Header';

configure({ adapter: new Adapter() });

describe('counter test', () => {
  it('initial state', () => {
    const component = shallow(<Counter />);
    expect(component.state('count')).toBe(0);
  });

  it('+ button', () => {
    const component = shallow(<Counter />);
    const plusBtn = component.find('span.up');

    plusBtn.simulate('click');
    expect(component.state('count')).toBe(1);

  });

  it('- button', () => {
    const component = shallow(<Counter />);
    const minusBtn = component.find('span.down');

    minusBtn.simulate('click');
    expect(component.state('count')).toBe(-1);

  });
});

describe('counter test', () => {
  it('Contents', () => {
    const component = render(<Counter />);

    const minus = component.find('span.down');
    expect(minus.text()).toBe(' - ');

    const count = component.find('span.count');
    expect(count.text()).toBe('0');

    const plus = component.find('span.up');
    expect(plus.text()).toBe(' + ');
  });
});

describe('footer test', () => {
    it('footer html', () => {
      const component = mount(<Footer />);
      const footer = component.find('Footer');
  
      expect(footer.text()).toBe('\u00A9 2018 Code Fellows');
    });
  });


describe('header test', () => {
  it('header html', () => {
    const component = mount(<Header />);
    const header = component.find('h1');

    expect(header.text()).toBe('Counters R Fun');
  });
});