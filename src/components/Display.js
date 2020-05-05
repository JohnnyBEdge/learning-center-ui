import React from 'react'
import Nav from './Nav';
import Home from './Home';
import Resources from './resource/Resources'
import FlashCards from './flashcard/FlashCards';
import OrigContent from './original/OrigContent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Display = () => {
    return(
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/flashcards" component={FlashCards} />
                    <Route path="/resources" component={Resources} />
                    <Route path="/orig-content" component={OrigContent} />
                </Switch>
            </div>
        </Router>
    )
};

export default Display;