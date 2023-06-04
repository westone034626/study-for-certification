import React from 'react';
import { Link, useRouteLoaderData } from 'react-router-dom';

export default function Index() {
    const tests = useRouteLoaderData('root');

    return (
        <React.Fragment>
            <h1>산업위생관리기사</h1>

            <ul>
                {tests.map((test) => (
                    <li key={test.id}>
                        <Link to={`/tests/${test.id}`}>{test.title}</Link>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}
