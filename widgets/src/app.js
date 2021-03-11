import React from 'react';
import Accordion from './components/Accordion';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const items = [
        {
            title: 'What is React?',
            content: 'React is a front end javascript framework',
        },
        {
            title: 'Why use React?',
            content: 'React is a favorite JS library among engineers',
        },
        {
            title: 'How do you use React?',
            content: 'You use React by creating components',
        },
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};
