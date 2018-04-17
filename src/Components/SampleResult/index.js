import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

export default class SampleResult extends Component {

    constructor(props){
        super(props);
        console.log('Constr ',this.props.searchBarCode);
        this.state = {
            searchBarCode : this.props.searchBarCode,
            data : [],
        }
    }


    componentWillMount(){
        console.log('will mount ', this.props.searchBarCode);
    }
    render(){

        const data = this.props.searchResults;
        console.log('render ', data);

        return (
            <div>
                <br/>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sample Code</TableCell>
                    <TableCell numeric>Orig Quantity</TableCell>
                    <TableCell numeric>Remaining Quantity</TableCell>
                    <TableCell numeric>Status</TableCell>
                    <TableCell numeric>Storage Bin</TableCell>
                    <TableCell numeric>Patient Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => {
                    return (
                      <TableRow key={n.sampleTypeId}>
                        <TableCell>{n.sampleTypeId}</TableCell>
                        <TableCell numeric>{n.sampleTypeName}</TableCell>
                        <TableCell numeric>{n.fat}</TableCell>
                        <TableCell numeric>{n.carbs}</TableCell>
                        <TableCell numeric>{n.protein}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
            </div>
          );
    }
}
