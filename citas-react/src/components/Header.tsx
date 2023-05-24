import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'


export const Header = () => {
  return (
    <Grid container columns={12} justifyContent="center">
      <Grid item md={6}>
        <Typography variant="h1" color="initial" textAlign="center" >
            Seguimiento Pacientes {' '}
            <Typography 
              variant="body1" 
              color="blue" 
              sx={{
                fontSize: 30,
                fontWeight: 800
            }}>Veterinaria</Typography>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header;