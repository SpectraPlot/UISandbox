import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { VictoryLine  , VictoryChart, VictoryAxis } from 'victory';





function BlackbodyForm(props) {

let dataHold = [];
let dataHolder = [];
let fetchedData = [];
{/*const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];*/}

const [Temp, setTemp] = useState('300');
const [NuStart, setNuStart] = useState('5000');
const [NuEnd, setNuEnd] = useState('20000');
const [Emissivity, setEmissivity] = useState('1000000000000');
const [lineData, setLine] = useState(dataHold)


    async function submitBlackBody(){

      const delta_nu = Math.abs((NuStart-NuEnd)/100);
      const url = "https://k6gorcnyy1.execute-api.us-west-1.amazonaws.com/default/blackbody?temperature="+Temp+"&nu_start="+NuStart+"&nu_end="+NuEnd+"&emissivity="+Emissivity+"&delta_nu="+delta_nu;
      
      const response = await fetch(url);
      const fetchedData = await response.json();
        
      await setLine(fetchedData);



      {/*
      https://k6gorcnyy1.execute-api.us-west-1.amazonaws.com/default/blackbody?
      temperature=100&nu_start=1&nu_end=2&delta_nu=.01&emissivity=1
      */}
    }

  return(
    <Container maxWidth="md">
    
    <Grid container={true} direction="row" spacing={1}>
      <Grid container={true} direction="column" md={4} spacing={1}>
          <Grid item={true} xs={3} md={6} >
              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="Temperature"
                value={Temp} 
                onChange={(e) => setTemp(e.target.value)}
                name="name"
                helperText="ºK"
                fullWidth={true}
              />
          </Grid>
          <Grid item={true} xs={3} md={6}>
              <TextField
                variant="outlined"
                type="text"
                size="small"
                label="Emissivity"
                value={Emissivity} 
                onChange={(e) => setEmissivity(e.target.value)}
                name="name"
                helperText="0>é<1"
                fullWidth={true}
              />
          </Grid>
        </Grid>

        <Grid container={true} direction="column" md={4} spacing={1}>
          <Grid item={true} xs={3} md={6} >
              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="nu_start"
                value={NuStart} 
                onChange={(e) => setNuStart(e.target.value)}
                name="name"
                helperText=""
                fullWidth={true}
              />
          </Grid>

          <Grid item={true} xs={3} md={6}>
              <TextField
                variant="outlined"
                type="text"
                size="small"
                label="nu_end"
                value={NuEnd} 
                onChange={(e) => setNuEnd(e.target.value)}
                name="name"
                helperText=""
                fullWidth={true}
              />
          </Grid>
        </Grid>
        <Grid container={true} direction="column" md={4} spacing={1}>
        <Grid item={true} xs={3} md={6}>
        <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              onClick={submitBlackBody}
            >
            Simulate
            </Button >
            </Grid>
            </Grid>
        {/*}
        <Grid container={true} direction="column" md={4} spacing={1}>
          <Grid item={true} xs={3} md={6}>
              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="lambda start"
                name="name"
                helperText=""
                fullWidth={true}
              />
          </Grid>

          <Grid item={true} xs={3} md={6}>
              <TextField
                variant="outlined"
                type="text"
                size="small"
                label="lambda end"
                name="name"
                helperText=""
                fullWidth={true}
              />
          </Grid>
        </Grid>
        */}
      </Grid>
      
      <VictoryChart  domainPadding={20}>
          <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              //tickValues={[5000, 10000, 15000, 20000]}
              
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              
            />
                <VictoryLine 
                data={lineData} 
                                  // data accessor for x values
                  x="nu"
                  y="emission"// data accessor for y values
                  />
        </VictoryChart>

    </Container>
    );
}

export default BlackbodyForm;
