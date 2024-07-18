import { CheckBox, Delete, Edit, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'

export default function MaterialUiExample01() {
    const [isreact, setIsReact] = useState(false)
    const [isnode, setIsNode] = useState(false)
    return (
        <div>
            <h1>buttons</h1>
            <Box sx={{ '& button': { m: 1, backgroundColor: "purple" } }}>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Box>
            <h1>icons</h1>
            <Box sx={{ '& button': { m: 1, backgroundColor: "purple", color: "white" } }}>
                <Button variant='outlined' startIcon={<Edit />}>Edit</Button>
                <Button variant='outlined' endIcon={<Delete></Delete>}>Delete</Button>
            </Box>

            <h1>Check box</h1>

            <Box sx={{ '& muiCheckbox-root': { color: 'red' } }}>
                <FormControlLabel control={<CheckBox checked={!isreact} icon={<FavoriteBorder />} onChange={(e)=>setIsReact(!isreact)}  checkedIcon={<Favorite />} sx={{ fill: "red" }} />} label="React" sx={{ m: 2 }} />


            </Box>

        </div>
    )
}
