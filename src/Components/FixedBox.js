import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'right',
  color: theme.palette.text.secondary,
  borderRadius: 25,
  height:450,
  overflow: 'auto',
  marginTop: 10
}));

export default function FixedBox(props) {
	
  return (
		<Grid item md={6} xs={12}>
			<Item>{props.children}</Item>
		</Grid>
  );
}
