import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Contact from './components/common/Contact'
import Home from './components/common/Home'
import News from './components/common/News'
import People from './components/common/People'
import VillageHistory from './components/common/VillageHistory'
import BigLunch from './components/village_history/BigLunch'
import Christmas from './components/village_history/Christmas'
import FriendshipCircle from './components/village_history/FriendshipCircle'
import PicnicInThePark from './components/village_history/PicnicInThePark'
import TogetherForTemplepatrick from './components/village_history/TogetherForTemplepatrick'
import ToiletBlock from './components/village_history/ToiletBlock'
import WindowBox from './components/village_history/WindowBox'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news/christmas" component={Christmas} />
        <Route path="/news/friendshipcircle" component={FriendshipCircle} />
        <Route path="/news/toiletblock" component={ToiletBlock} />
        <Route path="/news/togetherfortemplepatrick" component={TogetherForTemplepatrick} />
        <Route path="/news/biglunch" component={BigLunch} />
        <Route path="/news/picnicinthepark" component={PicnicInThePark} />
        <Route path="/news/windowbox" component={WindowBox} />
        <Route path="/people" component={People} />
        <Route path="/news" component={News} />
        <Route path="/history" component={VillageHistory} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        {/* <Route path="/movies/new" component={MovieNew}/> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
