import React, { useState } from 'react'
import SearchForm from "../../components/SearchForm/SearchForm"
import { spellSearch } from "../../services/api-calls"

 const SpellSearch = () => {
    const [spells,setSpells] = useState([])

    const handleSpellSearch = async (formData) => {
        const spellResults = await spellSearch(formData)
        setSpells(spellResults.results)
    }


  return (
    <>
    <div>Such Spellz</div>
    <SearchForm handleSpellSearch={handleSpellSearch} />
    </>
  )
}

export default SpellSearch;