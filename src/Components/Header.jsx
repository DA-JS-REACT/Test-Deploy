import React from 'react';
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <nav>
            <ul>
                <li>Home </li>
                <li>
                    <Link className="link" to="/test-deploy/test">
                           test
                    </Link>
                </li>
                <li>A propos</li>
            </ul>
        </nav>
    );
}

