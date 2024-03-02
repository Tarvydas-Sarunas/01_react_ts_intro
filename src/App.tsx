import Button from './components/Button';
import Greet from './components/Greet';
import Grid from './components/Grid';
import Heading from './components/Heading';
import Person from './components/Person';

import PersonList from './components/PersonList';
import { PersonObj } from './components/PersonObj.type';
import Status from './components/Status';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';

function App() {
  const personObj: PersonObj = {
    id: 50,
    firstName: 'Oras',
    lastName: 'Geras',
  };

  const personArr: PersonObj[] = [
    {
      id: 1,
      firstName: 'James',
      lastName: 'Bond',
    },
    {
      id: 2,
      firstName: 'Bruce',
      lastName: 'Wayne',
    },
    {
      id: 3,
      firstName: 'Clark',
      lastName: 'Kent',
    },
  ];

  function printName(): void {
    console.log('Hi my name is James');
  }

  function sum(sk1: number, sk2: number): number {
    return sk1 + sk2;
  }

  return (
    <Container>
      <h1 className='display-2'>React TS App</h1>
      {/* <Heading title='Sveiki' /> */}

      <User />

      {false && (
        <>
          <Grid>
            <LoggedIn />
            <Heading size={5 || 3}>Dar vienas headingas</Heading>
            <Button
              onClick={(event, id) => {
                console.log('event ===', event.currentTarget, id);
                printName();
              }}
              sumuok={sum}
            />
            <Status status='success' />
          </Grid>
          <Person item={personObj} />
          <PersonList list={personArr} />

          <Greet name='Brolis' amaount={1_000_000} favoritColor='tomato' />
          <Greet name='Mike' amaount={10_000_000} />
        </>
      )}
    </Container>
  );
}

export default App;
