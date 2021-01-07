import './Key.css';

function Key(props) {
  const className = props.className;

  return (
    <div className={`key ${className}`}>
      <span className="content">{props.children}</span>
    </div>
  );
}

export default Key;
