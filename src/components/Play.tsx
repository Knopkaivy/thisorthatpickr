import { useState, useEffect } from 'react'
import type { FunctionComponent } from 'react'
import { usStates, type Option } from '../data/states'
interface PlayProps {
    onWinnerSelected: (winner: Option) => void;
}
 
const Play: FunctionComponent<PlayProps> = ({ onWinnerSelected }: PlayProps) => {
const [availableOptions, setAvailableOptions] = useState<Option[]>(usStates);

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
        console.log( availableOptions);
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
        <div className="flex gap-4 h-[60vh]">
            <div 
                className="flex-1 flex flex-col justify-center items-center h-full rounded-sm bg-fuchsia-200 cursor-pointer hover:bg-fuchsia-300 overflow-hidden group transition-all"
                onClick={() => handleChoice(optionOne)}
            >
                <img 
                    src={optionOne.image} 
                    alt={optionOne.name}
                    className="w-full h-3/4 object-cover group-hover:scale-105 transition-transform"
                />
                <p className="text-3xl font-bold text-fuchsia-800 p-4">{optionOne.name}</p>
            </div>
            <div 
                className="flex-1 flex flex-col justify-center items-center h-full rounded-sm bg-pink-200 cursor-pointer hover:bg-pink-300 overflow-hidden group transition-all"
                onClick={() => handleChoice(optionTwo)}
            >
                <img 
                    src={optionTwo.image} 
                    alt={optionTwo.name}
                    className="w-full h-3/4 object-cover group-hover:scale-105 transition-transform"
                />
                <p className="text-3xl font-bold text-pink-800 p-4">{optionTwo.name}</p>
            </div>
        </div>
    );
}
 
export default Play;