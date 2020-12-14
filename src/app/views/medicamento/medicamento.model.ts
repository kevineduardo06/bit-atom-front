export class Medicamento{
  constructor(
    public id?: number,
    public nome?: string,
    public sintomaUm?: string,
    public sintomaDois?: string,
    public sintomaTres?: string,
    public idPaciente?: number
  ) {
  }

}
