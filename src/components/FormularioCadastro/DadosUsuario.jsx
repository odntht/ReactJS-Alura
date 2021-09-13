import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      aoEnviar({ email, senha })
    }}>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id='email'
        label='E-mail'
        type='email'
        required
        variant='outlined'
        margin='normal'
        fullWidth />
      <TextField
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        id='senha'
        label='Senha'
        type='password'
        required
        variant='outlined'
        margin='normal'
        fullWidth />
      <Button
        type='submit'
        variant='contained'
        color='primary'>
        Cadastrar
      </Button>
    </form>

  );
}

export default DadosUsuario;