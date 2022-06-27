import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component{

    state = {
        firstName : '',
        lastName: '',
        // channel: "quyetdaica09",

    }

    handleOnChange = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangeFirst = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangeLast = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmitForm = () =>{
        console.log(this.state)
    }

    hanđleOnClickMe = () =>{
        alert("This is Quyet dai ca...!");
        console.log("This is Quyet dai ca")
    }

    render(){
        return(
            <>
                <form>
                    <label htmlFor="">First Name: </label>
                    <input type="text"
                         value={this.state.firstName}
                        onChange = {(event) => this.handleOnChangeFirst(event)}   
                    />
                    <br/>
                    <label htmlFor="">Last Name: </label>
                    <input type="text"
                        value={this.state.lastName}
                        onChange = {(event) => this.handleOnChangeLast(event)}
                    />
                    <br/>
                    <button type="button" onClick={() => this.handleSubmitForm()}>Submit</button>
                </form>
                
                
                
                {/* <div>
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
                <div>
                    <button onClick={() => this.hanđleOnClickMe()}>Click Me</button>
                </div> */}
                <ChildComponent name={"Child 01"} age={'22'}/>
            </>
        )
    }
}

export default MyComponent