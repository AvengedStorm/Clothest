import React, { useState } from 'react';

import {useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import fetcher from '../db/fetcher';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';

import SaveIcon from '@material-ui/icons/Save';
// import BallotIcon from '@material-ui/icons/Ballot';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@mui/icons-material/Add';

const HomeSpeedDial = () => {
    const dispatch = useDispatch();
    const checkedOut = useSelector(state => state.checkedOut) || [];
    const belongsTo = localStorage.getItem('loginState');

    const useStyles = makeStyles((theme) => ({
        root: {
            transform: 'translateZ(0px)',
            flexGrow: 1,
        },
        speedDial: {
            position: 'absolute',
            bottom: "1vh",
            left: "1vw",
        },
    }));
    const classes = useStyles();

    const [open1, setOpen1] = useState(false);

    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    const clearCurrentSet = () => {
        dispatch({ type:'clearDrawer' })
    };
    const handleSetSubmit = () => {
        const submittedSet = {
            belongsTo: belongsTo,
            items: checkedOut
        };
        dispatch({type: "saveSet", payload: submittedSet});
        fetcher.postSet(submittedSet)
        window.location.reload(true);
    };
    const handleDeletion = () => {
        fetcher.deleteClothes(checkedOut);
        window.location.reload(true);
    } 
    const actions1 = [
        {icon: <AddIcon />, name: 'Add a new item', func: () => dispatch({type: 'openDialog'})},
        {icon: <SaveIcon />, name: 'Save Selected to Sets', func: handleSetSubmit },
        {icon: <ClearIcon />, name: "Clear All", func: clearCurrentSet },
        {icon: <DeleteIcon />, name: "Delete Selected Items", func: handleDeletion },
    ];

    return (
        <SpeedDial
        z-index='9999'
        ariaLabel="SpeedDial for actions"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={handleClose1}
        onOpen={handleOpen1}
        open={open1}
        direction="right"
        >
            {actions1.map((action) => (
            <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.func}
            />
            ))}
        </SpeedDial>
    );
};

export {HomeSpeedDial};