export default function Error({ message, title, onConfirm }) {
  return (
    <div className="error">
      <p>{title}</p>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  );
}
