import React, {useState, useEffect} from 'react'
import MainLayout from '../Layouts/MainLayout'
import "../Styles/Catatan.css"
import {getArchivedNotes} from '../Components/local-data'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { deleteNote } from '../Components/local-data'
import {BsPlusLg} from 'react-icons/bs'

export default function Arsip() {
  let archivedData = getArchivedNotes();
  let [data, setData] = useState(archivedData);
  let [search] = useSearchParams("");
  let navigate = useNavigate();

  useEffect(() => {
    let archive = getArchivedNotes();
    setData(archive.filter(item => item.title.toLowerCase().includes(search.get('search') ? search.get("search").toLowerCase() : "")));
  }, [search])

  return (
    <MainLayout active={[false,true]}>
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
                setData(getArchivedNotes());
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
