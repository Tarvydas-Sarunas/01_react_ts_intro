import Person from './Person';
import { PersonObj } from './PersonObj.type';

type PersonListProps = {
  list: PersonObj[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      <h3>Person List</h3>
      <ul className='list-group'>
        {props.list.map((pObj) => (
          <li className='list-group-item' key={pObj.id}>
            <Person item={pObj} />
          </li>
        ))}
      </ul>
    </div>
  );
}
