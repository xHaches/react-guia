import { Navigate, Route, Routes } from "react-router-dom"
import { routes } from "../routes/routes"
import { Suspense } from "react"

export const Header = () => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          {
            routes.map(({Component, path}) => (
                <Route path={path} element={ <Component /> } key={path} />
            ))
          }
          <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
        </Routes>
      </Suspense>
    </header>
  )
}

export default Header