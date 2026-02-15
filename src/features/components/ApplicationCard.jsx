import React from "react";

export default function ApplicationCard({item,onEdit,onDelete}){
    const badgeClass =
    item.status === 'Processing'
      ? 'badge--processing'
      : item.status === 'Interview'
      ? 'badge--interview'
      : item.status === 'Offered'
      ? 'badge--offered'
      : 'badge--default';
    return(
        <>
            <div className="application-card">
                <h3>Company : {item.company}</h3>
                <p>Role : {item.role}</p>
                <span className={`badge ${badgeClass}`}>
                    {item.status}
                </span>
                <p>Created: {new Date(item.createdAt).toLocaleString()}</p>
                <div className="button-group">
                    <button className="btn btn--edit" onClick={() => onEdit(item.id)}>Edit</button>
                    <button className="btn btn--danger" onClick={() => onDelete(item.id)}>Delete</button>
                </div>
            </div>
        </>
    )
}