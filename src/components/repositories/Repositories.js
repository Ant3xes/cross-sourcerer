import React from 'react'
import {Repositories} from '../../data/schema'
import { useQuery } from '@apollo/client';
import {Button, Spinner, Card, Accordion, CardDeck, Row, Image} from 'react-bootstrap'
// import './Presentation.css'
import {formatLanguages} from '../../helpers/helpers'

export default () => {
    const { loading, error, data } = useQuery(Repositories);
    if (loading) {
      return <Spinner animation="border"/>;
    }
    if (error) {
        console.log(error)
      return <Button variant="danger">Error Loading data 😡 </Button>;
    }
    if (data) {
        const repositories = data.user.repositories.nodes;
        console.log(repositories)
        return repositories.map(function (repository) {
          let nbCommits = 0;
          const languages = formatLanguages(repository.languages.nodes)
          if(repository.defaultBranchRef !== null) {
            nbCommits = repository.defaultBranchRef.target.history.totalCount
          }
          return (
              <Row>
                <Accordion className="w-100 m-2">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png' style={{height : '70px', width : '70px', padding :'10px' }}></Image>
                        <text style={{color : 'black', fontWeight : 'bold'}}> { repository.name }  </text> 
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="">
                        { repository.nameWithOwner }
                        <br/>
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png' style={{height : '40px', width : '40px', padding :'10px' }}></Image>{ repository.description }
                        <div>
                        <CardDeck>
                        { languages }
                            <Card>
                                <Card.Body>
                                        <Card.Text>
                                        Commit : { nbCommits }
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
                        </CardDeck>                       
                        </div>
                      </Card.Body>
                    
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Row>
          )
        })
      }
}
