import { Grid } from "@mui/material";
import Formulario from "./Formulario";
import Header from "./Header";
import ListadoPacientes from "./ListadoPacientes";

const Layout = () => {

    return (
        <Grid container item mt="5rem" xs="auto" columns={12}>
            <Header />
            <Grid container columns={12} mt="1.5rem" justifyContent="center">
            <Grid item md={6}>
                <Formulario />
            </Grid>
            <Grid item md={6} sx={{marginTop: {xs: '1rem'}}}>
                <ListadoPacientes />
            </Grid>
            </Grid>
        </Grid>
    )
}

export default Layout