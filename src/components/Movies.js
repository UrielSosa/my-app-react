import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        const API_BASE_URL = "https://api.themoviedb.org/3/movie/popular";
        const API_KEY = "?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES";

        const API_URL = `${API_BASE_URL}${API_KEY}`;

        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                const { results } = data;
                this.setState({
                    movies: results,
                });
            });
    }

    render() {
        return (
            <div className="projects section" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>
                                    Discover Our <em>Work</em> &amp; <span>Projects</span>
                                </h2>
                                <div className="line-dec" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap">
                            {this.state.movies.map((movie) => {
                                return (
                                    <div className="item col-4" key={movie.id}>
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" />
                                        <div className="down-content">
                                            <h4>{movie.title}</h4>
                                            <Link to={`/movies/${movie.id}`}>
                                                <i className="fa fa-link" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;
