import React, { Component } from 'react';

export default class ViewUser extends Component {
    constructor(props){
        super(props);
        this.state={
          
        }
    }
    render() {
        return (
            <div>查看用户: {this.props.location.state.username}</div>
        );
    }
}