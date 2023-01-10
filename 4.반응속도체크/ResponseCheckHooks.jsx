import React, {useRef, useState} from "react";

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('waiting');
  const [result, setResult] = useState('waiting');
  const timeout = useRef(null); // class에서 this가 하는 것도 useRef로
  // state가 바뀌면 리랜더링 실행 ref가 바뀌면 리랜더링 실행 안함

  const onClickScreen = () => {
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

  const onReset = () => {
    this.setState({ result: []})
  }

  const renderAverage = () => {
    return this.state.result.length !== 0
      && <>
        <div>평균 시간: {this.state.result.reduce((a,c) => a+c) / this.state.result.length}ms</div>
        <button onClick={this.onReset}>reset</button>
      </>
  }

  return(
    <>
      <div
        id="screen"
        className={state}
        onClick={this.onClickScreen}
      >
        {message}
      </div>
      {(() => {
        // 즉시 실행함수 사용 가능
        // do something
      })()}
      {renderAverage()}
    </>
  )
}

export default ResponseCheck;
