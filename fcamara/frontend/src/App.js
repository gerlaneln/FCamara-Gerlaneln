import './App.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [agendamento, setAgendamento] = useState({
    sede: '',
    data: '',
    estacao: '',
    email: ''
  });

  const agendar = async (agendamento) => {
    console.log(agendamento.sede);
    console.log(agendamento.data);
    console.log(agendamento.estacao);
    console.log(agendamento.email);
    console.log(agendamento);
    try{
      const be = await axios.post('http://localhost:8080/register', agendamento);
      if(be.status === 200){
        alert('Agendamento realizado com sucesso. Informe seu e-mail na recepção.');
      }
    }catch(error){
      alert('Falha ao realizar agendamento. Entre em contato com o administrador.');
    }
  }

  return (
    <>
      <div id="navbar">
        <a href="https://www.fcamara.com.br/"><img id="logo" src="https://magento.fcamara.com.br/wp-content/uploads/2021/01/logo-fcamara-laranja-02-1.png" alt="Retornar para o FCamara" /></a>
        <a href="#middle">Cuidados</a>
        <a href="#agendar">Agendar</a>
      </div>

      <div id="header">
        <span>Foto por <a href="https://unsplash.com/photos/WBM97UGM0QA">engin akyurt</a> em <a href="https://unsplash.com/">Unsplash</a>. Usada gratuitamente de acordo com a <a href="https://unsplash.com/license">licença.</a></span>
        <div id="links-header">
          <h1>Agendamentos</h1>
          <p>Nossos escritórios estarão abertos das 8:00 às 18:00. O agendamento é obrigatório.</p>
          <a id="button-header" href="#agendar">Agendar agora</a>
        </div>
      </div>

      <div id="middle">
        <div id="text-left">
          <ul>
            <li>Sua temperatura será medida na chegada ao escritório.</li>
            <li>Use máscara dentro de todas as dependências do escritório.</li>
            <li>As mesas onde você pode trabalhar estão marcadas com um adesivo laranja.</li>
            <li>Conforme a legislação, estamos funcionando com 40% da capacidade.</li>
          </ul>
        </div>
        <div>
          <p>Foto por <a href="https://unsplash.com/photos/N2a5NDmT8ls">Chris Greene</a> em <a href="https://unsplash.com/">Unsplash</a>. Usada gratuitamente de acordo com a <a href="https://unsplash.com/license">licença.</a></p>
        </div>
      </div>

      <div id="agendamento">
        <h2>Faça o seu agendamento:</h2>

        <fieldset>
          <label>Sede: </label>
          <select id="selecionar" onChange={(e) => {
            console.log(e.target.value);
            setAgendamento({...agendamento, sede: e.target.value.toString()});
          }} value={agendamento.sede} required>
            <option value="">Selecione</option>
            <option value="São Paulo">São Paulo - Principal</option>
            <option value="Santos">Santos - Filial</option>
          </select>
        </fieldset>

        <fieldset>
          <label>Data: </label>
          <input type="date" required  onChange={(e) => {
            console.log(e.target.value);
            setAgendamento({...agendamento, data: e.target.value});
          }} value={agendamento.data}/>
        </fieldset>

        <fieldset>
          <label>Escolha a sua estação de trabalho: </label>
          <select required id="selecionar" onChange={(e) => {
            console.log(e.target.value);
            setAgendamento({...agendamento, estacao: e.target.value.toString()});
          }} value={agendamento.estacao}>
            <option value="">Selecione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </fieldset>

        <fieldset>
          <label>E-mail: </label>
          <input type="email" required onChange={(e) => {
            console.log(e.target.value);
            setAgendamento({...agendamento, email: e.target.value});
            console.log(agendamento);
          }} value={agendamento.email}/>
        </fieldset>

        <button type="submit" onClick={() => agendar()}>Agendar</button>
      </div>
    </>
  );
}

export default App;
