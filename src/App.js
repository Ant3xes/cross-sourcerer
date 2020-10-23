import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Overview from './components/overview/Overview'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import Presentation from './components/presentation/Presentation'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_GITHUB_TOKEN
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
     <Header/>
     <br/>
     <Overview/>
     <br/>
     <Presentation/>
    </div>
    </ApolloProvider>
  );
}

export default App;
