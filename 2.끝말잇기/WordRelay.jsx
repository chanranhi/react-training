const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = React.useState('');
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[this.state.word.length - 1] === value[0]) {
      setWord(value);
      setResult('딩동댕');
      setValue('');
      inputRef.current.focus();
    } else {
      setWord(value);
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  }

  const onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  }

  const onRefInput = (c) => {
    this.input = c;
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input id="wordInput" ref={onRefInput} value={value} onChange={onChangeInput} />
        <button className="wordBtn">입력</button>
      </form>
      <div>{result}</div>
    </>
  )
}

module.exports = WordRelay;
