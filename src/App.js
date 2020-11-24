import React, {Component, Fragment} from 'react';
import './App.css';
import days from './components/Days'
import DayCard from './components/DayCard'

class App extends Component {
  // state={
  //   days:days
  // }

  // hello

  render(){
    console.log('days', days)
    let daysArray = days.map(
      day=>(
        <DayCard
        key={day.num}
        day={day}
        />
      ))
    return (
      <div className="App">
        <header className="App-header">
          <p>Codevember 2019</p>
          <p>Ariel Jakubowski</p>
        </header>
        <div className="day-card-grp">
        {daysArray}
        </div>
      </div>
    )
  }
}

export default App;
