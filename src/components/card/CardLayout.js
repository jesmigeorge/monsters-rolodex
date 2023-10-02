import React, { Component } from 'react'
import './CardLayout.css'
export default class CardLayout extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
        <div className="card-container" key={id}>
        <img 
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2`}
          width="180"
          height="180"
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    )
  }
}
