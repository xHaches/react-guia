
import { gql } from '@apollo/client'


export const FIND_CLIENTE_BY_ID_QUERY = gql`
    query findClienteById($id: ID!) {
        Cliente(id: $id) {
            id
            nombre
            telefono
            email
            empresa
            notas
        }
    }
`;

export const GET_ALL_CLIENTES_QUERY = gql`
    {
        allClientes {
            id
            nombre
            telefono
            email
            empresa
        }
    }
`;

export const CREATE_CLIENTE_MUTATION = gql`
    mutation createCliente(
        $nombre: String!,
        $telefono:String!,
        $email:String!,
        $empresa:String!,
        $notas:String!
    ) {
        createCliente(
        nombre: $nombre,
        telefono:$telefono,
        email:$email,
        empresa:$empresa,
        notas:$notas
        ) {
        id,
        nombre,
        telefono,
        email,
        empresa,
        notas
        }
    }
`;

export const UPDATE_CLIENTE_MUTATION = gql`
    mutation updateCliente(
        $id:ID!,
        $nombre: String!,
        $telefono:String!,
        $email:String!,
        $empresa:String!,
        $notas:String!
    ) {
        updateCliente(
        id: $id,
        nombre: $nombre,
        telefono:$telefono,
        email:$email,
        empresa:$empresa,
        notas:$notas
        ) {
        id,
        nombre,
        telefono,
        email,
        empresa,
        notas
        }
    }
`;

export const REMOVE_CLIENTE_MUTATION = gql`
    mutation removeCliente($id:ID!) {
        removeCliente(id:$id){
        id
        nombre
        telefono
        email
        empresa
        notas
    }
    }
`;