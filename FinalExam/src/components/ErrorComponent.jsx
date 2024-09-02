export default function ErrorComponent({ text = 'Error loading data' }) {
  return (
    <div className='error__container'>
      <span className='error'></span>
      <p className='error__text'>{text}</p>
    </div>
  );
}
