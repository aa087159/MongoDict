import React, { Component } from 'react'
import { Consumer } from '../Context'
import CreateTabs from './CreateTabs'

class data extends Component {
    

    render() {
        return (
            <Consumer>
                {value=>{
                    let { word, data } = value.state
                    if(data.length!==0 && word.length!==0){
                        return(
                                <div className="container">
                                    
                                    {data.map(data=>
                                        <CreateTabs key={data._id} data={data}/>
                                    )}
                                </div>
                            )}}
                    }
            </Consumer>
        )
    }
}

export default data
