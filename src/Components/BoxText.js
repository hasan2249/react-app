import * as React from 'react';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledTextarea = styled('textarea')({
  width: "100%",
  maxWidth: "100%",
  resize: "none",
  padding: "12px 20px"
});

export default function BoxText(props) {
	
  const [words, setWordsNumber] = useState(0);
  
  const countChars = (event) => {
	const currentLength = event.target.value.length;

    setWordsNumber(currentLength);
  };
  
  return (
		<div className="ma-10">
			<Typography variant="h4" component="h4">
			  أبحد هوز
			</Typography>
			<p className="Dialog-message">
			{props.text}
			</p>
			<StyledTextarea placeholder="اكتب هتا ..." rows="4" Style="" onChange={countChars}></StyledTextarea>
			<label>{props.wordsNumber}/{words}</label>
		</div>
  );
}
