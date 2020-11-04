import React from 'react';
import Grid from '@material-ui/core/Grid';

function Header() {
    return (
        <Grid style={{margin: 'auto'}} item lg={12}>
            <header style={headerStyle} >
                <h1>Sport Report</h1>
            </header>
        </Grid>
    )
}

const headerStyle = {
     background: '#012d57',
     color: '#fff',
     textAlign: 'center',
     padding: '10px'
}

export default Header;