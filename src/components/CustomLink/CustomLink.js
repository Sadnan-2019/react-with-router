import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import {bootstrap} from React bootstrap
import {  } from 'react-bootstrap';


function CustomLink({ children, to, ...props }) {
          let resolved = useResolvedPath(to);
          let match = useMatch({ path: resolved.pathname, end: true });
        
          return (
            <div >
              <Link className=' p-4'
                style={{color:match ? "white":"black", textDecoration: match ? "underline" : "none" }}
                to={to}
                {...props}
              >
                {children}
              </Link>
              
            </div>
          );
        }

export default CustomLink;