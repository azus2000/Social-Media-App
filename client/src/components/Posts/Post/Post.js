import React from 'react'
import useStyles from './styles'
import {Card, CardActions, CardContent,CardMedia, Button,Typography} from '@mui/material'
import moment from 'moment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';

function Post({post,setCurrentId}) {
    const classes=useStyles()
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="h6">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} onClick={()=>{setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="default"></MoreHorizIcon>
                </Button>
            </div>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>  
                <Typography variant="body2" color="textSecondary" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
            {/* <Button size="small" color="primary" onClick={() => {}}><ThumbUpIcon fontSize="small" /> Like  </Button> */}
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>

        </Card>
    )
}

export default Post
