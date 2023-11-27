import Header from "./header";
import { useState } from "react";
import Nav from "./nav";

function Dashboard() {
    const [openNav, setOpenNav] = useState(false);
    return (
        <>
        <Header onOpenNav={() => setOpenNav(true)} />
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
        </>
    );
}

export default Dashboard;