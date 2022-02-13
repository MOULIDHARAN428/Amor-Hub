import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Video from './VideoComponent';
import Chating from './ChatComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    render(){
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={ Home } />
                        <Route path="/video" component={ Video }/>
                        <Route path="/chat" component={ Chating }/>
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;