import './App.css';
import Header from './Header';
import MainText from './MainText'

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
    </div>
  );
};

export default App;
