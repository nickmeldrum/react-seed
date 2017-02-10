import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Main from './main'

describe('<Main />', function() {
    before(function() {
        console.warn = msg => { throw new Error(msg) }
        console.error = msg => { throw new Error(msg) }
    })

    it('fails when passing a number', function() {
        expect(() => shallow(<Main name={1}/>))
            .to.throw(/Failed prop type/)
    })

    it('renders default props', function() {
        const wrapper = shallow(<Main/>)
        const div = wrapper.find('div')
        expect(div.text()).to.equal('Hello Please enter your name!')
    })

    it('renders hello {name}', function() {
        const wrapper = shallow(<Main name="world"/>)
        const div = wrapper.find('div')
        expect(div.text()).to.equal('Hello world!')
    })
})
