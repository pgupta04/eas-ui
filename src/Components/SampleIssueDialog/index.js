import React from 'react';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from 'material-ui/transitions/Slide';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import { cloneDeep } from 'lodash';
import Paper from 'material-ui/Paper';


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class SampleIssueDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            issueRecord:{
                barcode:'',
                originalQuantity:'',
                remainingQuantity:'',
                status:'',
                storageBin: {
                    storageBinName: '',
                },
                sampleType:{
                    sampleTypeName:'',
                    handlingTemp:'',
                    handlingTempUnit:'',
                },
            },
            issueTo: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        open: false,
    };

    handleChange = event => {
        this.setState({ issueTo: event.target.value });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        console.log('handle Close ', this.state.open);
        this.props.onHistoryOk();
        //this.setState({ open: false });
    };

    componentWillReceiveProps(nextProps){
        console.log('nextProps', nextProps);
        console.log('nextProps', nextProps.issueRecord);
        //if(nextProps.issueRecord != 'undefined')
        if(nextProps.issueRecord != undefined) {
            console.log('setting')
            this.state.issueRecord = nextProps.issueRecord;
        }
    }

    render() {
        console.log('issueRecord ', this.state.issueRecord);
        console.log('issueRecord from prop ', this.props.issueRecord);
        this.state.open = this.props.dialogOpen;

        return (
            <div>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    transition={Transition}
                >
                    <AppBar>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit">
                                Issue Sample
                            </Typography>
                            <Button color="inherit" onClick={this.handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <br/><br/><br/><br/><br/><br/>
                            <FormControl>
                                    <InputLabel htmlFor="name-disabled">Sample Code</InputLabel>
                                    <Input id="name-disabled" value={this.state.issueRecord.barcode} disabled/>
                                    <InputLabel htmlFor="name-disabled">Origional Quantity</InputLabel>
                                    <Input id="name-disabled" value={this.state.issueRecord.originalQuantity} disabled/>
                                    <InputLabel htmlFor="name-disabled">Remaining Quantity</InputLabel>
                                    <Input id="name-disabled" value={this.state.issueRecord.remainingQuantity} disabled/>
                                <InputLabel htmlFor="name-helper">Issue To</InputLabel>
                                <Input id="name-helper" value={this.state.issueTo} onChange={this.handleChange} />
                            </FormControl>
                </Dialog>
            </div>
        );
    }
}

export default SampleIssueDialog;
