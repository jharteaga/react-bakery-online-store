import React from 'react';

function Input({ name, label, error, ...rest }) {
  return (
    <div class="form-group">
      <label for={name}>{label}</label>
      <input type="text" className="form-control" id={name} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;
