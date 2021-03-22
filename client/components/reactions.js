import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getLoggedInUserId } from '../lib/auth'

export default function Reaction({ actId }) {
  const [act, updateAct] = useState({})
  const token = localStorage.getItem('token')
  const currentUserId = getLoggedInUserId()


  useEffect(() => {
    axios.get(`api/acts/${actId}`)
      .then(resp => updateAct(resp.data))
  },[act])


  if (!act.id) {
    return <h1>loading</h1>
  }


  function handleClick(event) {
    event.stopPropagation()
    try {
      axios.put(`/api/reactions/${actId}`, { reaction_type: '❤️' }, { headers: { Authorization: `Bearer ${token}` } })
    } catch (err) {
      console.log(err)
    }
  }

  function hasUserAlreadyReacted() {
    const userList = act.reactions.map((reaction) => reaction.user.id)
    return userList.find(userId => userId === currentUserId)
  }


  return <div className="columns is-mobile">
    <div className="column">
      <button className={hasUserAlreadyReacted() ? 'button is-danger is-rounded is-small mb-2 ml-2' : 'button is-dark is-rounded is-small mb-2 ml-2'} onClick={event => handleClick(event)}>
        <span>❤️</span>
        <span className="has-text-white is-size-7 pl-2">{act.reactions.length}</span>
      </button>
    </div>
  </div>
}
