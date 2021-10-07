import './App.css';

function App() {
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
          <p>Foto por <a href="https://unsplash.com/photos/N2a5NDmT8ls">Chris Greene</a> em <a href="https://unsplash.com/">Unsplash</a>.Usada gratuitamente de acordo com a <a href="https://unsplash.com/license">licença.</a></p>
        </div>



      </div>

      <div id="agendar">
        <h2>Faça o seu agendamento:</h2>
        <fieldset>
          <label>Sede: </label>
          <select required id="selecionar">
            <option value="">Selecione</option>
            <option value="São Paulo">São Paulo - Principal</option>
            <option value="Santos">Santos - Filial</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Data: </label>
          <input type="date" required />
        </fieldset>
        <fieldset>
          <label>Escolha a sua estação de trabalho: </label>
          <select required id="selecionar">
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
        <button type="submit">Agendar</button>
      </div>

    </>
  );
}

export default App;
