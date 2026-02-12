import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Result from './Result'

describe('Result Component', () =>{
    it('calls restart on Start Over button click', () =>{
        const mockOnRestart = vi.fn()
        const winner = {name: 'test name', image: 'url', categories: ['test category']}
        render(<Result winner={winner} onRestart={mockOnRestart}/>)

        const button = screen.getByTestId("start-over-button")
        fireEvent.click(button)

        expect(mockOnRestart).toBeCalled()
        expect(mockOnRestart).toBeCalledTimes(1)
    })
})