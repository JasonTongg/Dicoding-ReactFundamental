import React, {useState} from 'react'
import '../Styles/Add.css'
import SecondLayout from '../Layouts/SecondLayout'
import { addNote } from '../Components/local-data'
import { useNavigate } from 'react-router-dom'

export default function Add() {
    let [data, setData] = useState({})
    let navigate = useNavigate();
    return (
        <SecondLayout>
            <div className="addContainer">
                <input type="text" placeholder='Title...' onChange={(e) => setData({
                    ...data,
                    title: e.target.value
                })}/>
                <textarea placeholder='Body...' rows={20} onChange={(e) => setData({
                    ...data,
                    body: e.target.value
                })}></textarea>
                <button onClick={() => {
                    addNote(data);
                    navigate("/");
                }}>Submit</button>
            </div>
        </SecondLayout>
    )
}
