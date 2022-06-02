import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

// Imports related to Routing the application
import { Routes, Route,} from "react-router-dom";

// Importing all concetps components
import {DataBindingContainer} from "../Concepts/DataBinding/DataBinding";
import {HomeContainer} from "./HomeContainer";


function AppContainer() {
  return (
    <Grid container>
      <Grid item xs={12} direction="row" alignItems="center" style={{color: 'black'}}>
          <h1>ReactJS Concepts </h1>
      </Grid>
      <Grid item xs={12}>
        <Box
          style={{
            width: '100%', height: 'auto', padding: '4% 4% 3% 4%',
            background: 'linear-gradient(0deg, rgba(82,24,130,1) 0%, rgba(181,36,164,1) 50%, rgba(253,45,133,1) 100%)', 
            borderRadius: '7px 7px 7px 7px', boxShadow: '2px 2px 14px black'
          }}
        >
          <Grid container>
            <Grid item xs={12} style={{color: 'white'}}>
              <Routes>
                <Route exact path="/databinding" element={<DataBindingContainer />} />
                <Route exact path="" element={<HomeContainer />} />
                <Route exact path="/home" element={<HomeContainer />} />              
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
export default AppContainer;
