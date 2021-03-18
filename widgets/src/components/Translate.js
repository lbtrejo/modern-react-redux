import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

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
    {
        label: 'Esperanto',
        value: 'eo',
    },
];

function Translate() {
    const [language, setLanguage] = useState(OPTIONS[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                options={OPTIONS}
                selected={language}
                onSelectedChange={setLanguage}
                label="Select a language"
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text} />
        </div>
    );
}

export default Translate;
