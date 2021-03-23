import React, { Fragment } from "react"
import { RouteComponentProps } from "react-router-dom"
import {IMovies} from "./utils/Movietypes"
import db from "../server/db/moviesQuery"

export default class newMovie extends React.Component<IListProps, IListState>{
    constructor(props: IListProps) {
        super(props)
        this.state = {
            name: "",
            date: "",
            role: ""
        }
    
    }
    submitMovie = (name:string, date:string, role:string) => {
        fetch("/api/movies/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name, date, role})
        })
        .then(res => this.props.history.push("/"))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>)  => { this.setState({ name: e.target.value }) }} value={this.state.name} />
                <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>) => { this.setState({ date: e.target.value }) }} value={this.state.date} />
                <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>) => { this.setState({ role: e.target.value }) }} value={this.state.role} />
                <button className="btn btn-dark" type="submit" onClick={() => this.submitMovie(this.state.name, this.state.date, this.state.role)}>
                    Add Movie!
                    </button>
            </div>
        )
    }
}



interface IListProps extends RouteComponentProps<{ name: string }> {

}

interface IListState {
    name: string,
    date: string,
    role: string
}