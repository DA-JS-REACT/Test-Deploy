import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../Components/Layout';
import { Error } from './Error';
import Home from './Home';
import { Test } from './Test';

export function Navigation() {

    return (
        <Routes>
             <Route element={<Layout />}>
                 <Route index element={<Home />} />
                <Route exact  path="/test-deploy" element={<Home />} />
                <Route exact path="/test-deploy/test" element={<Test />} />
                <Route path="/test-deploy/*"  element={<Error />} />
            </Route>
        </Routes>
    );
}

