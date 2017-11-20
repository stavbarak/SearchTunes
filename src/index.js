import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import TrackProfile from './components/TrackProfile';

const BASE_URL = 'https://itunes.apple.com';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' render={(props) => ( <App baseURL={`${BASE_URL}/search`}/> )} />
            <Route exact path='/:id' render={(props) => ( <TrackProfile baseURL={`${BASE_URL}/lookup`} {...props} /> )} />
        </div>
    </BrowserRouter>,    
        document.getElementById('root')
);
