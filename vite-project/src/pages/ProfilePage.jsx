import React from 'react';
import ReactRouterDomLink from '../component/ReactRouterDomLink.jsx';
import ReactRouterDomNavLink from '../component/ReactRouterDomNavLink.jsx';

const ProfilePage = () => {
    return (
        <div>
            <ReactRouterDomLink/>
            <ReactRouterDomNavLink/>

            <h1>This Is Profile Page</h1>            
            
        </div>
    );
};

export default ProfilePage;