import * as React from 'react';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';


export default function Attachment(props) {
	
  return (
		<Grid item md={10} xs={10}>
			<Grid container className="panel-attachment">
				<Grid item md={1} xs={3}>
				<Icon  fontSize="large">notifications_active</Icon>
				</Grid>
				<Grid item md={10} xs={5}>		
				<label>الملحق</label>
				</Grid>
				<Grid item md={1} xs={1}>
					<Icon fontSize="large">close</Icon>
				</Grid>
			</Grid>
		</Grid>
  );
}
