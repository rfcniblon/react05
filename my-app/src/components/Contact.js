import React from 'react'

class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state = {online:false}
    }
    render(){
    return(
        <figure className="Contact">
            
            <img className = "avatar"
                src={this.props.user.avatar}
                alt={this.props.user.name}/>
            <div 
                    >
                <h2 className = "name"> {this.props.user.name} </h2>
                <div className= "status" onClick = {event=> {
                        let newOnline = !this.state.online;
                        this.setState({ online: newOnline});}}>
                    <span className = 
                    {this.state.online ? "status-online": "status-offline"}>    
                    </span>
                    <span> {this.state.online ? 
                    <p className= "status-text">Online</p> : 
                    <p className= "status-text"> Offline</p> }
                    </span>
              </div>  
            
                          
            </div>
        </figure>
    )
}
}

export default Contacts