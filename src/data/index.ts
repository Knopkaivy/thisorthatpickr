import { usStates } from './states';
import { worldCountries } from './countries';

export interface Option {
    name: string;
    image: string;
    categories: string[];
}


export const allOptions: Option[] = [...usStates, ...worldCountries];

export const getOptionsByCategory = (category: string): Option[] => {
    return allOptions.filter(option => option.categories.includes(category));
};

export const getAllCategories = (): string[] => {
    const categories = new Set<string>();
    allOptions.forEach(option => {
        option.categories.forEach(cat => categories.add(cat));
    });
    return Array.from(categories).sort();
};