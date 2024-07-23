import React from 'react'
import Banner from './Banner'

const Header = () => {
  return (
    <div className="headersection">
        <div className="left">
            <div className="title">
                <h2>HI JOSEPH</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li><button>HOME</button></li>
                <li><button>PROJECT</button></li>
                <li><button>ABOUT</button></li>
                <li><button>CONTACT</button></li>
            </ul>
        </div>
        <div className="search">
            <input type='text' placeholder='search..'/>
        </div>
        <div className="right">
            <div className="signin">
                Signin / Signup
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header
