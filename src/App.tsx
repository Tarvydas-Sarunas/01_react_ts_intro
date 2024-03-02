import Greet from './components/Greet';
import Heading from './components/Heading';
import Person, { PersonProps } from './components/Person';
import PersonList from './components/PersonList';
import { PersonObj } from './components/PersonObj.type';

function App() {
  const personObj = {
    firstName: 'Oras',
    lastName: 'Geras',
  };

  const personArr: PersonObj[] = [
    {
      firstName: 'James',
      lastName: 'Bond',
    },
    {
      firstName: 'Bruce',
      lastName: 'Wayne',
    },
    {
      firstName: 'Clark',
      lastName: 'Kent',
    },
  ];

  return (
    <div className='container'>
      <h1 className='display-2'>React TS App</h1>
      <Person item={personObj} />
      <PersonList list={personArr} />
      <Heading title='Sveiki' />
      <Greet name='Brolis' amaount={1_000_000} favoritColor='tomato' />
      <Greet name='Mike' amaount={10_000_000} />
    </div>
  );
}

export default App;
