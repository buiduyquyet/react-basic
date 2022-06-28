import React, { Component } from 'react'

export default class AddComponent extends Component {
    state = {
        title : '',
        salary: '',
    }

    handleOnChange = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handleOnChangeTitle = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handleOnChangeSalary = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmitForm = () =>{
        console.log(this.state)
        if (!this.state.title || !this.state.salary) {
            alert("Missing requied parasm");
            return;
        }
        this.props.addJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title:'',
            salary:''
        })
    }

  render() {
    return (
      <>
            <form>
                    <label htmlFor="">Job's Title: </label>
                    <input type="text"
                         value={this.state.title}
                        onChange = {(event) => this.handleOnChangeTitle(event)}   
                    />
                    <br/>
                    <label htmlFor="">Salary: </label>
                    <input type="text"
                        value={this.state.salary}
                        onChange = {(event) => this.handleOnChangeSalary(event)}
                    />
                    <br/>
                    <button type="button" onClick={() => this.handleSubmitForm()}>Submit</button>
                </form>
      </>
    )
  }
}
