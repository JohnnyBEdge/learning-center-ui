import React from 'react';

export const CardSetContext = React.createContext({
    allCards: [],
    reviewCards: [],
    getVocab: () => {}
});

