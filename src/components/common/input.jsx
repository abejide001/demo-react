import React from 'react'

export default function input({value, name, onChange, type, error}) {
  return (
    <div className="form-group">
    <input value={value} type={type} className="form-control" placeholder="email" name={name} onChange={onChange}/>
    {error && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}
