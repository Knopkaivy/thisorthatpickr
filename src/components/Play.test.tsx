import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Play from './Play'

describe('Play Component', () =>{
    it('updates other option on select', () =>{
        const options = [
            {name: 'Option A', image: 'url', categories: ['test']},
            {name: 'Option B', image: 'url', categories: ['test']},
            {name: 'Option C', image: 'url', categories: ['test']},
        ]

        render(<Play category={'test'} options={options} onWinnerSelected={vi.fn()} onBack={vi.fn()}/>)
        
        const initialOptions = [
            screen.queryByText('Option A'),
            screen.queryByText('Option B'),
            screen.queryByText('Option C')
        ].filter(Boolean)

        expect(initialOptions).toHaveLength(2)

        fireEvent.click(initialOptions[0]!)

        const afterClickOptions = [
            screen.queryByText('Option A'),
            screen.queryByText('Option B'),
            screen.queryByText('Option C')
        ].filter(Boolean)

        expect(afterClickOptions).toHaveLength(2)

        expect(screen.getByText(initialOptions[0]!.textContent!)).toBeInTheDocument()
    })

    it('calls winner when last choice is made', () =>{
        const mockOnWinnerSelected = vi.fn()
        const options = [
            { name: 'Option A', image: 'url', categories: ['test'] },
            { name: 'Option B', image: 'url', categories: ['test'] }
        ]
        render(<Play category='test' options={options} onWinnerSelected={mockOnWinnerSelected} onBack={vi.fn}/>)
        
        const firstOption = screen.getByTestId('option-card')
        fireEvent.click(firstOption)

        expect(mockOnWinnerSelected).toBeCalled()
        expect(mockOnWinnerSelected).toBeCalledTimes(1)
        expect(mockOnWinnerSelected).toBeCalledWith(options[0])
    })

    it('rturns to categories when Back button is clicked', () =>{
        const mockOnBack = vi.fn()
        const options = [
            { name: 'Option A', image: 'url', categories: ['test'] },
            { name: 'Option B', image: 'url', categories: ['test'] }
        ]
        render(<Play category='test' options={options} onWinnerSelected={() =>vi.fn()} onBack={mockOnBack}/>)
        const button = screen.getByTestId('back-button')
        fireEvent.click(button)

        expect(mockOnBack).toBeCalled()
        expect(mockOnBack).toBeCalledTimes(1)
    })
})