import React, {useState} from 'react'
import ShowUser from '../components/ShowUser'

export default function About() {
  const [userData, setUserData] = useState([
      {id:1, name:'ajay', location:'pune'},
      {id:2, name:'akshay', location:'delhi'},
      {id:3, name:'ananya', location:'banglore'}
    ])

  const fruits = ["apple", "banana", "mango","avacado"];

  return (
    <>
    <h2>About page</h2>
    {
      userData.map(student => {
        return <ShowUser student={student}/>
      }
      )
    }
    <ol>
      {fruits.map(fruit => {
        return <li key={fruit}>{fruit}</li>
      })}
    </ol>
</>
  )
}
