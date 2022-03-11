import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Attachment from './Attachment';

const CloseButton = styled('div')({
  fontSize: 36,
  "&:hover":{
	  cursor: "pointer"
  }
});

export default function Panel(props) {
	
  return (
	  <Box sx={{ flexGrow: 1 }}>
		<Grid container className="panel-header">
			<Grid item md={1} xs={3}>
			<Icon  fontSize="large">public</Icon>
			</Grid>
			<Grid item md={8} xs={7}>		
			<label>الملحق</label>
			</Grid>
			<Grid item md={1} xs={1}>
				<CloseButton onClick={props.closePanel}><Icon fontSize="large">close</Icon></CloseButton>
			</Grid>
		</Grid>
		<Attachment />
		<Attachment />
		<Attachment />
		<Attachment />
		<Attachment />
		<label Style="padding:20px">جمع المزيد من المعلومات</label>
	  </Box>
  );
}
