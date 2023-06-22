import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Menu, MenuItem} from "@mui/material";
import { MoreVert } from '@mui/icons-material'

const Import = (props) => {

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
      props.deleteMake();
      setAnchorEl(null);
  };


    return (
        <Container maxWidth="lg">
            <br />
            <p>Import Component</p>
            <br />
        <Button variant="contained" color='primary' onClick={props.fetchMakes}>
            IMPORT
        </Button>
        <h2>COUNT: {props.makes.length}</h2>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
        <TableBody>
            {props.makes.map((make, index)=> (
                <TableRow key={make.MakeId}>
                <TableCell >{make.MakeId}</TableCell>
                <TableCell>{make.MakeName}</TableCell>
                <TableCell align='right'><MoreVert id="basic-button"
							aria-controls={open ? 'basicMenu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}/></TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
        <Menu
         id="basicMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
    </Container>
    )
}

export default Import