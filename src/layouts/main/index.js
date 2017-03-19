import {Route} from 'react-router-dom';
import React, {Component} from 'react';
import Main from 'pages/Main';
import Create from 'pages/Create';
import Show from 'pages/Show';
import Update from 'pages/Update';
import Header from 'components/Header';
import Footer from 'components/Footer';

import style from './index.styl';

import foundation from './../../styles/foundation.css';

export default class extends Component {
    render() {
        return (
            <div className={style.layout}>
                <div className={style.background}/>
                <Header />
                <section className={style.content}>
                    <Route exact path="/" component={Main}/>
                    <Route path="/create" component={Create}/>
                    <Route path="/show/:id" component={Show}/>
                    <Route path="/edit/:id" component={Update}/>
                </section>
                {/* <Footer />*/}
            </div>
        );
    }
}

