import React, {useState, useRef } from 'react'

const Talk = () => {


  const writerRef = useRef()
  const contentRef = useRef()

  const [listArr, setListArr] = useState([
    {writer : "손동연", content : "멋진 기사네요~ 후속작 기대할게요!"}
    ,
    { writer : '나예호',
      content : '여러분들 만나서 즐거웠어요~'}
  ])

  const addComment = () => {
    console.log('addComment Function', writerRef.current.value)
    setListArr([...listArr, {
      writer : writerRef.current.value,
      content : contentRef.current.value
    }])
  }

  return (
    <div>
      <h3>톡톡!</h3>
      <span>기사에 대한 의견을 자유롭게 남겨주세요!</span>
 
    {listArr.map(item => <div key={item.content}><p>{item.content}</p>
      <span>작성자 : {item.writer}</span></div>)}
    <hr/>
    작성자 : <input type='text' ref = {writerRef}/>
    <span>내용</span> <br/>
    <textarea cols='40' rows='4' ref = {contentRef}></textarea>
    <button onClick={addComment}>댓글작성</button>


    </div>//end talk div
  )
}

export default Talk