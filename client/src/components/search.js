import React, { Component } from 'react'
import { Consumer } from '../Context'
import Nav from './Nav'
import Logo from './logo.png'

class search extends Component {

    render() {
        return (
            <Consumer>
                {value=>{return(
                    <div className="">
                        <Nav />
                        <div className="container intro-page">
                            <div>
                                <img className="logo" src={Logo} alt="logo"/>
                            </div>
                            <div className="logo-box">
                                <div className="logo-text">
                                    <h1>Dictionary</h1>
                                </div>

                                <form autoComplete="off" onSubmit={value.onSubmit} className="search-box" >
                                    <div>
                                        <input name="word" 
                                           id="search_box"
                                           value={value.state.word} 
                                           onChange={value.onChange}
                                           className="validate browser-default search-txt"
                                           type="text" 
                                           placeholder="Stichwort..."/>
                                    </div>
                                    
                                    <div >
                                        <button className="search-btn btn-floating waves-effect waves-light #cfd8dc blue-grey lighten-4"  type="submit"><i className="fas fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                )}}
            </Consumer>
        )
    }
}

export default search