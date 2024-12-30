import React from 'react';
import ReactRouterDomLink from '../component/ReactRouterDomLink.jsx';
import ReactRouterDomNavLink from '../component/ReactRouterDomNavLink.jsx';

const ProductPage = () => {
    return (
        <div>
            <ReactRouterDomLink/>
            <ReactRouterDomNavLink/>

            <h1>This Is Product Page</h1>            
        </div>
    );
};

export default ProductPage;