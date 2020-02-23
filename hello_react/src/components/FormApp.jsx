import React, { Component } from 'react';

export class FormApp extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            message: ''
        };
    }
    
    handleInput({target: {value}}){
        this.setState({value}); 
        console.log('handleInput called!');
    }
    
    send(){
        const {value} = this.state;
        //テキストボックスを空にし，入力した内容をmessageに移す
        this.setState({
            value: '',
            message: value
        })
        console.log('send called!');
    }
    
    
    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.handleInput.bind(this)} />
                <button onClick={this.send.bind(this)}>SEND</button>
                <div>
                    {this.state.message}
                </div>
            </div>
        );
    }
}