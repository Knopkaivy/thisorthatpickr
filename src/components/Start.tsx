import type { FunctionComponent } from 'react'
interface StartProps {
    onStart: () => void;
}
 
const Start: FunctionComponent<StartProps> = ({ onStart }) => {
    return ( 
        <div className="bg-white rounded-sm shadow-lg p-8 max-w-md mx-auto text-center">
            <p className="text-xl text-gray-700 mb-6">Use our interactive picker to help you choose your next travel destination</p>
            <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-sm transition" onClick={onStart}>Start</button>
        </div>
     );
}
 
export default Start;