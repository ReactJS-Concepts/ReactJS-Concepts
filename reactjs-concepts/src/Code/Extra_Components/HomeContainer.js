import Grid from "@mui/material/Grid";

import banner from '../../Resources/Images/LearnReact.gif';
import {MyImage} from "../UIElements/Images";

export function HomeContainer() {
  return (
    <Grid container>
        <Grid container item xs={12} direction="row" justifyContent="center" alignItems="center" style={{color: 'white'}}>
            <MyImage alt={"Banner"} width={70} roundedBorder={true} url={banner}/>
        </Grid>
    </Grid>
  );
}
