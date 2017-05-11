import React, { Component } from 'react';
import './Paragraph.css';

export default class Paragraph extends Component {
	render(){
		return (
			<div className="Paragraph">
			<a href="https://www.strava.com/athletes/9022710">~Cyclist</a><br />
			~Print Support Specialist<br />
			<a href="https://github.com/californiacoder91">~Studying Javascript at LambdaSchool<br /></a>
			<br />
			<center><img src = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/14364827_10155213379498066_3131893078457969285_n.jpg?oh=47559052cbb4397f5f3f05a4c45417e2&oe=59BA88B4" />
			<img src = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/12004918_10154172296313066_6181233081117430663_n.jpg?oh=ba256da0ba243b897f2cca4f767876bf&oe=59836186" /></center>
			</div>
			);
	}
}