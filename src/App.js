import { useEffect, useState } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [muestra, setMuestra] = useState(true)  
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false)

  //actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      //Agrega el nuevo gasto al presupuesto
      setGastos([
        ...gastos,
        gasto
      ])

      //Resta el nuevo gasto del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)

      //Resetea el parrafo con el gasto
      setCrearGasto(false)
    }
  }, [gasto, crearGasto, gastos, restante])


  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          { muestra ? 
            (
              <Pregunta 
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMuestra={setMuestra}
              />
            ) : 
            (
              <div className='row'>
                <div className='one-half column'>
                  <Formulario 
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className='one-half column'>
                  <Listado 
                    gastos={gastos}
                  />

                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }
          
          
        </div>
      </header>
    </div>
  );
}

export default App;
