import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import posts from './data/posts'
import Post from './Post';
import moment from 'moment';
import AddPost from './AddPost'
import _ from 'lodash'
import firebase from 'firebase';

    class App extends Component {
      constructor(props) {
        super(props)
        this.state = {
          posts: {}
        }
        firebase.database().ref('posts')
          .on('value', (snapshot) => {
            this.setState({ posts: snapshot.val() })
          })
      }

      render() {
        return (
          <div className="App">
            <AddPost onAdd={(posts) => {
              const newRedditPost = { ...posts, comments: 5, submitted: moment().format() }
              firebase.database().ref('posts').push(newRedditPost)
            }}
            />
            {_.map(this.state.posts, posts => {
              return <Post
                key={posts.title}
                title={posts.title}
                comments={posts.comments}
                submitted={posts.submitted}
              />
            })}
          </div>
        );
      }
    }
    export default App;

    

