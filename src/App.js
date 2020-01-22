import React , {Component} from 'react';

import './App.css';
import {Cardlist} from './components/card-list/card-list.components.jsx'
import { Search } from './components/searchBox/search.component'
class App extends Component {
  constructor(){
    super();
    this.state = {monsters :[],
    searchField : ''
  }
  }
  componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster =>{
     return  monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className='App'>
        <h1> Monster Roledex</h1>
      <Search placeholder = {"Search Monsters "} handleChange = {e=>{this.setState({searchField : e.target.value})}}   />
      <Cardlist monsters = {filteredMonster}>
      </Cardlist>
      </div>
    )
}
}

export default App;
