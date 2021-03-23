import React, { Fragment } from "react"
import { RouteComponentProps } from "react-router-dom"


export default class newCommercial extends React.Component<IListProps, IListState>{
    constructor(props: IListProps) {
        super(props)
        this.state = {
            name: "",
            company: ""
            
        }
    
    }
    submitCommercial = (name:string, company:string) => {
        fetch("/api/commercials/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name, company})
        })
        .then(res => this.props.history.push("/"))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>)  => { this.setState({ name: e.target.value }) }} value={this.state.name} />
                <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>) => { this.setState({ company: e.target.value }) }} value={this.state.company} />
                
                <button className="btn btn-dark" type="submit" onClick={() => this.submitCommercial(this.state.name, this.state.company)}>
                    Add Commercial!
                    </button>
            </div>
        )
    }
}



interface IListProps extends RouteComponentProps<{ name: string }> {

}

interface IListState {
    name: string,
    company: string
}