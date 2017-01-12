'use strict'

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Main from './main'

describe('<Main />', function() {
    it('renders hello world', function() {
        const wrapper = shallow(<Main />)
        const div = wrapper.find('div')
        expect(div.text()).to.equal('Hello world!')
    })
})
