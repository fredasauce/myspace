import React from "react"
import axios from "axios"
import { Button, Card, Divider, Icon, Image, Header, } from "semantic-ui-react"

class MyAccounts extends React.Component {
  state = { accounts: [], };

  componentDidMount() {
    axios.get("/api/my_accounts")
      .then( res => this.setState({ accounts: res.data, }))
      console.log(this.state.accounts)
  }

  removeFriend = (id) => {
    const { accounts, } = this.state;
    this.setState({ accounts: accounts.filter( a => a.id !== id ), });
  }

  render() {
    const { accounts, } = this.state;
    if (accounts.length > 0) {
      return (
        <div>
          <Header as="h1" textAlign="center">MyFriends</Header>
          <Card.Group itemsPerRow={4}>
            {accounts.map( account =>
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
                <Button color="red" basic onClick={() => this.removeFriend(account.id)}>
                  Remove Friend
                </Button>
              </Card.Content>
              </Card>
            )}
          </Card.Group>
        </div>
      );
    } else {
      return <Header textAlign="center">You Have No Friends</Header>
    }
  }
};

export default MyAccounts;