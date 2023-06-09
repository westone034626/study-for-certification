import React from 'react';
import { useLoaderData } from 'react-router-dom';
import * as tests from '../../data/tests';
import { Footer } from '../../components';

export async function loader({ params }) {
    const testId = params.testId;
    const test = Object.values(tests).find((test) => test.id === Number(testId));

    if (!test) {
        throw new Response('', {
            status: 404,
            statusText: 'Not found',
        });
    }

    return test;
}

export default function TestRoute() {
    const test = useLoaderData();

    return (
        <React.Fragment>
            <h1>{test?.title}</h1>

            <Footer title={'시험 응시'}/>
        </React.Fragment>
    );
}
