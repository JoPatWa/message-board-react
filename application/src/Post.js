import React from 'react';
import './Post.css';
import moment from 'moment';

export default (props) => 
    <div className = "postContainer">
<a href ="http://google.com" >{props.title}</a>
<div className = "postContainerBottom">
<p className = "postComments"> {props.comments} Comments </p>
<p> Submitted {moment(props.submitted).fromNow()} </p>
</div>
    </div>

