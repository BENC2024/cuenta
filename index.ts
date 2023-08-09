
import { CuentaAhorros } from "./CuentaAhorros";
import { CuentaCorriente } from "./CuentaCorriente";

let cuentaAhorros = new CuentaAhorros(12000, 2);
cuentaAhorros.consignar(3000);
cuentaAhorros.retirar(500);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();


let cuentaCorriente = new CuentaCorriente(8000, 1);
cuentaCorriente.consignar(2000);
cuentaCorriente.retirar(10000);
cuentaCorriente.consignar(5000);
cuentaCorriente.extractoMensual();
cuentaCorriente.imprimir();