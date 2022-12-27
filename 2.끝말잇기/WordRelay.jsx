const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] =useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]) {
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
  // uncontrolled vs controlled
  // https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onRefInput = (c) => {
    inputRef.current = c;
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
