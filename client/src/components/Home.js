import React from "react"
import axios from "axios"
import { Link, } from "react-router-dom"
import { Header, Image, Card, Button, Divider, } from "semantic-ui-react"

class Home extends React.Component {
  state = { accounts: [], };

  componentDidMount() {
    axios.get("/api/accounts")
      .then( res => this.setState({ accounts: res.data, }))
  }

  addFriend = (id) => {
    const { accounts, } = this.state;
    axios.put(`/api/accounts/${id}`)
      .then( () => this.setState({ accounts: accounts.filter( a => a.id !== id ), }) )
  }

  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">MySpace</Header>
        <br />
        <Link to="/my_accounts">
          <Button color="blue">
            MyFriends
          </Button>
        </Link>
        <br />
        <br />
        <Card.Group itemsPerRow={4}>
          {this.state.accounts.map( account =>
            <Card key={account.id}>
              <Image src={account.avatar} />
              <Card.Content>
                <Divider />
                <Card.Header>
                  {account.name}
                </Card.Header>
                <Card.Meta>
                  Birthday: {account.birthday}
                  <br />
                  Gender: {account.gender}
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Button color="green" basic onClick={() => this.addFriend(account.id)}>
                  Add Friend
                </Button>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
      </div>
    )
  }
}

export default Home;