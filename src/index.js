import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";

import Dashboard from './pages/Dashboard'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Dashboard} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.querySelector('#root'))