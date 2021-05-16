import React, {useEffect, useState} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import icon from "./images/icon.png"
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'

// useDispatch: used to dispatch an action


const App = () =>{
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles()
    const dispatch = useDispatch()

    // Use this to dispatch an action
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return(
        <Container maxwidth = 'lg'>
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
                <Typography className = {classes.heading} varaint = "h2" align = "center">Post It</Typography>
                <img src = {icon} alt = "memories" height = "60" />
            </AppBar>

            <Grow in>
                <Grid container justify = "space-between" alignItems = "stretch" spacing = {3}>
                    <Grid item xs = {12} sm = {7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs = {12} sm = {7}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Grow>

        </Container>
    );
}

export default App