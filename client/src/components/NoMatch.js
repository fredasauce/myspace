import React from "react"
import { Link, } from "react-router-dom"
import { Header, } from "semantic-ui-react"

const NoMatch = () = (
  <Header as="h1" textAlign="center">
    404 Error: Page Not Found
    <br />
    Return
    <Link to="/"> Home</Link>
  </Header>
);

export default NoMatch;