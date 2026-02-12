import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Start from './Start'

describe('Start Component', () =>{
  it('renders the description text', () => {
    const mockOnCategorySelect = vi.fn()
    const categories = ['US States', 'Top Travel']
    
    render(<Start categories={categories} onCategorySelect={mockOnCategorySelect} />)
    
    expect(screen.getByText(/Use our interactive picker/i)).toBeInTheDocument()
  })

  it('renders all category buttons', () =>{
    const mockOnCategorySelect = vi.fn()
    const categories = ['US States', 'Top Travel', 'Africa']

    render(<Start categories={categories} onCategorySelect={mockOnCategorySelect}/>)

    expect(screen.getByText('US States')).toBeInTheDocument()
    expect(screen.getByText('Top Travel')).toBeInTheDocument()
    expect(screen.getByText('Africa')).toBeInTheDocument()
  })

  it('calls onCategorySelect when a button is clicked', () =>{
    const mockOnCategorySelect = vi.fn()
    const categories = ['US States', 'Top Travel']

    render(<Start categories={categories} onCategorySelect={mockOnCategorySelect}/>)
    const button = screen.getByText('US States')
    fireEvent.click(button)

    expect(mockOnCategorySelect).toHaveBeenCalledWith('US States')
    expect(mockOnCategorySelect).toBeCalledTimes(1)
  })
})