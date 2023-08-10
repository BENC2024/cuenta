import { Cuenta } from "./Cuenta";

export class CuentaAhorros extends Cuenta {
    
    private activa : boolean

    constructor(saldo:number,numeroConsignaciones:number) {
        super(saldo,numeroConsignaciones)
        if (saldo >= 10000){
            this.activa = true
        }
        else{
            this.activa = false
        }
    }

    public getActiva() : boolean {
        return this.activa
    }

    public setActiva(activa:boolean) {
        this.activa = activa
    }

    consignar(cantidad: number) {
        if (this.activa) {
            super.consignar(cantidad); //Aqui llamo al metodo de clase padre Cuenta
        } else {
            console.log("La cuenta de ahorros está inactiva.");
        }
    }
    retirar(cantidad: number) {
        if (this.activa) {
            super.retirar(cantidad);
        } 
        else {
            console.log("La cuenta de ahorros está inactiva.");
        }
    }
    extractoMensual() {
        if (this.numeroRetiros > 4) {
            this.comisionMensual = 1000 * (this.numeroRetiros - 4);
        }
        super.extractoMensual();
    }
    imprimir() {
        super.imprimir();
        console.log("Cuenta activa: ", this.activa);
        console.log("Comisión mensual: ", this.comisionMensual);
        console.log("Número de transacciones: ", this.numeroConsignaciones + this.numeroRetiros);
    }

}