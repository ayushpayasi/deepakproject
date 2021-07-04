import React from 'react'
import NavBar from './component/navbar'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import {Container,Input,Card,CardBody,CardTitle} from "reactstrap"

export default function App() {
  return (
    <div className="container-check">
      <NavBar/>
      <span style={{color:"#96a4b6",fontSize:"1.2rem",fontWeight:"700"}}><ArrowBackIosSharpIcon style={{height:"10px",width:"10px",fontWeight:700}}/>videos</span>
      <Container className="mt-5" className="working-container">
        <Input type="text" width="10%" placeholder="Insert URL Here"></Input>
        <h5 className="text-center p-5">OR</h5>
        <Card style={{maxWidth:"200px",minHeight:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>UPLOAD</Card>
      </Container>
    </div>
  )
}
