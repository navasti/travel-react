import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';

const CurrentPage = props => {
  const current = props.current;

  useEffect(()=>{
    const allA = [...document.querySelectorAll('.current-page a')];
    allA.forEach(a => a.classList.remove('active'));
    if(current.includes("australia")){
      filtering(allA, 'australia')
     }else if(current.includes("vietnam")){
      filtering(allA, 'vietnam')
     }else if(current.includes("indonesia")){
       filtering(allA, 'indonesia')
     }else if(current.includes("thailand")){
      filtering(allA, 'thailand')
    }else if(current.includes("malaysia")){
      filtering(allA, 'malaysia')
    }
  })

  const filtering = (anchors, destination) => {
    const filtered = anchors.filter(a => a.href.includes(destination));
    filtered.forEach(a=>a.classList.add('active'))
  }

  return (
    <div className="current-page">
      <Link to="/australia"><i className="fas fa-circle"></i></Link>
      <Link to="/vietnam"><i className="fas fa-circle"></i></Link>             
      <Link to="/indonesia"><i className="fas fa-circle"></i></Link>
      <Link to="/thailand"><i className="fas fa-circle"></i></Link>
      <Link to="/malaysia"><i className="fas fa-circle"></i></Link>
    </div>
  )
}

export default CurrentPage
