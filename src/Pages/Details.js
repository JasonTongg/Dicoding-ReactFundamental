import React from 'react'
import "../Styles/Details.css"
import SecondLayout from '../Layouts/SecondLayout'
import { useParams } from 'react-router-dom'
import {getNote, archiveNote, unarchiveNote} from '../Components/local-data'
import { Link } from 'react-router-dom'

export default function Details() {
  let {id} = useParams();
  let data = getNote(id);

  return (
    <SecondLayout>
      <div className='detailsContainer'>
        <h3>{data.title}</h3>
        <p>{data.createdAt.split("T")[0].split("-").reverse().join("-")}</p>
        <p>{data.body}</p>
        {data.archived ? <Link to="/" onClick={() =>  unarchiveNote(data.id)}>Unarchive Note</Link> : <Link to="/Arsip" onClick={() => archiveNote(data.id)}>Archive Note</Link>}
        <Link to="/">Back to Home</Link>
      </div>
    </SecondLayout>
  )
}
