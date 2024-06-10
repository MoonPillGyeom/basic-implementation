export default function Button({ type, text, size, onClick }) {
  return (
    <>
      <button onClick={onClick} type={type} className={size}>
        {text}
      </button>
    </>
  );
}
