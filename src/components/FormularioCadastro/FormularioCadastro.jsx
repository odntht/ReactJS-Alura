import { Button, TextField } from '@material-ui/core';
function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
