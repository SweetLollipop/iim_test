import React, { Component } from 'react';

export default class EidtUser extends Component {
    constructor(props){
        super(props);
        this.state={
          
            
        }
    }
    render() {
        return (
            <div>编辑用户: {this.props.location.state.id}</div>
        );
    }
}