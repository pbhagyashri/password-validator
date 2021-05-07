import React from 'react'

import '../styles/index.scss'
import Home from './Home'
import Success from './Success'
import Form from './Form'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/success">
                        <Success />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
