import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import Planet from '../planet.js';

const props = {
    data: {
        name: "Sachin",
        population: "100",
        gravity: "1",
        orbital_period: "24",
        terrain: ""
    },
};

it('<Planet {...props} /> :: render test', () => {
    const wrapper = shallow(<Planet {...props} />);
    expect(wrapper).to.have.lengthOf(1);
});