import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UsersContext } from "../../contexts/UsersContext";
import { UserSingleContext } from "../../contexts/UserSingleContext";


const Users = () => {
  // PARA UTILIZAR EL USERCONTEXT YA CREADO
  const { users } = useContext(UsersContext);
  const { user } = useContext(UserSingleContext);


  // **** Esto lo he llevado a USERS CONTEXT
  //
  //
  // const [users, setUsers] = useState([])
  // const navigate = useNavigate()
  // useEffect(() => {
  //   fetchAllUsers()
  // }, [])

  // const fetchAllUsers = async () => {
  //   try {
  //     const request = await fetch("http://localhost:5757/users")
  //     // console.log(request);
  //     const users_ = await fetch("http://localhost:5757/users").then(d => d.json()).then(d => d)
  //     setUsers(users_)
  //   } catch (e) {
  //     navigate("/404")
  //   }
  // }



  return (
    <div>
      {users.map(userSingle => <div key={userSingle.id}>
        {JSON.stringify(userSingle)}
        <div>
          <Link to={`/users/${user.id}`}>Go to single user</Link>
        </div>
      </div>)}
    </div>
  )
}

export default Users