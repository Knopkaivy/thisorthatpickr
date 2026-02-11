import { useState } from 'react'
import Start from './components/Start'
import Play from './components/Play'
import Result from './components/Result'
import { getAllCategories, getOptionsByCategory, type Option } from './data';
import './App.css'

function App() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'result'>('start');
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [winner, setWinner] = useState<Option | null>(null);
  const [gameKey, setGameKey] = useState<number>(0);

  const handleCategorySelect = (category: string) => {
      const options = getOptionsByCategory(category);
    if (options.length < 2) {
        alert('Not enough options in this category. Please select another.');
        return;
    }
    setSelectedOptions(getOptionsByCategory(category));
    setGameState('playing');
  };
    const handleWinnerSelected = (winner: Option) => {
    setWinner(winner);
    setGameState('result');
  };
    const handleRestart = () => {
    setWinner(null);
    setGameState('playing');
    setGameKey(prev => prev + 1);
  };
    const handleBack = () => {
    setGameState('start');
    setSelectedOptions([]);
  };

  const categories = getAllCategories();

  return (
    <div className="min-h-[50vh] bg-gradient-to-br rounded-sm from-fuchsia-500 to-pink-500 p-8">
      <h1 className="text-6xl font-bold text-white text-center mb-8">This Or That Pickr</h1>
      {gameState === 'start' && <Start categories={categories} onCategorySelect={handleCategorySelect} />}
      {gameState === 'playing' && <Play         
                                    key={gameKey} 
                                    options={selectedOptions} 
                                    onWinnerSelected={handleWinnerSelected}
                                    onBack={handleBack} />}
      {gameState === 'result' && <Result winner={winner} onRestart={handleRestart} />}
    </div>
  )
}

export default App
