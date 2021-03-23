import React, { Fragment } from 'react';
import { ICommercial } from './utils/Commericialstypes';
import { IMovies } from './utils/Movietypes';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import MovieCard from './MovieCard';
import CommercialCard from './CommercialCard';
import newMovie from './newMovie';
import newCommercial from './newCommercial'



export default function Home() {
    return (
        <Router>
              <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F03%2F22%2FGettyImages-1027960396.jpg" alt="William-Shatner-pic" id="Shatner"/> 
             
             <nav className="navbar navbar-light bg-primary">
                
                    
                <Link to="/MovieCard">
                        <button type="button" className="btn btn-primary">Show Movies</button>
                    </Link>
                    
                    <Link to="/CommercialCard">
                        <button type="button" className="btn btn-primary"> Show Commercials</button>
                    </Link>

                    <Link to="/newMovie">
                    <button type="button" className="btn btn-primary">Add Movie</button>
                    </Link>

                    <Link to="/newCommercial">
                    <button type="button" className="btn btn-primary">Add Commercial</button>
                    </Link>


                    {/* <Link to="/movie/:id/admin">
							<button type="button" className="btn btn-primary"> Movie Options</button>
						</Link>

                        <Link to="/commercial/:id/admin">
							<button type="button" className="btn btn-primary" >Commercial Options</button>
						</Link> */}
                        
                </nav>
            
        
            
           

            
            <Switch>
                <Route exact path = "/MovieCard" component={MovieCard}></Route>
                <Route exact path = "/CommercialCard" component={CommercialCard}></Route>
                <Route exact path = "/newMovie" component={newMovie}></Route>
                <Route exact path = "/newCommercial" component={newCommercial}></Route>
            </Switch>
        </Router>
    )
}



// export default class Home extends React.Component<IListProps, IListState>{
//     constructor(props: IListProps) {
//         super(props);
//         this.state = {
//             movies: [],
//             commercials: []
//         }
//     }
//     componentDidMount() {
//         this.fetchMovies()
//     }

//     fetchMovies = () => {
//         fetch("/api/movies")
//             .then(data => data.json())
//             .then(data => this.setState({ movies: data }))
//             .catch(err => console.log(err));
//     }

//     deleteMovie = async id => {
//         try {
//             let res = await fetch(`api/movies/${id}`, { method: "DELETE" })
//             this.fetchMovies()
//             console.log(res);
//         } catch (err) {
//             console.log(err)
//         }
//     }

//     render() {
//         return  this.state.movies.map((movies: IMovies, commercial: ICommercial)  => (
//             <div key={movies.id} className="card text-white bg-dark mb-3">
//                 <div className="card-header text">{movies.name}</div>
//                 <div className="card-body">
//                     <p className="card-text text">{movies.date}</p>
//                     <p className="card-text text">{movies.role}</p>
//                     <button className="btn btn-dark btn-sm" onClick={()=> this.deleteMovie(movies.id)}>Delete</button>
//                 </div>
//             </div>
//         )) // (<h1 key={chirp.id}>{chirp.username}{chirp.message}</h1>)
//     }

// }



// interface IListProps {

// }

// interface IListState {
//     movies: Array<object>;
//     commercials: Array<object>;
// }