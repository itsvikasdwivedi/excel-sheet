import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const EditColumn = () => {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <Box>
            <TextField id="outlined-basic" label="Outlined small" size="small"
                variant="outlined" />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={10}>Text</MenuItem>
                    <MenuItem value={20}>DropDown</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default EditColumn