import { Button, Grid, TextField, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from 'preact/hooks';

function HeightAndWeightInput({ onCalculate }) {
    const height_ref = useRef(null);
    const weight_ref = useRef(null);

    const itemStyle = { display: 'flex', justifyContent: 'center', alignContent: 'center', justifyItems: 'center', alignItems: 'center' };

    return (
        <Grid container spacing={1}>
            <Grid item xs={0}  sm={3} md={4} /> {/* spacing */}
            <Grid item xs={12} sm={6} md={4} >
                <Box sx={itemStyle} >
                    <TextField label="Height"
                        variant="outlined"
                        type="number"
                        min={1}
                        max={2.5}
                        step={0.1} 
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        inputRef={height_ref} />
                </Box>
            </Grid>
            <Grid item xs={0}  sm={3} md={4} /> {/* spacing */}

            <Grid item xs={0}  sm={3} md={4} /> {/* spacing */}
            <Grid item xs={12} sm={6} md={4} >
                <Box sx={itemStyle} >
                    <TextField label="Weight"
                        variant="outlined"
                        type="number"
                        min={1}
                        max={500}
                        step={0.1}
                        inputRef={weight_ref} />
                </Box>
            </Grid>
            <Grid item xs={0}  sm={3} md={4} /> {/* spacing */}

            <Grid item xs={0}  sm={3} md={4} /> {/* spacing */}
            <Grid item xs={12} sm={6} md={4}> 
                <Box sx={itemStyle}>
                    <Button variant="outlined" color="primary" 
                            onClick={() => onCalculate(weight_ref.current.value, height_ref.current.value)}>
                        Calculate
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={0}  sm={3} md={4} /> {/* spacing */}
        </Grid>
    );
}

export default HeightAndWeightInput;