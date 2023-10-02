import React, { Component } from 'react';
import CardListComponent from './components/card-list/CardListComponent';
import SearchBox from './components/search-box/SearchBox';
import './App.css'
export default class App extends Component {
  // order of execution : constructor -> render() mounts componenr for 1st time -> componentDidMount() does api call -> re-renders the component using render()
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // mounting is the first time a component renders onto the dom.
  // so the 1st time react renders a component onto the page that is called mounting.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>
        this.setState(
          ()=>{
             return { monsters : users}
          }
        )
      )
  }

  onSearchChange = (event) => {
    //console.log(event.target.value)
    const searchField = event.target.value.toLowerCase();
    this.setState(() =>{
       return { searchField };
    })
  }

  render() {

    const { monsters, searchField } = this.state
    const { onSearchChange } = this
    const filteredMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchField)
    });

    return (
      <div className='App'>
        <h1 className="app-title">Monsters Rolodex</h1>
        {/* <input className="search-box" type='search' placeholder='search pokemon' onChange={onSearchChange}/> */}

        {/* { filteredMonsters.map((monster)=>{
            return (
              <div key={monster.id}>
                <h2>{monster.name}</h2>
              </div>
            )    
        })} */}
        <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box' placeholder='search monsters'/>
        <CardListComponent monsters={filteredMonsters}/>
      </div>
    )
  }
}
