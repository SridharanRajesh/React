import React, { Component } from 'react'
import { Paper, Typography , TextField, Box} from '@mui/material';
import './Styles/Designst2.css';
import{Link} from 'react-router-dom'

export default class Design2 extends Component {
    gridstyle={margin:"30px" }
    paperstyle={padding:"30px",width:"400px",margin:"40px",borderRadius:"25px",backgroundColor:"#ffff",opacity:"0.8"}

  render() {
    return (
      <body className='k2' >

      <div>
        <Box align="center" style={this.gridstyle} >
        
            <Paper class="light2" style={this.paperstyle}> 
            <br/>
            <Typography variant="h4" style={{fontFamily:"cinzel",color:"black"}}>CREATE ACCOUNT</Typography>
            <br/>
            <TextField label="Username" placeholder="Enter your user name" type="text"/>
            <br/>
            <br/>
            <TextField label="Mail ID" placeholder="Enter your email id" type="text"/>
            <br/>
            <br/>
            <TextField label="Phone Number" placeholder="Enter your phone number" type="number"/>
            <br />
            <br />
            <TextField label="Password" placeholder="Enter your password" type="password"/>
            <br />
            <br />
            <TextField label="confirm Password" placeholder="Enter your password" type="password"/>
            <br />
            <br />
            <Link to = '/'>
            <button style={{background:'lightblue',borderRadius:"90px",width:"100px",height:"40px",borderColor:'white',fontFamily:"cinzel"}}>REGISTER</button>
            </Link>
            </Paper>

        </Box>
        
      </div>
      </body>
    )
  }
}
