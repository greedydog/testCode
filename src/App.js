
import './App.css';
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
// import axios from 'axios'
import NewsItem from './components/NewsItem';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import Talk from './components/Talk';
import Login from './components/Login';
import Main from './components/Main';

function App() {

  // let url = "https://newsapi.org/v2/top-headlines?country=kr&apiKey=fa8d9d2a4b2a41b6805c902f4a3d8929"
 
  const [newsList, setNewsList] = useState([])
   
  /*
   Mission 1) 기사 데이터를 가지고와보자!
   - axios 사용
   - get 방식
   - console창에 기사와 관련되 배열을 띄워보자
   - 캡쳐해서 단톡방에 업로드s
  */
   useEffect(() => {
    console.log('changed newsList : ', newsList)
  }, [newsList])


   useEffect(()=>{
    //getDataWithFetch()
    getDataWithAxios()
  },[])
  
  const getDataWithAxios = () => {
    // console.log('getDataWithAxios')
    // axios.get(url)
    // .then(res => {setNewsList(res.data.articles)})
    // .then(res => {console.log(res.data.articles[0].author)})
      
    }
  return (
    <div className="App">
     
     <Header/>
     <Routes>
      
      <Route path='/' element={<Main newsList={newsList}/>}></Route>
      <Route path='/talk' element={<Talk/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      
      
      </Routes>
    </div>
  );
}

export default App;
