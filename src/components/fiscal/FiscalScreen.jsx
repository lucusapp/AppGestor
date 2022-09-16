import { Gestorlist } from "../gestor/GestorList"
import { LeyeScreen } from "./LeyeScreen"


export const FiscalScreen = () => {
  return (
    <div className="row">
      <div className="col-8">
        <h1>FiscalScreen</h1>
      </div>
      <div className="col-4">
       {/* <Gestorlist />        */}
        <LeyeScreen />
      </div>
        
    </div>
  )
}
