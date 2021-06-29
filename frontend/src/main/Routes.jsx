import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import Deadline from '../components/user/Deadline'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={UserCrud} />
        <Route exact path='/deadline' component={Deadline} />
        <Redirect from='*' to='/' />
    </Switch>