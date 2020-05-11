import React, {useContext, useState} from 'react';
import '../../comp-styling/set-container.css'
import {CardSetContext} from '../../context/card-sets';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const SetContainer = () => {
    // usecontxt and map allcards to display
    const {
        allCards,
        editVocab,
        deleteVocab
        } = useContext(CardSetContext);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab){
            setActiveTab(tab);
        }
    }

    const listItem = allCards.map((card) => {
        return <li key={card._id}> {card.term}
                    <button onClick={() => deleteVocab(card._id)}>&#128465;</button>
                    <button onClick={() => editVocab(card)}>&#9998;</button> 
             </li>
    });

    return(
        <div>
            <Nav tabs>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}>
                    All Cards
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}>
                   Review
                </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <h4> All Cards</h4>
                    <ul id="all_cards_list">
                        {listItem}
                    </ul>
                </TabPane>
                <TabPane tabId="2">
                    <h4> Review Content</h4>
                </TabPane>
            </TabContent>
    </div>
    )
}

export default SetContainer;