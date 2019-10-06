import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

export class Provider extends Component {
    state = {
        word: '',
        data: [],
        github_user: '',
        github_page:''
    }

    componentDidMount(){
        axios.get("https://api.github.com/users/aa087159", {
        data:{
            client_id: 'd1865a9b7649a916a132',
            client_secret:'4038035eeb90a768fe66738f7a70a80252fce62d'
            }
    })
        .then(res =>{
            this.setState({github_user:res.data})
        })
        .catch(err => console.log(err))
    }
    

    onChange = (e) => {
        const { value,name } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Context.Provider value={
                                {
                                state: this.state,
                                onChange : this.onChange,
                                onSubmit: (e)=>{
                                    e.preventDefault()
                                   fetch('http://localhost:5000/getword', {
                                       method: 'POST',
                                       headers: {
                                           'Accept': 'application/json',
                                           'Content-Type': 'application/json'
                                       },
                                       body: JSON.stringify({"word": `${this.state.word}`})
                                   })
                                   .then(res => res.json())
                                   .then(data => this.setState({data}, () => console.log('data fetched..',
                                   data))) 
                                }
                                
                                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer

