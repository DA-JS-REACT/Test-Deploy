import React from 'react';
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <nav>
            <ul>
                <li> <Link className="link" to="/">
                          Home
                    </Link></li>
                <li>
                    <Link className="link" to="/test">
                           Test
                    </Link>
                </li>
                <li>A propos</li>
            </ul>
        </nav>
    );
}

