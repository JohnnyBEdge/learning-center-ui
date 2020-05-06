import React from 'react';

export const ResourceContext = React.createContext({
    resources:[],
    deleteResource: () => {},
    editResource: () => {},
});

