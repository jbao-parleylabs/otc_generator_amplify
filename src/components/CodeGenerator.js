import React from "react";
import { Button, Form, Container, Grid, Header, Segment, Message } from 'semantic-ui-react';
import './CodeGenerator.css';

function CodeGenerator() {
  const [code, setCode] = React.useState();
  const [errorState, setErrorState] = React.useState();

  const getPostBody = (event) => {
      let postBody = { };
       return postBody;
  };

  const submitForm = (event) => {
        event.preventDefault();
        const recipeUrl = "https://klnklpsjxg.execute-api.us-west-1.amazonaws.com/default/oneTimeCode";
        const postBody = getPostBody(event);
        console.log(postBody);
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.REACT_APP_API_KEY
            },
            body: JSON.stringify(postBody)
        };

        fetch(recipeUrl, requestMetadata)
            .then(res => res.json())
            .then(data => {
                console.log( JSON.parse(data.body).one_time_code);
                if(data.statusCode === 200){
                    setCode(JSON.parse(data.body).one_time_code);
                } else{
                    setErrorState("There was an issue generating the code");
                }

            });
  };
  return (
      <Container>
        <Grid>
            <Grid.Row centered>
                <Grid.Column width={8}>
                        <center>
                            <Header as='h2' >
                                Parley Labs Code Generator
                            </Header>
                        </center>
                      <Segment placeholder>
                          <center><h1>{code}</h1></center>
                          <Form onSubmit={submitForm}>
                          <br/><br/>
                            <Button type='submit' primary >Generate Code</Button>
                          </Form>
                          { errorState
                                   ? (
                                 <Message negative>
                                    <Message.Header>{errorState}</Message.Header>
                                  </Message>
                                   ) : null }
                      </Segment>

                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
  );
}

export default CodeGenerator;
