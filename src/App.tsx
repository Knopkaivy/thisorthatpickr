import { useState } from 'react'
import { type Option } from './data/states'
import Start from './components/Start'
import Play from './components/Play'
import Result from './components/Result'
import './App.css'

function App() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'result'>('start');
  const [winner, setWinner] = useState<Option | null>(null);
  const [gameKey, setGameKey] = useState<number>(0);
    const handleStart = () => {
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

  return (
    <div className="min-h-[50vh] bg-gradient-to-br rounded-sm from-fuchsia-500 to-pink-500 p-8">
      <h1 className="text-6xl font-bold text-white text-center mb-8">This Or That Pickr</h1>
      {gameState === 'start' && <Start onStart={handleStart} />}
      {gameState === 'playing' && <Play key={gameKey} onWinnerSelected={handleWinnerSelected} />}
      {gameState === 'result' && <Result winner={winner} onRestart={handleRestart} />}
    </div>
  )
}

export default App
