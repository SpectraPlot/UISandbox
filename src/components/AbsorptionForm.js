import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch';
import { VictoryLine , VictoryChart, VictoryAxis, VictoryCursorContainer, VictoryVoronoiContainer, VictoryTheme} from 'victory';
import AbsorptionDualListbox from "./../components/AbsorptionDualListbox";
import Select from 'react-select';
import SpeciesOptions from "./../components/SpeciesOptions"

function AbsorptionForm(props) {

let dataHold = [];
let dataHolder = [];
let fetchedData = [];

const [Temp, setTemp] = useState('900');
const [NuStart, setNuStart] = useState('.5');
const [NuEnd, setNuEnd] = useState('12');
const [Pressure, setPressure] = useState('1');
const [PathLength, setPathLength] = useState('1');

const [lineData, setLine] = useState(dataHold)


    async function submitBlackBody(){

      const delta_nu = Math.abs((NuStart-NuEnd)/100);
      const url = "https://k6gorcnyy1.execute-api.us-west-1.amazonaws.com/default/blackbody?temperature="+Temp+"&nu_start="+NuStart+"&nu_end="+NuEnd+"&pressure="+Pressure+"&delta_nu="+delta_nu;
      
      const response = await fetch(url);
      const fetchedData = await response.json();
        
      await setLine(fetchedData);
      console.log(fetchedData);


      {/*
      https://k6gorcnyy1.execute-api.us-west-1.amazonaws.com/default/blackbody?
      temperature=100&nu_start=1&nu_end=2&delta_nu=.01&emissivity=1
      */}
    }

  return(
    <React.Fragment>

    <Container maxWidth="md">
    <div style={{ padding: 10 }}/>
    
    <Grid container alignItems="stretch" spacing={2}>
    <Grid item xs={6}>
      <Grid container={true} direction="row" spacing={2}>
          <Grid item={true} xs={12} >
            <h2>Simulation Parameters</h2>
          </Grid>

          <Grid item={true} xs={4} >
              <TextField
                variant="outlined"
                size="small"
                type="text"
                label="Temperature"
                value={Temp} 
                onChange={(e) => setTemp(e.target.value)}
                name="name"
                helperText="??K"
                fullWidth={true}
              />
          </Grid>

          <Grid item={true} xs={4}>
              <TextField
                variant="outlined"
                type="text"
                size="small"
                label="Pressure"
                value={Pressure} 
                onChange={(e) => setPressure(e.target.value)}
                name="name"
                helperText="0>??<1"
                fullWidth={true}
              />
          </Grid>
          <Grid item={true} xs={4}>
              <TextField
                variant="outlined"
                type="text"
                size="small"
                label="Path Length"
                value={PathLength} 
                onChange={(e) => setPathLength(e.target.value)}
                name="name"
                helperText="0>??<1"
                fullWidth={true}
              />
          </Grid>
          <Grid item={true} xs={4} >
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

          <Grid item={true} xs={4}>
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
          <Grid item={true} xs={4}>
                    um
              <Switch
                
              />
              cm^-1
          </Grid>
          <Grid item xs={12}>
          <Select 
            options={SpeciesOptions} 
            isSearchable
            isMulti
            placeholder="Species (select up to 6)"/>
            </Grid>
          
      </Grid>
      </Grid>
      <Grid item xs={6}>
      <Grid>
      List of species w mole fraction fields
        {/*<Grid style={{ height: "100%" }}>
            <AbsorptionDualListbox />*/}
        </Grid>

        </Grid>
        <Grid item={true} xs={12} align="right">
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
        
    
        

</Container>

<Container>
<Grid container={true} direction="row" xs={12} spacing={1}>
      <VictoryChart 
        padding={{ top: 10, bottom: 10, left: 50, right: 50 }}
        height={150}
        domain={{ x: [NuStart, NuEnd] }}
        domainPadding={{x: [0, 1],y: [0, 20]}}
        theme={VictoryTheme.material}

        containerComponent={
          <VictoryCursorContainer
            cursorDimension="x"
            cursorLabel={({ datum }) => `/nu=${datum.x.toFixed(2)}, y=${datum.y.toFixed(2)}`}
          />
        }
      >

        <VictoryLine 
          data={lineData} 
          x="nu"  // data accessor for x values
          y="emission"// data accessor for y values
        />
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          //tickValues={[5000, 10000, 15000, 20000]}    
          name="wavelengthAxis"
          label="wavelength, um"
        />
        <VictoryAxis
          orientation="top"
          label=""
          name="wavenumberAxis"
          tickFormat={() => ''}  
          //tickValues={[5000, 10000, 15000, 20000]}
        />
        <VictoryAxis
          dependentAxis
          label="W/(steradian nm m^2)"
          style={{ axisLabel: {padding: 30} }}
          // tickFormat specifies how ticks should be displayed        
        />    
        <VictoryAxis
          dependentAxis
          orientation="right"
          label=""
          tickFormat={() => ''}            
        />
      </VictoryChart>
      </Grid>
    </Container>
</React.Fragment>
    
    );
}

export default AbsorptionForm;
