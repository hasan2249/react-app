import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Panel from './Panel';
import Icon from '@mui/material/Icon';

const Div = styled('div')({
  width: 0,
  position: "fixed",
  zIndex: 1,
  height: 510,
  top: 75,
  left: -9,
  backgroundColor: "#fff",
  overflowX: "hidden",
  transition: "0.5s",
  borderRadius:20,
  fontSize:20
});

const OpenButton = styled('div')({
  position: "absolute",
  backgroundColor:"#ba54ef",
  top: 90,
  left: 0,
  fontSize: 36,
  width:50,
  color:"#fff",
  padding:10,
  "&:hover":{
	  cursor: "pointer"
  }
});

export default function HelpDesk() {
	
    const [width, setWidth] = useState("0");
  
	const openPanel = (event)=>{setWidth("53")};
	const closePanel = (event)=>{setWidth("0")};


  return (
		<>
		<Div style={ { width: `${ width }%` } }>
		  <Panel closePanel={closePanel}/>
		</Div>
        <OpenButton  onClick={openPanel}><Icon fontSize="large">settings_applications</Icon></OpenButton>  
		</>
  );
}
