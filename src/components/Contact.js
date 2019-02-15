import React,{Component} from 'react';
import { Paper, TextField, Typography,MuiThemeProvider,createMuiTheme,FormControl } from '@material-ui/core';
import '../css/contact.css';
import Hamburger from './Hamburger';

const localTheme = createMuiTheme({
    palette: {
        primary:{
            main: "#018217"
        }
      },
    typography: { useNextVariants: true },
  });
export default class Contact extends Component {
    render(){
        return(
            <div className="bgBlue">
                <Hamburger className="hambuger" selected={2}/>
                <div className="center">
                    <p className="header">Contact Me</p>
                        <MuiThemeProvider theme={localTheme}>
                            <Paper className="paper-white" elevation={4}>
                                <FormControl variant="outlined" className="formcontrol" >
                                    <Typography component="div">
                                        <TextField label="Full Name" placeholder="Full Name" fullWidth margin="normal" />                
                                    </Typography>
                                    <Typography component="div">
                                        <TextField label="Email Address" placeholder="Email Address" fullWidth margin="normal" type="email" autoComplete="email" />                        
                                    </Typography>
                                    <Typography component="div">
                                        <TextField label="Message" placeholder="Message" fullWidth margin="normal" variant="outlined" multiline rows="4" rowsMax="8" />        
                                    </Typography>
                                </FormControl>
                            </Paper>
                        </MuiThemeProvider>
                </div>
            </div>
        )
    }
}