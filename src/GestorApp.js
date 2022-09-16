import { AuthProvider } from "./auth/index.js"
import { AppRouter } from "./routers/AppRouter.jsx"

export const GestorApp = ()=>{
    return(
<AuthProvider>
    <AppRouter />
</AuthProvider>
    )
}