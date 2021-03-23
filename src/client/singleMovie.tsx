// import React, { Fragment } from "react"
// import { RouteComponentProps } from "react-router-dom";
// import movies from "../server/db/moviesQuery"
// import { IMovies } from "./utils/Movietypes"


// export default class singleMovie extends React.Component<IAppProps, IAppState>{
//     constructor(props: IAppProps) {
//        super(props)
//         this.state = {
//             name: "",
//             date: "",
//             role: "",
//             id: ""
//         }
//     }

//     componentDidMount() {
//         this.makeMovie()
//     }
//     makeMovie = () => {
//         fetch(`/api/movies/${this.props.params.id}`)
//             .then(data => data.json())
//             .then(data => this.setState({ id: data }))
//             .catch(err => console.error(err))
//     }

//     deleteMovie = (id) => {
//         try {
//             fetch(`api/movies/${id}`, { method: "DELETE" })
//             this.makeMovie()
//                 .then(res => this.props.history.push("/"))
//         } catch (err) {
//             console.log(err)
//         }
//     }

//     editMovie = (id: string) => {
//         try {
//             name: movies.name;
//             date: movies.date;
//             role: movies.role
//         } catch (err) {
//             console.log(err)
//         }
//     }
//     saveMovie = (id:string, name: string, role: string) => {
//         try {
//             let res = fetch(`api/movies/${id}`, {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ name: movies.name, date: movies.date, role: movies.role })
//             })
//             console.log(res)

//         } catch (err) {
//             console.log(err)
//         }
//     }

     
//     render() {
//         return(
//             <div>
                 
//                 <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>)  => { this.setState({ name: e.target.value }) }} value={this.state.name} />
//                 <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>) => { this.setState({date: e.target.value }) }} value={this.state.date} />
//                 <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>) => { this.setState({role: e.target.value }) }} value={this.state.role} />
                
//                 <button className="btn btn-primary" type="submit" onClick={() => this.saveMovie(this.state.name, this.state.date, this.state.role)}>
//                    Submit Blog!
//                     </button>
//             </div>
//         )
//     }

// }


// interface IAppProps extends RouteComponentProps<{IMovies}> {

// }


// interface IAppState {
//     name: string,
//     date: string,
//     role: string
//     id: string

// }