import React, { Component } from 'react'

export default class ChildComponent extends Component {

  state = {
    showJob: false
  }

  handleOnClickShow = () => {
    this.setState({
      showJob: !this.state.showJob
    })
  }

  handleDeleteItem = (job) =>{
    this.props.deleteJob(job)
  }

  render() {
    let { arrJob } = this.props;
    let { showJob } = this.state;
    return (
      <>
        {
        showJob === false ?
          <div>
            <button onClick={() => this.handleOnClickShow()}>Show</button>
          </div>
          :
          <>
            <div className='job-list'>
              {
                arrJob.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}$ <></> <span onClick={() => this.handleDeleteItem(item)}>x</span>
                    </div>
                  )
                })
              }
            </div>
            <div>
              <button onClick={() => this.handleOnClickShow()}>Hide</button>
            </div>
          </>
        }
      </>
    )
  }
}
