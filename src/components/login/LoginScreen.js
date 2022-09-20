import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material";
import AuthLayout from "../../auth/layout/AuthLayout";

export const LoginScreen = () => {
  const {login}=useContext(AuthContext)
  const navegate =useNavigate()

const handleLogin = () => {
  login('Marcelo');
  console.log(login)
  navegate('/', { replace: true });
}

return (
  
    <AuthLayout title="Login">

      
      <form>
        <Grid container>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField 
                label="correo"
                type="email"
                placeholder="correo@correo.com"
                fullWidth
                />
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField 
                label="contraseña"
                type="password"
                placeholder="*****"
                fullWidth
                />
          </Grid>
          <Grid container spacin={2} sx={{mb:2, mt:1}}>
            <Grid item xs={12} sm={6}>
              <Button variante='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variante='contained' fullWidth>
                <Google/>
                <Typography sx={{ml:1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent={"end"}>
            <Link component={RouterLink}
                  color='inherit' to="/register">
            Crear una cuenta

            </Link>
            
          </Grid>

        </Grid>
      </form>
  </AuthLayout>



)
  }
  