import React, {Component, Fragment} from 'react';

class DayCard extends Component {
  // state={
  //   days:days
  // }
  render(){
    console.log('props',this.props)
    return (
      <div className="day-card">
        <div className="day-img">
            <div className={this.props.day.name}></div>
        </div>
        <p>{this.props.day.num}. {this.props.day.name}</p>
      </div>
    );
  }
}

export default DayCard;
