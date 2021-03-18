import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

    const options = [
        {
            label: 'The Color Red',
            value: 'red',
        },
        {
            label: 'The Color Green',
            value: 'green',
        },
        {
            label: 'A Shade of Blue',
            value: 'blue',
        },
    ];

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* {showDropdown ? (
                <Dropdown
                    label="Select a color"
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            ) : null} */}
            <Translate />
        </div>
    );
};
