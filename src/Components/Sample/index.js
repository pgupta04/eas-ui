import React, { Component } from 'react';
// import _ from 'lodash';
import axios from 'axios';
import SampleSearch from '../SampleSearch';
import SampleResult from '../SampleResult';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Sample extends Component {

    constructor(props){
        super(props);
        this.state = {
            sampleBarCode : '',
            searchResults : [],
            historyDialogOpen : false,
            historyResults : [],
        }
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
    }

    sampleSearch(sampleBarCode){
        axios
            .get(`http://127.0.0.1:8080/sample/${sampleBarCode}`)
            .then(res => {
                this.setState({ searchResults: res.data })})
            .catch(err => console.log(err));
    }

    onSearchTermChange = (sampleBarCode) => {
        // _.debounce(term => {this.sampleSearch(sampleBarCode)},300);
        this.sampleSearch(sampleBarCode);

    }

    render(){
        return (
          <div>
              <AppBar>
                  <Toolbar>
                      <IconButton color="inherit" aria-label="Menu">
                          <MenuIcon />
                      </IconButton>
                      <Typography variant="headline" component="h2" color="inherit">
                          EAS
                      </Typography>
                      <Typography component="p"  color="inherit">
                          Solution for Sample Handling
                      </Typography>
                  </Toolbar>
              </AppBar>
              <br/><br/><br/>
              <SampleSearch onSearchTermChange={this.onSearchTermChange}></SampleSearch>
            <SampleResult searchBarCode={this.state.sampleBarCode} searchResults={this.state.searchResults} onHistoryClick={this.onHistoryClick}></SampleResult>
          </div>
        );
    }
}

export default Sample;
