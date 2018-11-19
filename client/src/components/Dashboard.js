import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from './contactList/ContactList';

const Dashboard = () => {
    return (
        <div>
            <h3 className=" blue-text darken-4"><strong>Dashboard</strong></h3>

            < ContactList />
            
            <div className="fixed-action-btn">
                <Link to="/contacts/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;