
import './App.css';
import Imagem from "./Imagem/bruna.jpg"
import imagens from "./imagens/assim.jpg"
import Post from './componente/Post'
import Comentario from './componente/Comentario'
function App() {
  return (
    <div className="App">
       <Post 
      titulo= "O que é livramento e por que Bruna Marquezine viralizou com ataque de riso em entrevista"
      imagem={Imagem}
      alt="teste"
     descricao="Reação da atriz virou meme na web, e fãs atribuíram gargalhada ao término com Neymar." 
      categoria= "Fofoca"
      comentario= "Amei isso kkkkkkkk"
      />
      <Comentario  
      alt="teste"
      imagens={imagens} 
      nomes="Blogueirinha"
      comentario="Amei isso AKAKAKKAKAKAKAKK"
       />
    </div>
  );
}

export default App;
