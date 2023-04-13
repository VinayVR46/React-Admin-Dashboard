import {React,useState ,useEffect} from 'react'
import "./Table.css"
import { TableHead } from '@mui/material';
import {Table} from "@mui/material"
import {TableCell} from "@mui/material";
import {TableRow} from "@mui/material";
import { TableBody } from '@mui/material';
import {TablePagination} from "@mui/material"
import axios from "axios"

function TableH() {
const [data, setData]= useState([]);
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(10);
const handleChangePage = (event, newPage) => {
  console.log(event, newPage)
  setPage(newPage);
};
const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res)=> 
setData( res.data ))
console.log(data)

},[])
{
 
}
  return (

    <div className='table-container'>
      <div className = "table-head">
        <h2>Admin Dashboard</h2>
      </div>
    <Table>
    <TableHead>
    <TableRow>
      <TableCell className='table-cell'>
        id
      </TableCell>
      <TableCell className='table-cell'>
        title
      </TableCell>
      <TableCell className='table-cell'>
        Body
      </TableCell>
    </TableRow>
    </TableHead>
    
    {data
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((data)=>{
      return(
        <TableBody>
      <TableRow>
        <TableCell>{data.id}</TableCell>
        <TableCell>{data.title}</TableCell>
        <TableCell>{data.body}</TableCell>
      </TableRow>
    </TableBody>
    
    
      )
    })}
    <TablePagination
    rowsPerPageOptions={[10,25,100]}
    component="div"
    count={data.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}/>
   
    </Table>
    
     </div>
  )
}

export default TableH