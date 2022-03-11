import './App.css';
import FixedBox from './Components/FixedBox';
import Box from './Components/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RadioButtonsGroup from './Components/Radios';
import Container from '@mui/material/Container';
import BoxText from './Components/BoxText';
import HelpDesk from './Components/HelpDesk';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
	  
	  <HelpDesk />
	  
	  <div className="App-main">
	  <Container maxWidth="lg">
	  <Grid container justifyContent="space-evenly" spacing={5}>
	
			  <FixedBox>
				<Typography variant="h4" component="h4">
				  أبحد هوز
				</Typography>
				<p className="Dialog-message">
					أبحد هوزأبحد هوز أبحد هوزأبحد هوز أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
					أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
					أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
					أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
					أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
					أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
					أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
					أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
					أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
					أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
				</p>
				<img
					src="asset/photo.jpeg"
					loading="lazy"
					width="100%"
				  />
			  </FixedBox>
			  
			  
			  
			  <Grid item container md={6} xs={12}>
			  <div className="left-box">
				<Box>	
				  <BoxText text="	أبحد هووزأبحد هوز" wordsNumber="100" />	 
				</Box>
				<Box>	
				  <div className="ma-10">
					<Typography variant="h4" component="h4">
					  أبحد هوز
					</Typography>
					<RadioButtonsGroup />
				  </div>		  
				</Box>
				<Box>	
				  <BoxText text="	أبحد هوزأبحد هوز أبحد هوزأبحد هوز أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز
				       أبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوزأبحد هوزأبحد هوز أبحد هوزأبحد هوز" 
				  wordsNumber="150" />	  
				</Box>
				</div>
			  </Grid>
			  
			  
	  </Grid>
	  </Container>
	  </div>
	  
	  <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
