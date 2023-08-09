export class Cuenta {

    protected saldo : number
    protected numeroConsignaciones : number = 0
    protected numeroRetiros : number = 0
    protected tasaAnual : number
    protected comisionMensual : number = 0

    constructor(saldo:number,tasaAnual:number) {
        this.saldo = saldo
        this.tasaAnual = tasaAnual
    }

    public getSaldo() : number {
        return this.saldo
    }
    public getNumeroConsignaciones() : number {
        return this.numeroConsignaciones
    }
    public getNumeroRetiros() : number {
        return this.numeroRetiros
    }
    public getTasaAnual() : number {
        return this.tasaAnual
    }
    public getComisionMensual() : number {
        return this.comisionMensual
    }

    public setSaldo(saldo:number) {
        this.saldo = saldo
    }
    public setNumeroConsignaciones(numeroConsignaciones:number) {
        this.numeroConsignaciones = numeroConsignaciones
    }
    public setNumeroRetiros(numeroRetiros:number) {
        this.numeroRetiros = numeroRetiros
    }
    public setTasaAnual(tasaAnual:number) {
        this.tasaAnual = tasaAnual
    }
    public setComisionMensual(comisionMensual:number) {
        this.comisionMensual = comisionMensual
    }

    consignar(cantidad:number){
        this.saldo = this.saldo + cantidad
        this.numeroConsignaciones = this.numeroConsignaciones+1
    }
    retirar(cantidad:number){
        if (cantidad <= this.saldo) {
            this.saldo = this.saldo - cantidad
            this.numeroRetiros = this.numeroRetiros+1
        } 
        else {
            console.log("Saldo insuficiente para retirar.")
        }
    }
    calcularInteres(){
        let interesMensual = (this.saldo * this.tasaAnual) / 12 / 100;
        this.saldo = this.saldo + interesMensual
    }
    extractoMensual(){
        this.saldo = this.saldo - this.comisionMensual
        this.calcularInteres()
    }
    imprimir() {
        console.log("Saldo: " + this.saldo);
        console.log("Número de consignaciones: " + this.numeroConsignaciones);
        console.log("Número de retiros: " + this.numeroRetiros);
    }

}