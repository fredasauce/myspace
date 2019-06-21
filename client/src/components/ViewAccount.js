import React from "react"
import axios from "axios"
import { Button, Header, Image, Segment, Icon, Divider, } from "semantic-ui-react"

class ViewAccount extends React.Component {
  state = { account: [], posts: [], }

  componentDidMount(id) {
    const account_id = this.props.match.params.id
    axios.get(`/api/accounts/${account_id}`)
      .then( res => {
        this.setState({ account: res.data, })
        return axios.get(`/api/accounts/${account_id}/posts`).then((res) => {
          this.setState({ posts: res.data });
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  render() {
    const {account, posts} = this.state
    return (
      <>
        <Segment.Group horizontal raised>
          <Segment compact>
            <Image src={account.avatar} />
          </Segment>
          <Segment padded="very">
              <Header as="h1" textAlign="left">
                {account.name}
              </Header>
              <Divider />
              <Segment.Group>
                <Segment>
                  Birthday: {account.birthday}
                </Segment>
                <Segment>
                  Gender: {account.gender}
                </Segment>
              </Segment.Group>
            </Segment>
        </Segment.Group>
        <Segment.Group raised>
            <Header as="h2" textAlign="center" style={{padding: '15px 0'}}>{account.name}'s Wall of Posts</Header>
            {posts.map((post) => (
              <Segment padded="very" key={post.id}>
                <Segment raised>
                  <Header as="h3" textAlign="left">
                    {post.author} Posted:
                  </Header>
                  <Divider />
                  <Segment tertiary>{post.body}</Segment>
                  <Divider />
                  <Button.Group> 
                    <Button basic color="blue">
                      <Icon name="thumbs up outline" />
                      Like
                    </Button>
                    <Button basic color="blue">
                      <Icon name="comment outline" />
                      Comment
                    </Button>
                    <Button basic color="blue">
                      <Icon name="pencil" />
                      Edit
                    </Button>
                  </Button.Group> 
                </Segment>
              </Segment>
            ))}
          </Segment.Group>
      </>
    )
  }
}

export default ViewAccount;