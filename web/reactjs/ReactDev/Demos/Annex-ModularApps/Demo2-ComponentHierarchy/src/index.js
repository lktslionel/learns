import React from 'react'
import {render} from 'react-dom'

import RetailerDirectory from './components/RetailerDirectory'
import retailersData from '../data/retailersData'

window.React = React

render(
    <RetailerDirectory title="Totally Awesome Retailers" retailers={retailersData} />,
    document.getElementById("osl-container")
)