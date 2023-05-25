import { lazy, LazyExoticComponent } from "react";
import Modal from "../components/Modal";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const NuevoPresupuesto = lazy(() => import('../components/NuevoPresupuesto'));
const ControlPresupuesto = lazy(() => import('../components/ControlPresupuesto'));

export const routes: Route[] = [
    {
        to: '/',
        path: '/*',
        Component: NuevoPresupuesto,
        name: 'Nuevo Presupuesto',
    },
    {
        to: '/control-presupuesto',
        path: 'control-presupuesto',
        Component: ControlPresupuesto,
        name: 'Control de presupuestos'
    },
    {
        to: '/modal',
        path: 'modal',
        Component: Modal,
        name: 'Nuevo Presupuesto',
    },
];
