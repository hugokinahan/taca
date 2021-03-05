import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Contact from './components/common/Contact'
import Documents from './components/common/Documents'
import Home from './components/common/Home'
import News from './components/common/News'
import People from './components/common/People'
import VillageHistory from './components/common/VillageHistory'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={People} />
        <Route path="/news" component={News} />
        <Route path="/history" component={VillageHistory} />
        <Route path="/documents" component={Documents} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        {/* <Route path="/movies/new" component={MovieNew}/> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
