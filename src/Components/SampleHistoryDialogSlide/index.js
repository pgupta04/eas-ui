import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import Table from '../Table';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class SampleHistoryDialogSlide extends React.Component {
    state = {
        open: false,
    };

    handleClose = () => {

        console.log('handle Close ', this.state.open);
        this.props.onHistoryOk();
        //this.setState({ open: false });
    };

    render() {
        this.state.open = this.props.dialogOpen;
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    transition={Transition}
                    keepMounted
                    onClose={this.props.onHistoryOk}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Patient Sample Usage History"}
                    </DialogTitle>
                    <DialogContent>
{/*
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>
*/}
                        <Table/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default SampleHistoryDialogSlide;
