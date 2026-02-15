import React,{useEffect, useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { applicationAdded } from '../applications/applicationsSlice.js';
import { applicationUpdated } from '../applications/applicationsSlice.js';
import { v4 as uuidv4 } from 'uuid';

export default function ApplicationFormPage() {
    const { id } = useParams();
    const isEdit = Boolean(id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const applications = useSelector((state) => state.applications.applications); //read data from redux
    let existingApp = isEdit ? applications.find(app => app.id === id) : null;
    const[company,setCompany] = useState('');
    const[role,setRole] = useState('');
    const[status,setStatus] = useState('all');
    if (isEdit && !existingApp) {
        return <p>Application not found.</p>;
      }
    const isFormValid = () => {
        if (company.trim() !== '' && role.trim() !== ''){
            return true
        }else {
            return false
        }
    }
    useEffect(() => {
      if(isEdit && existingApp){
        setCompany(existingApp.company);
        setRole(existingApp.role);
        setStatus(existingApp.status);
      }
    },[isEdit, existingApp])

    function handleSubmit(e){
        e.preventDefault();
        if(isEdit){
            dispatch(applicationUpdated({ id, changes: { company, role, status } }))
        }else{
            dispatch(applicationAdded({ id: uuidv4(), company, role, status, createdAt: new Date().toISOString() }))
        }
        navigate("/applications")
    }
    return(
        <>
        <form className="app-form" onSubmit={handleSubmit}>
            <h2 className="form-title">{isEdit ? "Edit Application" : "Add Application"}</h2>

            <div className="form-field">
                <label htmlFor="company">Company</label>
                <input
                id="company"
                type="text"
                value={company}
                required
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g., Careem"
                />
            </div>

            <div className="form-field">
                <label htmlFor="role">Role</label>
                <input
                id="role"
                type="text"
                value={role}
                required
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g., Frontend Developer"
                />
            </div>

            <div className="form-field">
                <label htmlFor="status">Status</label>
                <select
                id="status"
                value={status}
                required
                onChange={(e) => setStatus(e.target.value)}
                >
                <option value="all">All</option>
                <option value="Processing">Processing</option>
                <option value="Interview">Interview</option>
                <option value="Offered">Offered</option>
                </select>
            </div>

            <div className="form-actions">
                <button className="btn btn--primary" type="submit" disabled={!isFormValid()}>
                {isEdit ? "Save" : "Submit"}
                </button>

                <button className="btn btn--ghost" type="button" onClick={() => navigate("/applications")}>
                Cancel
                </button>
            </div>
            </form>

        </>
    )
}