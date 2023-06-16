import './App.css';
import Header from './Header';
import MainText from './MainText'
import Translator from './Translator'

const App = () => {
  return (
    <div>
      <div style={{display:'flex', borderBottom:'1px gray solid'}}>
        <h1 style={{paddingLeft:'225px'}}>
          FLOWSCAPE
        </h1>
      
      
      <Header>
      </Header>
      </div>
<MainText>

</MainText>

 <div>
<Translator>
          </Translator>
</div>

    </div>
  );
};

export default App;
