import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (
      <header>
        <h1 className="logo">Logo</h1>
        <nav>
          <a href="#">Create ads</a>
          <a href="#">About us</a>
          <a href="#">Log in</a>
          <a href="#" className="register-btn">Register</a>
        </nav>
      </header>
    )
  }
}
