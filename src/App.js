import './App.css';
import HeroCard from './components/HeroCard'
import styled from 'styled-components';
// import HeroList from './components/HeroList'

function App() {
  return (
    <div className="App">
      <Title>Dota 2 Character Randomizer</Title>
      {/* <HeroList></HeroList> */}
      <HeroCard></HeroCard>
    </div>
  );
}

const Title = styled.h1`
  font-size:5em;
  color:green;
`

export default App;
