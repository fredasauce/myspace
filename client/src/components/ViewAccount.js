import React from "react"
import axios from "axios"
import { Container, Segment, } from "semantic-ui-react"

class ViewAccount extends React.Component {
  state = { account: [], }

  componentDidMount(id) {
    const account_id = this.props.match.params.id
    axios.get(`/api/accounts/${account_id}`)
      .then( res => {
        this.setState({ account: res.data, })
      })
  }
  
  render() {
    const {account} = this.state
    return (
      <>
      
      </>
    )
  }
}

export default ViewAccount;