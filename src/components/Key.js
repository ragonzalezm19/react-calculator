import './Key.css';

function Key(props) {
  const double = props.double || false;
  const className = props.className;

  if (double) {
    return (
      <div className={`key double ${className}`}>
        <span className="content">{props.children}</span>
      </div>
    );
  }

  return (
    <div className={`key ${className}`}>
      <span className="content">{props.children}</span>
    </div>
  );
}

export default Key;
