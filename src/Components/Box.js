import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  border:"1px solid transparent",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'right',
  color: theme.palette.text.secondary,
  borderRadius: 25,
  overflow: 'auto',
  marginBottom: 10,
  '&:hover': {
      border: "solid 1px #ba54ef",
    }
}));

export default function Box(props) {
	
  return (
		<Grid item md={12} xs={12}>
			<Item>{props.children}</Item>
		</Grid>
  );
}
