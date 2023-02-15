import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../Components/Layout';
import Home from './Home';
import { Test } from './Test';

export function Navigation() {

    return (
        <Routes>
           
             <Route element={<Layout />}>
                 <Route index element={<Home />} />
                <Route path="/test-deploy" element={<Home />} />
                <Route path="/test" element={<Test />} />
                
            </Route>
        </Routes>
    );
}

