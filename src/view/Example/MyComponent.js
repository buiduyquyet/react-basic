import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component{

    state = {
        jobs: [
            {id: 'jb1', title: 'Coder', salary: '500'},
            {id: 'jb2', title: 'Programer', salary: '700'},
            {id: 'jb3', title: 'Developer', salary: '1000'},
        ]

    }

    handleOnClickMe = () =>{
        alert("This is Quyet dai ca...!");
        console.log("This is Quyet dai ca")
    }

    addJob = (job) =>{
        console.log("Check job form MyCom: ", job)
        this.setState({
            jobs: [...this.state.jobs, job]
        })
    }

    render(){
        return(
            <>  
                <AddComponent addJob={this.addJob}/>
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
                <ChildComponent name={this.state.firstName} age={'22'} arrJob={this.state.jobs}/>
            </>
        )
    }
}

export default MyComponent