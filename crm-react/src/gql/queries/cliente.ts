import { ICliente } from "../../interfaces/cliente.interface";

export const getClienteById = (id: number) => (
    `
    query {
        Cliente(id: ${id}) {
            id
            nombre
            telefono
            email
            empresa
            notas
        }
    }`
);

export const getAllClientes = () => (
    `{
        allClientes {
            id
            nombre
            telefono
            email
            empresa
        }
    }`
)

export const createCliente = (cliente: ICliente) => (
    `mutation nuevoCliente {
        createCliente(
        nombre: "${cliente.nombre}",
        telefono: ${cliente.telefono},
        email: "${cliente.email}",
        empresa: "${cliente.empresa}",
        notas: "${cliente.notas}",
        ) {
        id
        nombre
        telefono
        email
        empresa
        notas
        }
    }`
)

export const updateCliente = (cliente: ICliente) => (
    `mutation {
        updateCliente(
            id: "${cliente.id}"
            nombre: "${cliente.nombre}",
            telefono: ${cliente.telefono},
            email: "${cliente.email}",
            empresa: "${cliente.empresa}",
            notas: "${cliente.notas}",
        ) {
          id
          nombre
          telefono
          email
          empresa
          notas
        }
      }`
)

export const removeCliente = (id: number) => (
    `mutation {
		removeCliente(
    id: ${id},
    ) {
            id
            nombre
            telefono
            email
            empresa
            notas
        }
    }`
)

