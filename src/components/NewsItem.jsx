import React from 'react'
import {Link} from 'react-router-dom'
const NewsItem = ({list}) => {
  return (
    <div className='article-container'>
    <img src={list.urlToImage} width = "200px"></img>
    <Link to={list.url}>
    <h4>{list.title}</h4>
    </Link>
    <p>{list.description}</p>
    </div>
  )
}

export default NewsItem