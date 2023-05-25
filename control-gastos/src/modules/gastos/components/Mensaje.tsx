
const Mensaje = ({children, tipo}: {children: string, tipo: string}) => {
  return (
    <div className={`alerta ${tipo}`}>
        {children}
    </div>
  )
}

export default Mensaje