import React, { Component } from 'react'
import './SearchBox.css'
export default class 
 extends Component {
  render() {
    return (
        <input 
            className = {`search-box ${this.props.className}`}
            type ='search' 
            placeholder = {this.props.placeholder}
            onChange = {this.props.onChangeHandler}
        />
    )
  }
}
