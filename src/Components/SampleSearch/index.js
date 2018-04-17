import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class SampleSearch extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render(){
        return (
            <div>
                <TextField
                        id="search"
                        label="Search Sample"
                        type="search"
                        margin="normal" 
                        onChange={event => this.onInputChange(event.target.value)}/>            
        </div>
        );
    }
}

