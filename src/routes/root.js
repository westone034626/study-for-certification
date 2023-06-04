import { Outlet } from 'react-router-dom';
import * as tests from '../data/tests';
import { BasePageWrapper } from '../components';

export async function loader() {
    return Object.values(tests);
}

export default function RootRoute() {
    return (
        <BasePageWrapper>
            <Outlet/>
        </BasePageWrapper>
    );
}
