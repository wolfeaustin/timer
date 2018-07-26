import React from "react";
import Split from "./Split";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      highlight: false,
      time: 0.0,
      splits: [],
      clicked: false
    };
  }

  startTimer = () => {
    this.setState({
      clicked: true
    });
    setInterval(this.setTime, 10);
  };

  handleClick = () => {
    this.state.clicked ? this.handleSplit() : this.startTimer();
  };

  handleSplit = () => {
    this.setState({
      splits: [...this.state.splits, this.state.time]
    });
  };

  setTime = () => {
    this.setState({
      time: this.state.time + 1
    });
  };

  format = time => {
    let minutes = Math.floor(time / 6000);
    var formattedMinutes = ("0" + minutes).slice(-2);
    let seconds = ((time % 6000) / 100).toFixed(2);
    let formattedSeconds = ("0" + seconds).slice(-5);
    let formattedTime = `${formattedMinutes}:${formattedSeconds}`;
    return formattedTime;
  };

  clickedSplit = newTime => {
    this.setState({
      highlight: true,
      time: newTime,
      splits: this.state.splits.filter(t => t >= newTime)
    });
  };

  render() {
    return (
      <div className="container">
        <div className="timer-text" onClick={this.handleClick}>
          {this.format(this.state.time)}
        </div>
        <div className="split-text">
          <div className="split-message">Splits</div>
          {this.state.splits.map(e => (
            <Split
              highlight={e === this.state.splits[0] && this.state.highlight}
              key={e}
              time={e}
              formatTime={this.format(e)}
              onClick={this.clickedSplit}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Timer;
