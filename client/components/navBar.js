import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = ({ history }) => {
  const [menu, showMenu] = useState(false)
  const [user, updateUser] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    axios.get('api/profile', { headers: { Authorization: `Bearer ${token}` } })
      .then(resp => updateUser(resp.data))
  }, [])


  {/* Refresh buttons on the nav ------------ */ }
  async function refreshNavBar() {
    try {
      const { data } = await axios.get('api/profile', { headers: { Authorization: `Bearer ${token}` } })
      updateUser(data)
    } catch (err) {
      console.log(err)
    }
    showMenu(!menu)
  }

  function handleLogout() {
    localStorage.removeItem('token') // ! This logs you out.
    history.push('/lineup')
    updateUser({})
  }

  function hideNav() {
    showMenu(false)
  }

  
  let nav

  if (menu) {
    nav = <div>
      <ul className="menu-list">
        <li></li>
        <li><Link onClick={hideNav} to="/lineup" className="navitem navmen">Line Up</Link></li>
        <li>{localStorage.getItem('token') && <Link onClick={hideNav} to="/menu" className="navitem navmen">Menu</Link>}</li>
        <li>{(user.is_admin === true) && <Link onClick={hideNav} to="/admin" className="navitem navmen">Admin</Link>}</li>
        <li>{!localStorage.getItem('token') && <Link onClick={hideNav} to="/signup" className="navitem navmen">Sign Up</Link>}</li>
        <li>{!localStorage.getItem('token') && <Link onClick={hideNav} to="/login" className="navitem navmen">Login</Link>}</li>
        <li>{localStorage.getItem('token') && <a onClick={handleLogout} className="navitem navmen">Logout</a>}</li>
        <li></li>
      </ul>
    </div>
  }

  return <nav className="nav-color">
    <div className="newnav">

      <a role="button" onClick={() => refreshNavBar()}>
        <img src="https://i.imgur.com/HrNYiZb.png" alt="navigation menu" className="navimg" ></img>
      </a>
      <Link to={{ pathname: '/' }}><h1 className="glow-nav">Dreamland</h1></Link>
      <Link to={!localStorage.getItem('token') ? '/login' : '/profile'}>
        <img alt="go to profile" className="navimg" src="https://i.imgur.com/5GW7BSv.png"></img>
      </Link>
    </div>
    <div>{nav}</div>
  </nav>


}

export default withRouter(NavBar)