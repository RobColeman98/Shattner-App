import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router-dom"
import { IMovies } from './utils/Movietypes';

// let imgArray = new Array();
// imgArray[0].src ="https://images-na.ssl-images-amazon.com/images/I/91OyyEMPgdL._SL1500_.jpg"
export default class MovieCard extends React.Component<IListProps, IListState>{
    constructor(props: IListProps) {
        super(props);
        this.state = {
            movies: [],
           
        }
    }
    componentDidMount() {
        this.fetchMovies()
    }

    fetchMovies = () => {
        fetch("/api/movies")
            .then(data => data.json())
            .then(data => this.setState({ movies: data }))
            .catch(err => console.log(err));
    }

    deleteMovie = async id => {
        try {
            let res = await fetch(`api/movies/${id}`, { method: "DELETE" })
            this.fetchMovies()
            console.log(res);
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return  this.state.movies.map((movies: IMovies)  => (
            <div key={movies.id} className="card text-white bg-dark mb-3">
                <div className="card-header text">{movies.name}</div>
                
                <div className="card-body">
                    <p className="card-text text">{movies.date}</p>
                    <p className="card-text text">{movies.role}</p>
                    <button className="btn bg-primary btn-sm" onClick={()=> this.deleteMovie(movies.id)}>Delete</button>
                    
                </div>
            </div>
        )) // (<h1 key={chirp.id}>{chirp.username}{chirp.message}</h1>)
    }
   
}



interface IListProps {

}

interface IListState {
    movies: Array<object>;
    
}

           
