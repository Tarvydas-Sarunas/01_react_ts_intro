// priima du props firstname ir last name abu string

// jsx atvaizduojame su kiek stiliaus varda ir pavarde

// importuojame i App.tsx

// priima objekta kuris turi viduje dvi savybes first name ir last name

export type PersonProps = {
  item: { firstName: string; lastName: string };
};

export default function Person(props: PersonProps) {
  return (
    <div>
      <div className='alert alert-dark'>
        <p className='text-danger bg-info fs-3'>{props.item.firstName}</p>
        <p className='text-info bg-danger fs-3'>{props.item.firstName}</p>
      </div>
    </div>
  );
}
