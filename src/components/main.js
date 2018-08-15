import React from 'react';
import Landing from './landingpage';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
    
    </Switch>
)

export default Main;