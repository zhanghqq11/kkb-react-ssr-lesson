import React ,{useState} from 'react';
import {Router} from 'react-router-dom';
import Index from './container/index'
import About from './container/About'

export default (
    <div>
        <Router path='/' exact component={Index}></Router>
        <Router path='/About' exact component={About}></Router>
    </div>
)
