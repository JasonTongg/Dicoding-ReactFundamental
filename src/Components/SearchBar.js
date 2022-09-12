import React from 'react'
import '../Styles/SearchBar.css'
import {BiSearch} from 'react-icons/bi'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SearchBar() {
  let navigate = useNavigate();
  let [, setValue] = useSearchParams();

  return (
    <div className='searchContainer'>
        <h2 onClick={() => navigate("/")}>NoteApp</h2>
        <div className='inputContainer'>
            <input type="text" placeholder='Search...' onChange={(e) => {
              setValue({"search": e.target.value})
            }}/>
            <button>Search <BiSearch></BiSearch></button>
        </div>
    </div>
  )
}
