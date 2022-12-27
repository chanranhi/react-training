const React = require("react");
const { Component } = React;

class WordRelay extends React.Component {
  state = {
    word: 'Hello webpack',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length - 1]) {
      // 정답
    } else {
      // 땡
    }
  }

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  }

  input;
  onRefInput = (c) => {
    this.input = c;
  }
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRelay;
