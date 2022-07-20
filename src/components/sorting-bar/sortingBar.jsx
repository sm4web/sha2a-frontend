import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import {TextField} from "@mui/material";
import {ResultCountStyle, SortByField} from "./style";

const Values = [
    {value: 0, label: "Most Viewed"},
    {value: 1, label: "Most Recent"}
]


const SortingBar = () => {
    const [sort, setSort] = useState(0)
    const handleChange = (e) => {
        setSort(e.target.value)
    }
    return (
        <Box sx={{p: 2}} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
                <Typography variant={"span"} sx={ResultCountStyle}>
                    32 Search Result
                </Typography>
            </Box>
            <Box>
                <TextField
                    id="demo-simple-select"
                    value={sort}
                    select
                    onChange={handleChange}
                    sx={SortByField}
                >
                    {Values.map((value) => (
                        <MenuItem key={value.value} value={value.value}>{value.label}</MenuItem>
                    ))}
                </TextField>
            </Box>
        </Box>
    );
};

export default SortingBar;