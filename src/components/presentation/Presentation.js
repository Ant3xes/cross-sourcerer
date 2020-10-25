import React from 'react'
import {infoUser} from '../../data/schema'
import { useQuery } from '@apollo/client';
import {Button, Spinner, Image, Card, Nav, CardDeck} from 'react-bootstrap'
import './Presentation.css'
import {countLinesOfCode, countNumberCommits} from '../../helpers/helpers'

export default () => {
    const { loading, error, data } = useQuery(infoUser);
    if (loading) {
      return <Spinner animation="border"/>;
    }
    if (error) {
        console.log(error)
      return <Button variant="danger">Error Loading data 😡 </Button>;
    }
    if (data) {
        console.log(data.user.repositories.nodes)
        return (
            <div>
                <Card>
                  <Card.Body>
                      <Nav>
                      <Nav.Item>
                          <Nav.Link disabled> <Image className="avatar" src={data.user.avatarUrl} roundedCircle style={{height : '100px', width : '100px', padding :'10px'}} /></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link disabled as="h5">{data.user.name}</Nav.Link>
                          <Nav.Link disabled as="h5">{data.user.login}</Nav.Link>
                      </Nav.Item>
                      </Nav>
                  </Card.Body>
                  <Card/>
                  <br/>
                  <CardDeck>
                  <Card>
                      <Card.Body>
                      <Card.Title>Commit</Card.Title>
                      <Card.Text>
                      {countNumberCommits(data.user.repositories.nodes)}
                      </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Body>
                      <Card.Title>Repos</Card.Title>
                      <Card.Text>
                          {data.user.repositories.nodes.length}
                      </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Body>
                      <Card.Title>Lines of codes</Card.Title>
                      <Card.Text>
                      {countLinesOfCode(data.user.repositories.nodes)}
                      </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Body>
                      <Card.Title>Followers</Card.Title>
                      <Card.Text>
                      {data.user.followers.totalCount}
                      </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Body>
                      <Card.Title>Following</Card.Title>
                      <Card.Text>
                      {data.user.following.totalCount}
                      </Card.Text>
                      </Card.Body>
                  </Card>
                  </CardDeck>
            </Card>
            </div>
        )        
    }
}
