import React, { Component } from 'react';
import Movie from './movies';
import axios from 'axios';

// CONST_BASEURL= 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';


class MoviesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []

        };
    }


    componentWillMount() {
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json'
        axios.get(url).then((resp) => {
            console.log('Resp:', resp);

            this.setState({
                movies: resp.data.feed.entry
            });

        });
    }


    render() {
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index} />
        });
        console.log('The State is:', this.state);
        return (
            <div className="container">
                <div className="center-align">
                    {movieList}
                </div >
            </div>
            
        )
    }
}




export default MoviesContainer;