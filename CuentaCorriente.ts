import { Cuenta } from "./Cuenta";

export class CuentaCorriente extends Cuenta {
    
    private sobregiro : number = 0

    public getSobregiro() : number {
        return this.sobregiro
    }

    public setSobregiro(sobregiro:number) {
        this.sobregiro = sobregiro
    }

    consignar(cantidad: number) {
        if (this.sobregiro > 0) {
            if (cantidad <= this.sobregiro) {
                this.sobregiro = this.sobregiro - cantidad;
            } 
            else {
                this.saldo = this.saldo + (cantidad - this.sobregiro);
                this.sobregiro = 0;
            }
        } 
        else {
            super.consignar(cantidad);
        }
    }
    retirar(cantidad: number) {
        if (cantidad <= this.saldo + this.sobregiro) {
            if (cantidad <= this.saldo) {
                this.saldo = this.saldo - cantidad
            } 
            else {
                this.sobregiro = this.sobregiro - (cantidad - this.saldo)
                this.saldo = 0
            }
            this.numeroRetiros = this.numeroRetiros + 1
        } 
        else {
            console.log("No se puede retirar esa cantidad por sobregiro insuficiente.");
        }
    }
    imprimir() {
        super.imprimir();
        console.log("Sobregiro: " + this.sobregiro);
    }

}