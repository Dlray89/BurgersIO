import React from 'react'
import { makeStyles, Button } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop:'16px'

    }
}))



const Layout = (props) => {
    const classes = useStyles()
    return(
        <div>
            <div>
                <Button variant='contained'>Toolbar</Button>
                <Button variant='contained'>Sidedrawer</Button>
                <Button variant='contained'>Backdrop</Button>

            </div>

            <main className={classes.mainContainer}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout