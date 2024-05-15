import React, { useState, ChangeEvent } from 'react';
import Header from './components/Header';

interface InputState {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

const App: React.FC = () => {
    const [inputValue, setInputValue] = useState<InputState>({
        initialInvestment: 1000,
        annualInvestment: 12000,
        expectedReturn: 10,
        duration: 10,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, fieldName: keyof InputState) => {
        setInputValue({
            ...inputValue,
            [fieldName]: parseInt(e.target.value, 10)
        });
    };

    return (
        <>
            <Header/>
            <div>
                <label>Initial Investment</label>
                <input type='text' value={inputValue.initialInvestment} onChange={(e) => handleInputChange(e, 'initialInvestment')} />
                <p>You typed: {inputValue.initialInvestment}</p>
            </div>
            <div>
                <label>Annual Investment</label>
                <input type='text' value={inputValue.annualInvestment} onChange={(e) => handleInputChange(e, 'annualInvestment')} />
                <p>You typed: {inputValue.annualInvestment}</p>
            </div>
            <div>
                <label>Expected Return</label>
                <input type='text' value={inputValue.expectedReturn} onChange={(e) => handleInputChange(e, 'expectedReturn')} />
                <p>You typed: {inputValue.expectedReturn}</p>
            </div>
            <div>
                <label>Duration</label>
                <input type='text' value={inputValue.duration} onChange={(e) => handleInputChange(e, 'duration')} />
                <p>You typed: {inputValue.duration}</p>
            </div>
        </>
    );
};

export default App;