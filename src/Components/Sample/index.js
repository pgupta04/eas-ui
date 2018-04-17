import React, { Component } from 'react';
// import _ from 'lodash';
import axios from 'axios';
import SampleSearch from '../SampleSearch';
import SampleResult from '../SampleResult';

class Sample extends Component {

    constructor(props){
        super(props);
        this.state = {
            sampleBarCode : '',
            searchResults : []
        }
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
    }

    sampleSearch(sampleBarCode){
        console.log('sampleBarCode',sampleBarCode);
        axios
            .get(`http://127.0.0.1:8080/sampleType`)
            .then(res => {
                console.log('sampleBarCode res.data.data ',res.data);
                this.setState({ searchResults: res.data })})
            .catch(err => console.log(err));
    }

    onSearchTermChange = (sampleBarCode) => {
        console.log('sampleBarCode ',sampleBarCode);
        // _.debounce(term => {this.sampleSearch(sampleBarCode)},300);
        this.sampleSearch(sampleBarCode);

    }

    render(){
        return (
          <div>
            <h1>EAS</h1>
            <SampleSearch onSearchTermChange={this.onSearchTermChange}></SampleSearch>
            <SampleResult searchBarCode={this.state.sampleBarCode} searchResults={this.state.searchResults} ></SampleResult>
          </div>
        );
    }
}

export default Sample;
