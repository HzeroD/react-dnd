import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'

const SearchForm = (props) => {
    const [formData, handleChange] = useForm({query: ''})

    const handleSubmit = e => {
        e.preventDefault()
        props.handleSpellSearch(formData)
    }

    return (
        <>
          <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={formData.query} 
                name="query"
                onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>
          </div>
        </>
    )
}

export default SearchForm;