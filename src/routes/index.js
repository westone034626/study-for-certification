import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import { TestItem } from '../components';

export default function Index() {
    const tests = useRouteLoaderData('root');

    return (
        <React.Fragment>
            <h1>산업위생관리기사</h1>

            <ul>
                {tests.map((test, index) => (
                    <React.Fragment>
                        {!!index && <div style={{ paddingTop: 24 }}></div>}

                        <TestItem key={test.id} test={test}/>
                    </React.Fragment>
                ))}
            </ul>
        </React.Fragment>
    );
}
