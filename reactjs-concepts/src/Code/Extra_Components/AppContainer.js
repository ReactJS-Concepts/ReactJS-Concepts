
import { DataBindingContainer } from "../Concepts/DataBinding/DataBinding";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

function AppContainer() {
  return (
    <Box
      style={{
              width: '60%', height: 'auto', padding: '5%',
              background: 'linear-gradient(0deg, rgba(82,24,130,1) 0%, rgba(181,36,164,1) 50%, rgba(253,45,133,1) 100%)', 
              borderRadius: '7px 7px 7px 7px', boxShadow: '2px 2px 14px black'
            }}
    >
      <Grid container>
        <Grid container item xs={12} direction="row" justifyContent="center" alignItems="center" style={{color: 'white'}}>
          <h1>ReactJS Concepts Tutorial</h1>
        </Grid>
        <Grid item xs={12} style={{color: 'white'}}>
          <DataBindingContainer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppContainer;
