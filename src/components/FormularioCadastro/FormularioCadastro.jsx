import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from './DadosPessoais';
import DadosUsuario from "./DadosUsuario";

const FormularioCadastro = ({ aoEnviar, validarCPF }) => {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})
  useEffect(() => {
    console.log(dadosColetados)
  })

  const proximo = () => {
    setEtapaAtual(etapaAtual + 1)
  }

  const coletarDados = (dados) => {
    setDados({ ...dadosColetados, ...dados });
    proximo()
  }

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />
  ]

  return (
    <>
      {formularios[etapaAtual]}
    </>

  );
}

export default FormularioCadastro;
