import { useState, useEffect } from 'react'
import type { FunctionComponent } from 'react'
import { type Option } from '../data';
interface PlayProps {
    category: string;
    options: Option[];
    onWinnerSelected: (winner: Option) => void;
    onBack: () => void;
}
 
const Play: FunctionComponent<PlayProps> = ({ category, options, onWinnerSelected, onBack }) => {
const [availableOptions, setAvailableOptions] = useState<Option[]>(options);

    const [optionOne, setOptionOne] = useState<Option | null>(null);
    const [optionTwo, setOptionTwo] = useState<Option | null>(null);

    const generateOption = (setOption: React.Dispatch<React.SetStateAction<Option | null>>) => {
        if (availableOptions.length === 0) return;
        
        const randomIndex = Math.floor(Math.random() * availableOptions.length);
        const selectedOption = availableOptions[randomIndex];
        
        setOption(selectedOption);
        setAvailableOptions(availableOptions.filter((_, index) => index !== randomIndex));
    }

    const initializeOptions = () => {
        if (availableOptions.length < 2) return;
        
        const randomIndex1 = Math.floor(Math.random() * availableOptions.length);
        const option1 = availableOptions[randomIndex1];
        
        const remainingOptions = availableOptions.filter((_, index) => index !== randomIndex1);
        const randomIndex2 = Math.floor(Math.random() * remainingOptions.length);
        const option2 = remainingOptions[randomIndex2];
        
        setOptionOne(option1);
        setOptionTwo(option2);
        setAvailableOptions(remainingOptions.filter((_, index) =>  index !== randomIndex2));
    }
    
    useEffect(() => {
        initializeOptions();
    }, []);
    
    const handleChoice = (chosenOption: Option) => {
        if (availableOptions.length === 0) {
            onWinnerSelected(chosenOption);
            return;
        }
        
        if (chosenOption === optionOne) {
            generateOption(setOptionTwo);
        } else {
            generateOption(setOptionOne);
        }
    }

    if (!optionOne || !optionTwo) return null;

    return (
        <div>
            <div className="flex flex-col gap-4 justify-between items-center mb-4">
                <h2 className="text-3xl text-white text-center">{category}</h2>
                <button
                    onClick={onBack}
                    className="bg-white hover:bg-gray-100 text-pink-600 font-semibold py-3 px-8 rounded-sm transition"
                    data-testid="back-button"
                >
                    Back To Categories
                </button>
                <div className="">
                    <p className="text-white font-semibold">
                        {availableOptions.length + 2} options remaining
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 h-[60vh]">
                <div 
                    className="flex-1 flex flex-col justify-center items-center h-full rounded-sm bg-rose-100 cursor-pointer hover:bg-rose-200 overflow-hidden group transition-all"
                    onClick={() => handleChoice(optionOne)}
                    data-testid="option-card"
                >
                    <img 
                        src={optionOne.image} 
                        alt={optionOne.name}
                        className="w-full h-3/4 grow object-cover group-hover:scale-105 transition-transform"
                    />
                    <p className="text-3xl md:font-bold text-rose-700 pt-1 pb-2 md:py-5">{optionOne.name}</p>
                </div>
                <div 
                    className="flex-1 flex flex-col justify-center items-center h-full rounded-sm bg-pink-100 cursor-pointer hover:bg-pink-200 overflow-hidden group transition-all"
                    onClick={() => handleChoice(optionTwo)}
                >
                    <img 
                        src={optionTwo.image} 
                        alt={optionTwo.name}
                        className="w-full h-3/4 grow object-cover group-hover:scale-105 transition-transform"
                    />
                    <p className="text-3xl md:font-bold text-pink-700 pt-1 pb-2 md:py-5">{optionTwo.name}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Play;