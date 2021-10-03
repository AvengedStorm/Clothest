import React, {useState} from 'react';
// import {useSelector, useDispatch} from 'react-redux'

import clothes from "../components/db/clothes";
// import sets from '../components/db/sets'
import {ClosetSpeedDial} from "../components/speeddials/speeddials";

import { DataGrid } from '@material-ui/data-grid';
// import { makeStyles } from '@material-ui/core/styles';

// import AppBar from '@material-ui/core/AppBar';
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import IconButton from '@material-ui/core/IconButton';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';

// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import StarIcon from '@material-ui/icons/Star';

const Closet = (props) => {
    // const dispatch = useDispatch();
    // const favorites = useSelector(state => state.favorites);

    const [open, setOpen] = useState(false)
    const [currentObj, setCurrentObj] = useState({});
    const rows = clothes;
    const columns = [
        {
            field: 'type',
            headerName: 'Type',
            type: 'number',
            width: 110,
        },
        {
            field: 'size',
            headerName: 'Size:',
            width: 110,
        },
        {
            field: 'style',
            headerName: 'Style',
            width: 120,
        },
        {
            field: 'isWashed',
            headerName: 'Ready to use ?',
            width: 170,
        },
        {
            field: 'picture',
            headerName: 'Picture',
            width: 200,
            renderCell: (params) => (<Button onClick={handleOpen.bind(null, params)}>Open image & info</Button>)
        }
    ];
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = (params) => {
        setCurrentObj(params.row);
        setOpen(true);
    };
    // const imageListItemStyle = {
    //     width: "196px", 
    //     height: "196px", 
    //     zIndex: "100",
    // };
    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //         display: 'flex',
    //         flexWrap: 'wrap',
    //         justifyContent: 'space-around',
    //         overflow: 'hidden',
    //         backgroundColor: theme.palette.background.paper,
    //     },
    //     imageList: {
    //         display: "flex",
    //         flexDirection: "row",
    //         transform: 'translateZ(0)',
    //     },
    //     title: {
    //         color: "white",
    //     },
    //     titleBar: {
    //         background:
    //         'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    //     },
    //     image: {
    //         width: 196 + "px",
    //         height: 196 + "px",
    //     },
    //     speedDial: {
    //         position: 'fixed',
    //         top: "7vh",
    //         right: "1vw",
    //     },
    // }));
    
    // const classes = useStyles();

    return(
        <div className="closetDiv">
            <div>
                <ClosetSpeedDial />
            </div>
            <div style={{ height: 400, width: '100%', marginTop: "10vh" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle onClick={(el) => {
                    }}>Image & Info</DialogTitle>
                <DialogContent style={{textAlign: "center"}}>
                    <img src={currentObj.img} alt="" style={{maxWidth: "250px", maxHeight: "250px"}} />
                    <br />
                    <Typography>Item Style: {currentObj.style}</Typography>
                    <Typography>Item Size: {currentObj.size}</Typography>
                    <Typography>Is it Clean ? {currentObj.style ? "Yes" : "No"}</Typography>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Closet;