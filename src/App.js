
import { useState } from 'react';
import Banner from './componets/Banner/index';
import Formulario from './componets/Formulario';
import Time from './componets/Time';

function App() {

  const time = [
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSegundaria: '#d9f7e9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82cffa',
      corSegundaria: '#e8f8ff'
    },
    {
      nome:'Data Science',
      corPrimaria:'#a6d15f',
      corSegundaria: '#f0f8e2'
    },
    {
      nome:'Devops',
      corPrimaria:'#e06b69',
      corSegundaria: '#fde9f5'
    },
    {
      nome:'UX e Desinig',
      corPrimaria:'#db6ebf',
      corSegundaria: '#fae9f5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#ffba05',
      corSegundaria: '#fff5d9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#ff8a29',
      corSegundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboladores] = useState([]);

  const aoNovoColaboradorAdd = (colaborador) => {
    console.log(colaborador)
    setColaboladores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
     <Formulario time={time.map(time =>  time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)}/>

     {time.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSegundaria={time.corSegundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
      

    </div>
  );
}

export default App;
