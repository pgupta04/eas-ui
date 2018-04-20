import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import SampleHistoryDialog from '../SampleHistoryDialogFullScreen';
import SampleIssueDialog from '../SampleIssueDialog';
import SampleTurnInDialog from '../SampleTurnInDialog';

export default class SampleResult extends Component {

    constructor(props){
        super(props);
        console.log('Constr ',this.props.searchBarCode);
        this.state = {
            searchBarCode : this.props.searchBarCode,
            data : [],
            historyDialogOpen : false,
            historyResults : [],
            IssueDialogOpen : false,
            TurnInDialogOpen : false,
        }
        this.onHistoryClick = this.onHistoryClick.bind(this);
        this.onHistoryOk = this.onHistoryOk.bind(this);
        this.onIssueAction = this.onIssueAction.bind(this);
        this.onTurnInAction = this.onTurnInAction.bind(this);
        this.onIssueActionClose = this.onIssueActionClose.bind(this);
        this.onTurnInActionClose = this.onTurnInActionClose.bind(this);
    }

    onHistoryClick = (patientSampleId) => {
        console.log('Inside onHistory', patientSampleId);
        this.setState({ historyDialogOpen: true });
    }

    onHistoryOk = () => {
        console.log('Inside onHistoryOk');
        this.setState({ historyDialogOpen: false });
    }

    onIssueAction = (data) => {
        console.log('Inside onIssueAction');
        this.setState({ IssueDialogOpen: true });
    }

    onTurnInAction = (data) => {
        console.log('Inside onTurnInAction');
        this.setState({ TurnInDialogOpen: true });
    }

    onIssueActionClose = () => {
        console.log('Inside onIssueAction');
        this.setState({ IssueDialogOpen: false });
    }

    onTurnInActionClose = () => {
        console.log('Inside onTurnInAction');
        this.setState({ TurnInDialogOpen: false });
    }

    componentWillMount(){
        console.log('will mount ', this.props.searchBarCode);
    }
    render(){

        const data = this.props.searchResults;

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
                      <TableCell numeric>Sample Type</TableCell>
                      <TableCell numeric>Handling Temperature</TableCell>
                      <TableCell numeric>Issue History</TableCell>
                      <TableCell numeric>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => {
                    return (
                      <TableRow key={n.patientSampleId}>
                        <TableCell numeric>{n.barcode}</TableCell>
                        <TableCell numeric>{n.originalQuantity}</TableCell>
                        <TableCell numeric>{n.remainingQuantity}</TableCell>
                        <TableCell numeric>
                            {(() => {
                                switch (n.status) {
                                    case "s": return "In Storage";
                                    case "i": return "Issued";
                                    case "e": return "Empty";
                                }
                            })()}
                        </TableCell>
                          <TableCell numeric>{n.storageBin.storageBinName}</TableCell>
                          <TableCell numeric>{n.sampleType.sampleTypeName}</TableCell>
                          <TableCell numeric>{n.sampleType.handlingTemp} {n.sampleType.handlingTempUnit}</TableCell>
                          <TableCell numeric><Button color="primary" onClick={()=>this.onHistoryClick(n)}>
                              History
                          </Button></TableCell>
                          <TableCell >
                              {(() => {
                                  switch (n.status) {
                                      case "s": return (<Button variant="raised" color="primary" onClick={(n)=>this.onIssueAction(n)}>Issue</Button>);
                                      case "i": return (<Button variant="raised" color="primary" onClick={(n)=>this.onTurnInAction(n)}>Turn In</Button>);
                                  }
                              })()}
                          </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
                <SampleHistoryDialog dialogOpen={this.state.historyDialogOpen} historyResults={this.state.historyResults} onHistoryOk={this.onHistoryOk}></SampleHistoryDialog>
                <SampleIssueDialog dialogOpen={this.state.IssueDialogOpen} historyResults={this.state.historyResults} onHistoryOk={this.onIssueActionClose}></SampleIssueDialog>
                <SampleTurnInDialog dialogOpen={this.state.TurnInDialogOpen} historyResults={this.state.historyResults} onHistoryOk={this.onTurnInActionClose}></SampleTurnInDialog>
            </div>
          );
    }
}
