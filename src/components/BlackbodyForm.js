import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


function BlackbodyForm(props) {

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
                name="name"
                helperText=""
                fullWidth={true}
              />
          </Grid>
        </Grid>
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
      </Grid>
      <Grid container={true} align="right" direction="row" spacing={1}>
        <Grid item={true} xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
            Simulate
            </Button>
            </Grid>
            </Grid>

    </Container>
    );
}

export default BlackbodyForm;
