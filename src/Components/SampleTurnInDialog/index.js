import React from 'react';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from 'material-ui/transitions/Slide';
import Table from '../Table';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class SampleTurnInDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        console.log('handle Close ', this.state.open);
        this.props.onHistoryOk();
        //this.setState({ open: false });
    };

    render() {
        console.log('Dialog console ', this.state.open);
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
                                Turn In Sample
                            </Typography>
                            <Button color="inherit" onClick={this.handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Table/>
                </Dialog>
            </div>
        );
    }
}

export default SampleTurnInDialog;
