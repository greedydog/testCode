import React, {useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const boxStyle = {
    margin : '5%'
  }
  /*
    a, submit 같은 몇몇 태그들은 값을 넘기는 기능을 고유하게 가지고 있음
    JS 에서는 다른 페이지로 값을 넘기지 않게 하기 위해서 이벤트를 
    발생하지 않도록 막을 수 있다.

  */
 /*
 
 localStorage
  - 브라우저를 닫았다가 다시 열었을 때도 지속된다.
  - 탭을 여러개 열어도 공유된다.
  - 내가 직접 지우기 전까지는 지속됨
 
 */
    const nav = useNavigate()
    
    const idRef = useRef()
    const pwRef = useRef()
    
    //3) 요소와 연결
  
    const handleLogin = (e) => {
    e.preventDefault();
      console.log('handle Login Function', idRef.current.value,pwRef.current.value);
    // useRef => DOM 요소에 접근할 때 사용하는 리액트 훅
    // "음.. document.getElementBy ! 쓰고 싶다"
    
    // 1)==> import {useRef} from 'react'
    // 2) ref 선언
    // 3) 요소와 연결
    // <요소 ref={ref변수이름}
      if(idRef.current.value === 'admin' && pwRef.current.value === '1234'){
        
        // sessionStorage
        // - 브라우저에 데이터를 저장할 수 있는 저장소 (starage)
        // - 페이지를 새로고침해도 데이터가 사라지지 않고 남아있다.
        // ex) 로그인

        //1-1) session에 데이터 저장하기
        sessionStorage.setItem('userId', idRef.current.value)
        
        console.log("환영합니다"+idRef.current.value+"님!");
        window.location.replace('/')
      }else{
        console.log("잘못된 아이디 혹은 비밀번호입니다.");
        idRef.current.value = ""
        pwRef.current.value = ""
        idRef.current.focus()
      }
 
  }

  
  return (
    <div style={boxStyle}>    
      
      <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" ref={idRef} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={pwRef}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    </div>
  )
}

export default Login