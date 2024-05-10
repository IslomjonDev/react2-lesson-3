import React , {useState} from 'react'
import "./CreateUser.css"
import { useDispatch } from "react-redux"
import { addToUsers } from "../../context/usersSlice"

function CreateUser() {


  const [name , setName] = useState("")
  const [profession , setProfession] = useState("")
  const [age , setAge] = useState("")
  const [gender , setGender] = useState("")
  const [tel , setTel] = useState("")


  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      id : new Date().getTime() ,
      name , 
      profession , 
      age: +age , 
      tel : +tel ,
      gender

    }

    
    dispatch(addToUsers(newUser)) 

    setName("")
    setAge("")
    setProfession("")
    setGender("")
    setTel("")

  }
  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
        <input required value={profession} onChange={(e) => setProfession(e.target.value)} type="text" placeholder='profession' />
        <input required value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder='age' />
        <input required value={tel} onChange={(e) => setTel(e.target.value)} type="number" placeholder='phone Number' />
        <select required value={gender} onChange={(e) => setGender(e.target.value)} name="" id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser