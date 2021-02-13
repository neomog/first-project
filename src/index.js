import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './component/Header';
import About from './component/links/About';
import Logo from './logo.png';
import Form from './component/Form';
import Footer from './component/Footer';
import Powered from './component/Powered';
import JSON from './db.json';


//COMPONENTS
// import Header from './components/header'
// import JSON from './db.json'
// import NewsList from './components/news_list'

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       news: JSON,
//       filtered:JSON
//     }
//   }

//   filterNews(keywords) {
//     let filtered = this.state.news.filtered((item)=>{
//       return item.title.indexOf(keywords) > -1;
//     })

//     this.setState({filtered:filtered})
//     console.log(filtered);

//   }

//   render() {
//     return (
//       <div>
//         <Header newsSearch={keywords =>this.filterNews(keywords)}/>
//         <NewsList news={this.state.filtered}/>
//       </div>
//     )
//   }

// }

class App extends Component {
  constructor () {
    super();

    this.state = {
      news: JSON
    };
  }
  render () {
    const {id, title, feed} = this.state.news;
    const users = this.state.news.map((user) => {
      return (
        <div>
        <h1>{user.id}</h1>
        <p> {user.title} {user.feed} </p>
      </div>
      )
    })
    return (
          <Router>
            <div>
              <Header logo={Logo}/>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Form />
                  <div> {users} </div>
                  <Powered />
                  <Footer />
                </Fragment>
              )}/>
                <Route path='/about' component={About} />
            </div>
          </Router>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector('#root'));