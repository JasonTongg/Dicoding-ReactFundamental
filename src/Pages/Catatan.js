import React, {useState, useEffect} from 'react'
import MainLayout from '../Layouts/MainLayout'
import {getActiveNotes, deleteNote} from '../Components/local-data'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import "../Styles/Catatan.css"
import {BsPlusLg} from 'react-icons/bs'

export default function Catatan() {
  let activeData = getActiveNotes();
  let navigate = useNavigate();
  let [data, setData] = useState(activeData);
  let [search] = useSearchParams("");

  useEffect(() => {
    let active = getActiveNotes();
    setData(active.filter(item => item.title.toLowerCase().includes(search.get('search') ? search.get("search").toLowerCase() : "")));
  }, [search])

  return (
    <MainLayout active={[true,false]}>
      <div className='activeContainer'>
        <button className='add' onClick={() => navigate("/New")}><BsPlusLg></BsPlusLg></button>
        {data.length !== 0 ? 
          data.map((item, idx) => (
            <div className='activeItem' key={idx}>
              <h3>{item.title}</h3>
              <p className='create'>{item.createdAt.split("T")[0].split("-").reverse().join("-")}</p>
              <p>{item.body}</p>
              <Link to={`/Details/${item.id}`}>Details</Link>
              <button onClick={() => {
                deleteNote(item.id);
                setData(getActiveNotes());
              }}>Delete</button>
            </div>
          ))
        :
          <h1>Data is Empty</h1>
      }
      </div>
    </MainLayout>
  )
}
