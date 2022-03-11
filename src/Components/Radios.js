import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="اول" />
        <FormControlLabel value="2" control={<Radio />} label="ثاتي" />
        <FormControlLabel value="3" control={<Radio />} label="ثالث" />
      </RadioGroup>
    </FormControl>
  );
}