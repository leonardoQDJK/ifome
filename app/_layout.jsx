import React from "react";
import { Slot } from "expo-router";
import { AppProvider } from './scripts/AppContext'; 
const Layout = () => {
    return (
        <AppProvider>
            <Slot />
        </AppProvider>
    );
};

export default Layout;
