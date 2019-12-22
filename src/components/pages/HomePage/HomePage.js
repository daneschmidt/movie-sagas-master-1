import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import Details from './../Details/Details';


const mapStateToProps = reduxState => ({
    reduxState,
})

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_HOMEPAGE'
        })
    }

    goToDetails = (id) => {
        console.log(id)
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: id
        })
        // this.props.history.push(`/details/${id}`)
        this.props.history.push('/details/')
        
    }

    render() {
        const movieList = this.props.reduxState.getHomePageReducer.map((item, index) => {
            return (
                <div key={index}
                    onClick={(event) => this.goToDetails(item.id)}
                >
                    
                    <img src={item.poster} alt="Poster"/>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            )
        })
        return (
            <div>
                {movieList}
            </div>
        );
    }
}

export default connect(mapStateToProps)(HomePage);