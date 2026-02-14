import type { FunctionComponent } from 'react'
interface StartProps {
    categories: string[];
    onCategorySelect: (category: string) => void;
}
 
const Start: FunctionComponent<StartProps> = ({ categories, onCategorySelect }) => {
    return ( 
        <div className="bg-white rounded-sm shadow-lg p-4 md:p-8 max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 mb-6 text-center">
                Use our interactive picker to help you choose your next travel destination
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Select a category:
            </p>
            <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategorySelect(category)}
                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-4 md:px-6 rounded-sm transition text-lg"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
 
export default Start;