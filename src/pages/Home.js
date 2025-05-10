import React, {useState, useEffect} from 'react';
import { RefHook } from '../components/RefHooks';

export default function Home() {
  const [userData, setUserData] = useState([
    {id:1, name:'ajay', location:'pune'},
    {id:2, name:'akshay', location:'delhi'},
    {id:3, name:'ananya', location:'banglore'}
  ])
  const studentList = [
    {id:4, name:'pratibha', location:'pune'},
    {id:5, name:'ankita', location:'pandharpur'}
  ]

  useEffect(() => {
    console.log('userdata changed');
    return()=>{
      console.log('unmount function called')
    }

  }, [userData])
  
  return (
    <>
    <h2>Home page</h2>
    <div>User data</div>
    <button onClick={() => setUserData([...userData, ...studentList])}>Add 2 list</button>
     {/* <div>name: {userData[0].name} location-{userData[0].location}</div> */}
     <ul>
     {
      userData.map(student => {
       return <li key={student.id}>{student.id} name:{student.name} location: {student.location}</li>
      })
     }
     </ul>
    </>
  )
}
