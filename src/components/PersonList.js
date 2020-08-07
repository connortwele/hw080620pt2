import React from 'react'
import axios from 'axios'


export default class PersonList extends React.Component{
    state = {
        person:[]
    }

    componentDidMount (){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res =>{
            this.setState({person: res.data});
        });
    }


    render(){
        return(
            <ul>
                {this.state.person.map(person =><li key={person.id}> {
                    person.name
                }</li>
                )}
            </ul>
        )
    }
}