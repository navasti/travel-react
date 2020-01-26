import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class CurrentPage extends Component{
    componentDidMount(){
      const currentA = [...document.querySelectorAll('.current-page a')];
      currentA.forEach(a => a.classList.remove('active'))
      if(this.props.current.includes("australia")){
        const filtered = currentA.filter(a => a.href.includes('australia'));
        filtered.forEach(a => a.classList.add('active'))
      }else if(this.props.current.includes("vietnam")){
        const filtered = currentA.filter(a => a.href.includes('vietnam'));
        filtered.forEach(a => a.classList.add('active'))
      }else if(this.props.current.includes("indonesia")){
        const filtered = currentA.filter(a => a.href.includes('indonesia'));
        filtered.forEach(a => a.classList.add('active'))
      }else if(this.props.current.includes("thailand")){
        const filtered = currentA.filter(a => a.href.includes('thailand'));
        filtered.forEach(a => a.classList.add('active'))
      }else if(this.props.current.includes("malaysia")){
        const filtered = currentA.filter(a => a.href.includes('malaysia'));
        filtered.forEach(a => a.classList.add('active'))
      }
    }
    render(){
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
}

export default CurrentPage
