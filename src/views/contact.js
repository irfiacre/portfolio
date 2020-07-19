import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// Components
import PageHighLight from '../components/pageHighLight';
import { sendMessageAction } from '../redux/actions/sendMessage';
import ReachMe from '../components/reachMe';
import ContactForm from '../components/contactForm';

import contactPageStyle from '../styles/components/contactPageStyle';

const Alert=(props)=>{
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Contact = (props)=>{
    const { classes } = props;
    const messageStore = useSelector((store) => store.messageData);
    const dispatch = useDispatch();
    
    // const message = me
    const [contactState,setState] = useState({
        messageSent:false,
        });
        
    const onFormSubmit = (data) => {
        dispatch(sendMessageAction(data));
        
    //   if(!){
    //     console.log(contactState.messageSent);
    //     setState({ ...contactState, messageSent:true });
    //   }
      };
      
      
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setState({ ...contactState, messageSent:false });
      }
      
return(
    <div className={classes.root}>
        <div className={classes.alert}>
            <Snackbar 
                // open={!messageStore.emailNotSent} 
                open={contactState.messageSent} 
                autoHideDuration={4000} 
                // onClose={handleClose}
                anchorOrigin={{ vertical: 'top',horizontal: 'center' }}
            >
                <Alert onClose={handleClose} severity="success">
                  Message was Sent successfully
                </Alert>
            </Snackbar>
        </div>
        
        <div className={classes.pageHighLight}>
            <PageHighLight />
        </div>
        
        <div className={classes.contactDetails}>
            <div className={classes.howToReachMe}>
                <ReachMe />
            </div>
            <div className={classes.contactForm}>
                <ContactForm 
                    onSubmit={onFormSubmit} 
                    isLoading={messageStore.loading}
                    emailSent = {messageStore.emailNotSent}
                /> 
            </div>
        </div>
    </div>
)};

export default withStyles(contactPageStyle)(Contact);
