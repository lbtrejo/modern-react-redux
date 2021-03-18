import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

const OPTIONS = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
];

function Translate() {
    const [language, setLanguage] = useState(OPTIONS[0]);

    return (
        <div>
            <Dropdown
                options={OPTIONS}
                selected={language}
                onSelectedChange={setLanguage}
            />
        </div>
    );
}

export default Translate;
