import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Arrows extends Component{
    render(){
        return (
            <>
            <div className="right">
                <Link to={this.props.nextPage}><i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="left">
                <Link to={this.props.prevPage}><i className="fas fa-arrow-left"></i></Link>
            </div>
            </>
        )
    }
}

export default Arrows
