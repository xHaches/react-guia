export const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

export const formatearFecha = (fechaMs: number) => {
    const opt: any = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return new Date(fechaMs).toLocaleDateString('es-ES', opt);
}

export const formatearAMoneda = (cantidad: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(cantidad);
}