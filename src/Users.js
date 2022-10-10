import axios from "axios";
import React, { useEffect, useState } from "react";

function Users () {
  const [users, setUsers] = useState(null)
  const [loading, setLoding] = useState(false)
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    try {
      setUsers(null)
      setError(null)
      setLoding(true)
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      setError(e)
    }
    setLoding(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) return <div>로딩중 ...</div>
  if (error) return <div>에러가 발생했습니다</div>
  if (!users) return null

  return (
    <ul>
      {users.map(user =>
        <li key={user.id}>
          {user.username} ({user.name})
        </li>  
      )}
    </ul>
  )
}

export default Users;