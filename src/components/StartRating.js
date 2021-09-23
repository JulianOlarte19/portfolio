import { Box } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'

const StartRating = ({stars}) => {
    return (
        <div>
            <Box component="fieldset"  borderColor="transparent">  
                <Rating name="read-only" value={stars} readOnly />
            </Box>
        </div>
    )
}

export default StartRating
