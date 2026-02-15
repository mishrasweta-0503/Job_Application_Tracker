import React from 'react';
import { useSelector} from 'react-redux';

export default function DashboardPage() {
    const numapplications = useSelector(state => state.applications.applications);
    const processingcount = numapplications.filter(num => num.status === 'Processing').length;
    const interviewcount = numapplications.filter(num => num.status === 'Interview').length;
    const offeredcount = numapplications.filter(num => num.status === 'Offered').length;
    return(
        <>
            <div className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <p className="dashboard-subtitle">Quick overview of your applications</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                <p className="stat-label">Total Applications</p>
                <p className="stat-value">{numapplications.length}</p>
                </div>

                <div className="stat-card stat-card--processing">
                <p className="stat-label">Processing</p>
                <p className="stat-value">{processingcount}</p>
                </div>

                <div className="stat-card stat-card--interview">
                <p className="stat-label">Interview</p>
                <p className="stat-value">{interviewcount}</p>
                </div>

                <div className="stat-card stat-card--offered">
                <p className="stat-label">Offered</p>
                <p className="stat-value">{offeredcount}</p>
                </div>
            </div>

        </>
    )
}