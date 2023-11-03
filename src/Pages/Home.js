import React, { useState } from 'react'
import Header from '../Component/Header'
import { Box, Typography,Button } from '@mui/material'
import AddInvoice from '../Component/AddInvoice'

const Home = () => {
  const [addInvoice,setAddInvoice]=useState(false);

  const toggleInvoice=()=>{
      setAddInvoice(true)

  }
  return (
    <div>
      <Header/>
      <Box style={{margin:20}} >
        <Typography >Pending Invoices</Typography>
        { !addInvoice && <Button variant="contained" style={{marginTop:15}}
        onClick={()=>toggleInvoice()}
        >Add</Button>}
        {addInvoice && <AddInvoice/>}
      </Box>
    </div>
  )
}

export default Home
