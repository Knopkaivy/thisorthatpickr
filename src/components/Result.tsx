import type { FunctionComponent } from 'react'
import { type Option } from '../data'
interface ResultProps {
    winner: Option | null;
    onRestart: () => void;
}
 
const Result: FunctionComponent<ResultProps> = ({ winner, onRestart }) => {
    return ( 
        <div className="max-w-lg mx-auto text-center">
            { winner !== null &&
                <div 
                    className="flex-1 flex flex-col justify-center items-center h-full rounded-sm bg-pink-100 cursor-pointer hover:bg-pink-200 overflow-hidden group transition-all"
                >

                        <img 
                            src={winner.image} 
                            alt={winner.name}
                            className="w-full h-3/4 grow object-cover group-hover:scale-105 transition-transform"
                        />
                        <p className="text-3xl md:font-bold text-pink-700 pt-1 pb-2 md:pt-4 md:pb-6">🎉 {winner.name} 🎉</p>
                </div>
            }

            <button 
                onClick={onRestart}
                className="w-full bg-white hover:bg-gray-100 text-pink-600 font-semibold mt-4 py-4 px-6 rounded-sm transition mb-4"
                data-testid="start-over-button"
            >
                Start Over
            </button>
        </div>
     );
}
 
export default Result;