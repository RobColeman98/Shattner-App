import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router-dom"
import { ICommercial } from './utils/Commericialstypes';
// import singleMovie from "./singleMovie"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default class CommercialCard extends React.Component<IListProps, IListState>{
    constructor(props: IListProps) {
        super(props);
        this.state = {
            commercials: [],
           
        }
    }
    componentDidMount() {
        this.fetchCommercials();
    }

    fetchCommercials = () => {
        fetch("/api/commercials")
            .then(data => data.json())
            .then(data => this.setState({ commercials: data }))
            .catch(err => console.log(err));
    }

    deleteCommercial = async id => {
        try {
            let res = await fetch(`api/commercials/${id}`, { method: "DELETE" })
            this.fetchCommercials()
            console.log(res);
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return  this.state.commercials.map((commercials: ICommercial)  => (
            <div key={commercials.id} className="card text-white bg-dark mb-3">
                <div className="card-header text">{commercials.name}</div>
                <div className="card-body">
                    <p className="card-text text">{commercials.company} </p>
                   
                    <button className="btn bg-primary btn-sm" onClick={()=> this.deleteCommercial(commercials.id)}>Delete</button>
                    {/* <Link className="Edit" to="./singleMovie">
                    <button className="btn btn-dark btn-sm">Edit</button>
                    </Link>

                    <Switch>
                    <Route exact path = "./singleMovie" component={singleMovie}></Route>
                    </Switch> */}
                </div>
            </div>
        )) // (<h1 key={chirp.id}>{chirp.username}{chirp.message}</h1>)
    }
   
}



interface IListProps {

}

interface IListState {
    commercials: Array<object>;
    
}
