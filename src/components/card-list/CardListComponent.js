import React, { Component } from 'react'
import './CardListComponent.css'
import CardLayout from '../card/CardLayout';
export default class CardListComponent extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
          {monsters.map((monster) => {
              return <CardLayout monster={monster} /> 
          })}
      </div>
    );
  }
}

