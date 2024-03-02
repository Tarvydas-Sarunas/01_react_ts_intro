type StatusProps = {
  status: 'loading' | 'error' | 'success';
};

export default function Status(props: StatusProps) {
  console.log('props ===', props);
  let classForStatus = '';
  if (props.status === 'error') {
    classForStatus = 'danger';
  } else if (props.status === 'loading') {
    classForStatus = 'info';
  } else {
    classForStatus = 'success';
  }

  return (
    <div>
      <div className={`text-capitalize alert alert-${classForStatus}`}>{props.status}</div>

      {/* {props.status === 'success' && <div className='alert alert-success'>Success</div>}
      {props.status === 'error' && <div className='alert alert-success'>Error</div>}
      {props.status === 'loading' && <div className='alert alert-info'>Loading</div>} */}

      {/* <div className='alert alert-success'>Success</div>
      <div className='alert alert-danger'>Error</div>
      <div className='alert alert-info'>Loading</div> */}
    </div>
  );
}
