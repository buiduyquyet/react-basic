import React from "react";

class MyComponent extends React.Component{

    state = {
        name : "Quyet dai ca",
        channel: "quyetdaica09"
    }

    handleOnChange = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    render(){

        
        return(
            <>
                <div>
                    <input type="text" value={this.state.name} 
                        onChange = {(event) => this.handleOnChange(event)}
                    />
                </div>
                <div className="first">
                    Hello Anh {this.state.name}
                </div>
                <div className="second">
                    This is my Channel: {this.state.channel}
                </div>
            </>
        )
    }
}

export default MyComponent