import { CuentaAhorros } from "./CuentaAhorros";
import { CuentaCorriente } from "./CuentaCorriente";

let cuentaAhorros = new CuentaAhorros(1200000, 2);
cuentaAhorros.consignar(30000);
cuentaAhorros.retirar(50000);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();

console.log("/////////////////////////")

let cuentaCorriente = new CuentaCorriente(800000, 1);
cuentaCorriente.consignar(20000);
cuentaCorriente.retirar(10000);
cuentaCorriente.consignar(50000);
cuentaCorriente.extractoMensual();
cuentaCorriente.imprimir();