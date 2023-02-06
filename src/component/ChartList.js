import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import {Context} from '../util/AppContext';
import {useContext} from "react";

const ChartList = props => {
    const isLogin = useContext(Context);

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box container>
                <Box>
                    <FormControl component="fieldset" >
                        <FormLabel component="legend">Assign responsibility</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                                label="Gilad Gray"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                                label="Jason Killian"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                                label="Antoine Llorca"
                            />
                        </FormGroup>
                        <FormHelperText>Be careful</FormHelperText>
                    </FormControl>
                    <FormControl required error={error} component="fieldset" >
                        <FormLabel component="legend">Pick two</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                                label="Gilad Gray"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                                label="Jason Killian"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                                label="Antoine Llorca"
                            />
                        </FormGroup>
                        <FormHelperText>You can display an error</FormHelperText>
                    </FormControl>
                </Box>
            <Grid  container spacing={3} marginBottom={5} >
                {/* Chart */}
                <Grid item xs={8}>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Grid>
                <Grid item xs={4} container justifyContent="flex-end">
                        <Button variant="contained" endIcon={<CheckBoxIcon />}>
                            적용
                        </Button>

                </Grid>
            </Grid>
            </Box>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Deposits />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    );
};


export default ChartList;