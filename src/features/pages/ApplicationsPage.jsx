import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { updateSearchText } from '../filters/filtersSlice';
import { updateStatus } from '../filters/filtersSlice';
import { resetFilters } from '../filters/filtersSlice';
import { applicationDeleted } from '../applications/applicationsSlice.js';
import { useNavigate } from 'react-router-dom';
import ApplicationCard from '../components/ApplicationCard.jsx'

export default function ApplicationsPage() {
    const navigate = useNavigate();
    const searchTextValue = useSelector(state => state.filters.searchText);
    const statusValue = useSelector(state => state.filters.status);
    const readApplications = useSelector(state => state.applications.applications);

    let visibleApplications = [...readApplications]; //copy
    visibleApplications.sort((a, b) => {
        const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return bTime - aTime;
    });
    
    const query = searchTextValue.trim().toLowerCase();
    if(query !== ''){
        visibleApplications = visibleApplications.filter(item => item.company.trim().toLowerCase().includes(query) || item.role.trim().toLowerCase().includes(query))
    }

    const dispatch = useDispatch();
    function handleChange(e){
        dispatch(updateSearchText(e.target.value));
    }
    function handleStatusChange(e){
        dispatch(updateStatus(e.target.value));
    }
    function handleReset(){
        dispatch(resetFilters());
    }
    function handleDelete(id){
        if (window.confirm("Are you sure you want to delete this application?")){
            dispatch(applicationDeleted(id));
        }
    }
    function handleEdit(id){
        navigate(`/applications/${id}`);
    }
    if(statusValue !== 'all'){
        visibleApplications = visibleApplications.filter(item => item.status === statusValue)
    }
    return(
        <>
            <h1>Applications</h1>
            <div className="controls">
            <input
                id="simple-input"
                type="text"
                value={searchTextValue}
                onChange={handleChange}
                placeholder="Enter text here"
            />
            <select value={statusValue} onChange={handleStatusChange}>
                <option value="all">All</option>
                <option value="Processing">Processing</option>
                <option value="Interview">Interview</option>
                <option value="Offered">Offered</option>
            </select>
            </div>
            <div>
            {visibleApplications.length > 0 ? (
                <div>
                    {visibleApplications.map((item) => (
                        <ApplicationCard key={item.id} item={item} onEdit={handleEdit} onDelete={handleDelete}/>
                    ))}
                </div>
            ) : (
                <p>No applications found.</p>
            )}
            </div>
            <div>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}