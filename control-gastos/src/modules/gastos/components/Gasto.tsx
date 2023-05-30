import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatearFecha } from "../../../helpers"
import { Gasto as IGasto } from "../../../interfaces/gasto.interface"
import { eliminarGasto, selectEditarGasto, setModalOpen } from "../../shared/store/gastos/gastosSlice";
import { RootState } from "../../shared/store/store";
import { routes } from "../routes/routes";

import IconoAhorro from '/img/icono_ahorro.svg';
import IconoCasa from '/img/icono_casa.svg';
import IconoComida from '/img/icono_comida.svg';
import IconoGastos from '/img/icono_gastos.svg';
import IconoOcio from '/img/icono_ocio.svg';
import IconoSalud from '/img/icono_salud.svg';
import IconoSuscripciones from '/img/icono_suscripciones.svg';

const diccionarioIconos: any = {
  ahorro: IconoAhorro,
  comida: IconoCasa,
  casa: IconoComida,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones
}

export const Gasto = ({cantidad, categoria, id, nombre, fecha}: IGasto) => {

  const { gastoSeleccionadoEditar } = useSelector((state: RootState) => state.gastos.value);

  const dispatch = useDispatch();

  const navigator = useNavigate();

  const selectGastoEditar = () => {
    dispatch(selectEditarGasto({cantidad, categoria, id, nombre, fecha}));
    dispatch(setModalOpen(true));
    navigator(routes[2].to)
  }

  const borrarGasto = () => {
    dispatch(eliminarGasto(id));
  }
  
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={diccionarioIconos[categoria]} />
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            Agregado el: {''}
            <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${cantidad}</p>
      <Grid container flexDirection="column" alignItems="space-between">
          <Button variant="contained" color="info" onClick={selectGastoEditar}>Editar</Button>
          <Button variant="contained" color="error" onClick={borrarGasto}>Eliminar</Button>
      </Grid>
    </div>

  )
}

export default Gasto