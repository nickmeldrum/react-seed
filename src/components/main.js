'use strict'

import React from 'react'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>Hello {this.props.name}!</div>
        )
    }
}

Main.propTypes = {
    name: React.PropTypes.string.isRequired
}

Main.defaultProps = {
    name: 'Please enter your name'
}
