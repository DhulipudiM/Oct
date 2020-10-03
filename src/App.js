import React, { Component } from 'react';
import Header from './components/header';
import './styles/styles.css';
import NewsList from './components/news_list';
import JSON from './db.json';
import Footer from './components/footer';


class App extends Component{ 
  state = {
    news : JSON,
    footerText: 'Im a happy footer'
  }

   
    render(){
    
      return (
        <React.Fragment>
          <Header/>
          <NewsList news={this.state.news}>
          <br />
          <h1>We are children</h1>
            </NewsList>  
       
         <Footer footerText={this.state.footerText}/>
        </React.Fragment>
        
      );
    }
  }


export default App;
