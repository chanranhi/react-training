import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: [],
  };

  timeout = null;
  startTime = null;
  endTime = null;

  onClickScreen = () => {
    const { state } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.'
      });
      this.timeout = window.setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭'
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) * 2);
    } else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '넘성급!'
      });
    } else if (state === 'now') { // 반응속도 체크
      this.endTime = new Date();
      this.setState({
        state: 'waiting',
        message: '클릭해서 시작하세요.',
        result: [...prevState.result, this.endTime - this.startTime],
      })
    }
  };

  onReset = () => {
    this.setState({ result: []})
  }

  renderAverage = () => {
    return this.state.result.length !== 0
      && <>
        <div>평균 시간: {this.state.result.reduce((a,c) => a+c) / this.state.result.length}ms</div>
        <button onClick={this.onReset}>reset</button>
        </>
  }

  render() {
    const {state, message} = this.state;
    return(
      <>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        {this.renderAverage()}
      </>
    )
  }
}

export default ResponseCheck;
