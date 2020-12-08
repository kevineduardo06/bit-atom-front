export class Terapia{

  constructor(
   public id?: number,
  public nome?: string,
  public dataComeco?: Date,
  public dataFim?: Date,
  public medicamentoUm?: string,
  public doseUm?: number,
  public intervaloUm?: number,
  public medicamentoDois?: string,
  public doseDois?: number,
  public intervaloDois?: number,
  public medicamentoTres?: string,
  public doseTres?: number,
  public intervaloTres?: number,
  public medico?: string,



  ) {
  }


}
