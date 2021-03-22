import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { getLoggedInUserId } from '../lib/auth'
//import { getLoggedInUserId }  from '../lib/auth'
// import { Link, withRouter } from 'react-router-dom'

export default function AdminDashboard() {

  const [orders, updateOrders] = useState([])
  const [stage, updateStage] = useState('Diamond')
  const [user, updateUser] = useState({})
  const [ready, readyToCollect] = useState({
    ready_to_collect: true
  })



  const token = localStorage.getItem('token')


  useEffect(() => {
    async function fetchOrders() {
      try {
        const { data } = await axios.get('/api/order', { headers: { Authorization: `Bearer ${token}` } })
        updateOrders(data)

      } catch (err) {
        console.log(err)
      }
    }
    fetchOrders()

  }, [])

  {/* Refresh orders on the page ------------ */ }
  async function refreshOrder() {
    try {
      const { data } = await axios.get('api/order', { headers: { Authorization: `Bearer ${token}` } })
      updateOrders(data)
    } catch (err) {
      console.log(err)
    }
  }


  {/* GET User details ------------ */ }
  useEffect(() => {
    axios.get('api/profile', { headers: { Authorization: `Bearer ${token}` } })
      .then(resp => updateUser(resp.data))
  }, [])

  {/* Change order status ------------ */ }
  async function handleDelete(orderid) {
    await axios.delete(`/api/order/${orderid}`, {
      headers: { Authorization: `Bearer ${token}` }

    })
    refreshOrder()
  }

  {/* Change order status ------------ */ }
  async function handleStatus(orderid) {
    // readyToCollect({ ready_to_collect: true })
    // updateOrderReady(true)
    if (user.is_admin === true) {
      try {
        await axios.put(`/api/order/${orderid}`, ready, {
          headers: { Authorization: `Bearer ${token}` }
        })
      } catch (err) {
        console.log(err)
      }
    } else {
      return console.log('error')
    }
    refreshOrder()
  }


  function orderReady(orders) {
    if (orders.ready_to_collect === true) {
      return true
    }
  }

  function filterByStage() {
    return orders.filter(order => {
      return (order.act.stage_name === stage)
    })
  }

  return <main className="container">
 
    <section className="tabs is-toggle is-fullwidth menuOptions">
      <ul onClick={(event) => updateStage(event.target.innerText)}>
        <li className={(stage === 'Diamond') ? 'is-warning is-active' : 'notactive'} >
          <a>
            <span className="is-mobile-size-5 has-text-weight-bold">Diamond</span>
            
          </a>
        </li>
        <li className={(stage === 'Lion Ring') ? 'is-active' : 'notactive'} >
          <a>
            <span className="is-mobile-size-5 has-text-weight-bold">Lion Ring</span>
          </a>
        </li>
        <li className={(stage === 'Fairground') ? 'is-active' : 'notactive'}>
          <a>
            <span className="is-mobile-size-5 has-text-weight-bold">Fairground</span>
          </a>
        </li>
      </ul>
    </section>



    {/* Your orders section ------------ */}
    <section className="section">
      <div className="columns is-mobile is-vcentered is-centered">
        <div className="column is-full">
          <h2 className="title is-5">Orders</h2>
        </div>
      </div>
      {/* orders ------------ */}
      {filterByStage().map(order => {
        return <div key={order.id} className="box">
          {/* Order title ------------ */}
          <div className={orderReady(order) ? 'columns is-mobile is-vcentered is-centered orderProcess' : 'columns is-mobile is-vcentered is-centered orderToProcess'}>
            <div className="column is-one-third">
              <h6 className="title is-5 has-text-centered">Order #{order.id}</h6>
            </div>
          </div>
          
          {/* Order buttons ------------ */}
          <div className="collection">
            <p className={orderReady(order) ? 'ready title is-4' : 'notready'}>Ready for collection</p>
          </div>

          {/* Order Details Headers ------------ */}
          <div className="columns is-mobile is-vcentered is-centered">
            <div className="column is-one-third has-text-centered"><strong>Items</strong></div>
            <div className="column is-one-third has-text-centered"><strong>Qty</strong></div>
            <div className="column is-one-third has-text-centered"><strong>Price</strong></div>
          </div>
          {/* Order details ------------ */}
          {order.products.map(product =>
            <div key={product.product_name}>
              <div className="columns is-mobile is-vcentered is-centered">
                <div className="column is-one-third has-text-centered">{product.product_name}</div>
                <div className="column is-one-third has-text-centered">1</div>
                <div className="column is-one-third has-text-centered">{`£${product.price.toFixed(2)}`}</div>
              </div>
            </div>
          )}
          {/* Grand total ------------ */}
          <div className="columns is-mobile is-vcentered is-centered">
            <div className="column is-one-third has-text-centered has-text-weight-bold">Total</div>
            <div className="column is-one-third has-text-centered"></div>
            <div className="column is-one-third has-text-centered has-text-weight-bold">{`£${order.products.reduce((total, product) => total + product.price, 0).toFixed(2)}`}</div>
          </div>
          <div className="orderStatus">
            <button onClick={(event) => handleDelete(order.id)} className={orderReady(order) ? 'ready button  is-warning' : 'notready'}>Collected?</button>
            <button className={orderReady(order) ? 'notready' : 'ready button  is-warning'} type="button" onClick={(event) => handleStatus(order.id)}>Ready to collect?</button>
          </div>
        </div>
      })}

    </section>

  </main >
}

