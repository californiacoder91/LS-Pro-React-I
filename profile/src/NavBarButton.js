import React, { Component } from 'react';

class NavBarButton extends Component {
	render(){
		return(
			<center><button>
				{this.props.text}
			</button></center>
			);
	}
}

export default NavBarButton;