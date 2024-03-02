// priima du props firstname ir last name abu string

import { PersonObj } from './PersonObj.type';

// jsx atvaizduojame su kiek stiliaus varda ir pavarde

// importuojame i App.tsx

// priima objekta kuris turi viduje dvi savybes first name ir last name

export type PersonProps = {
  item: PersonObj;
};

export default function Person(props: PersonProps) {
  return (
    <div>
      <div className='alert alert-dark'>
        {props.item.firstName} {props.item.lastName}
      </div>
    </div>
  );
}
