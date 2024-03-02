import Greet from './components/Greet';
import Heading from './components/Heading';
import Person, { PersonProps } from './components/Person';

function App() {
  const personObj = {
    firstName: 'Oras',
    lastName: 'Geras',
  };

  return (
    <div className='container'>
      <h1 className='display-2'>React TS App</h1>
      <Heading title='Sveiki' />
      <Greet name='Brolis' amaount={1_000_000} favoritColor='tomato' />
      <Greet name='Mike' amaount={10_000_000} />
      <Person item={personObj} />
    </div>
  );
}

export default App;
