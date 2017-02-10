import React from 'react'
import { render } from 'react-dom'
import Main from './components/main'

render(
    <div>
        <Main />
        <Main name="Nick" />
        <Main name={1} />
    </div>
, document.getElementById('app'))
