import React, {Component, Fragment} from 'react';
import './App.css';
import days from './components/Days'

class App extends Component {
  // state={
  //   days:days
  // }

  render(){
    console.log('days',days)
    // let daysArray = days.map(
    //     day=>(
    //         <DayCard
    //         key={day.id}
    //         day={day}
    //         />
    //     )
    return (
      <div className="App">
        <header className="App-header">
          <p>Codevember 2019</p>
          <p>Ariel Jakubowski</p>
        </header>
      </div>
    );
  }
}

export default App;
