import React,{Component} from 'react';
import { Paper, TextField, Typography,MuiThemeProvider,createMuiTheme,FormControl, Button } from '@material-ui/core';
import '../css/contact.css';
import Hamburger from './Hamburger';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Snackbar from '@material-ui/core/Snackbar';
import CustomSnackbarContentWrapper from './CustomSnackbarContentWrapper';

const localTheme = createMuiTheme({
    palette: {
        primary:{
            main: "#018217"
        }
      },
    typography: { useNextVariants: true },
  });
export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            successSnackbarOpen:false
        };
    }
    submit=(ev)=>{
        this.setState({ successSnackbarOpen: true });
    }
    handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({ open: false });
      };
    render(){
        return(
            <div className="bgBlue">
                <Hamburger className="hambuger" selected={2}/>
                <div className="center">
                    <p className="header">Contact Me</p>
                        <MuiThemeProvider theme={localTheme}>
                            <Paper className="paper-white" elevation={4}>
                                <FormControl variant="outlined" className="formControl" >
                                    <Typography component="div">
                                        <TextField label="Full Name" placeholder="Full Name" fullWidth margin="normal" />                
                                    </Typography>
                                    <Typography component="div">
                                        <TextField label="Email Address" placeholder="Email Address" fullWidth margin="normal" type="email" autoComplete="email" />                        
                                    </Typography>
                                    <Typography component="div">
                                        <TextField label="Message" placeholder="Message" fullWidth margin="normal" variant="outlined" multiline rows="4" rowsMax="8" />        
                                    </Typography>
                                    <Button variant="contained" color="primary" className="button" onClick={this.submit}>
                                        <FontAwesomeIcon className="rightArrow" icon={faPaperPlane} />
                                       <span className="sendTxt"> Send   </span>
                                    </Button>
                                </FormControl>
                                
                            </Paper>
                        </MuiThemeProvider>
                </div>
                <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.state.successSnackbarOpen}
                autoHideDuration={6000}
                onClose={this.handleSnackBarClose}
                >
                    <CustomSnackbarContentWrapper
                        onClose={this.handleSnackBarClose}
                        variant="success"
                        message="Thank you for the email"
                    />
                </Snackbar>
            </div>
        )
    }
}