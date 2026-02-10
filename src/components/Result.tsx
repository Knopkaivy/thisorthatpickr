import type { FunctionComponent } from 'react'
import { type Option } from '../data/states'
interface ResultProps {
    winner: Option | null;
    onRestart: () => void;
}
 
const Result: FunctionComponent<ResultProps> = ({ winner, onRestart }) => {
    return ( 
        <div className="bg-white rounded-sm shadow-lg p-4 max-w-lg mx-auto text-center">
            { winner !== null &&
                <div 
                    className="flex-1 flex flex-col justify-center items-center h-full rounded-sm bg-fuchsia-200 cursor-pointer hover:bg-fuchsia-300 overflow-hidden group transition-all"
                >

                        <img 
                            src={winner.image} 
                            alt={winner.name}
                            className="w-full h-3/4 object-cover group-hover:scale-105 transition-transform"
                        />
                        <p className="text-3xl font-bold text-fuchsia-600 pt-4 pb-8">🎉 {winner.name} 🎉</p>
                </div>
            }

            <button 
                onClick={onRestart}
                className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold mt-4 py-3 px-6 rounded-sm transition"
            >
                Start Over
            </button>
        </div>
     );
}
 
export default Result;