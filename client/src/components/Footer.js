import React, { useState } from 'react'
import { Consumer } from '../Context'

const Footer = () => {
    const [randomNumber, setRandomNumber] = useState(Math.floor((Math.random() * 2000) + 1));
    return (
        <Consumer>
            {value=>{
                let { github_user:{avatar_url, login, html_url} } = value.state
                return(
                    <footer>
                        <div className="">
                            <div className="row">
                                <div className="col s3 avatar">
                                    <a href={html_url}>
                                        <img src={avatar_url} alt="avatar"/>
                                        <p>{login} on Github</p>
                                    </a>
                                </div>
                                <div className="col s6">
                                    <ul className="row footer-middle">
                                        <li className="col s4"><span>{randomNumber}</span> <br/>million blogs</li>
                                        <li className="col s4"><span>{randomNumber}</span> <br/>billion posts</li>
                                        <li className="col s4"><span>{randomNumber}</span> <br/>minute to join</li>
                                    </ul>
                                </div>
                                
                                <div className="footer-right col s3">
                                    <p>© 2019 Copyright Text</p>
                                </div>
                            
                            </div>
                        </div>
                    </footer>
                )}
            }
            
        </Consumer>
    )
}

export default Footer