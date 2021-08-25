import { useEffect, useState } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";


function App() {

  //Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);


  //UseEffect que actualiza el restante
  useEffect(()=>{
      if(creargasto){

        //Agrega el nuevo presupuesto
        guardarGastos([
          ...gastos, gasto
        ]);


        //Resta del presupuesto actual
        const presupuestoRestante = restante - gasto.cantidad;
        guardarRestante(presupuestoRestante);


        //Resetear a false
        guardarCrearGasto(false)
      }
  }, [gasto, creargasto, gastos, restante]);



 


  return (
    <header className="container">
        <h1 className="title">Controlador de Gastos</h1>

        <div className="contenido-principal">
          {mostrarpregunta ?
           (
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) :
            (
              <div className="row">
                <div className="col-sm-6">
                    <Formulario
                        guardarGasto={guardarGasto}
                        guardarCrearGasto={guardarCrearGasto}
                    />
                </div>

                <div className="col-sm-6">
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
  );
}

export default App;
