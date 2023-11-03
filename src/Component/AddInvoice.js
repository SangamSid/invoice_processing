import { Typography,Box,TextField, Button, styled } from '@mui/material'
import React, { useState } from 'react'
import { saveInvoice } from '../Services/api'

const AddInvoice = () => {

const Component=styled(Box)({

    marginTop:20,
    '& >p':{
        fontSize:20,
        marginBottom:20
    },
    '& >div>div':{
        marginRight:20,
        minWidth:200
    }

})

const obj={
    vendor:"",
    product:"",
    amount:0,
    date:"",
    action:"pending"
}

const [invoice,setInvoice]=useState(obj);

const handleInput=(e)=>{
    console.log(e);
   setInvoice({...invoice,[e.target.name]:e.target.value});
}

// e.traget.value always give us string so we have to convert into number for amount
const addInvoice= async ()=>{
    await saveInvoice({...invoice,amount:Number(invoice['amount'])})
}

  return (
    <div>
      <Component >
        <Typography style={{marginTop:8}}>
                Add Invoice
        </Typography >
        
      <TextField variant="standard" placeholder='enter vendor name' value={invoice.vendor} id="vendor" name="vendor" onChange={(e)=>handleInput(e)} autoComplete='off' />
        <TextField variant="standard" placeholder='enter product name' name="product" value={invoice.product} id="product" onChange={(e)=>handleInput(e)} />
        <TextField variant="standard" placeholder='enter amount in Rs' type="number" value={invoice.amount} id="amount" name="amount" onChange={(e)=>handleInput(e)} />
        <TextField variant="standard" placeholder='enter date' type="date" name="date" value={invoice.date} id="date" onChange={(e)=>handleInput(e)}/>
        <Button variant='contained' onClick={()=>addInvoice()}>
                        Add Invoice
        </Button>
      </Component>
    </div>
  )
}

export default AddInvoice
