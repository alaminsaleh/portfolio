import { createBrowserRouter } from "react-router";
import Layout from "../component/Layout";
import Home from "../pages/Home";
import Personalinfo from "../pages/Personalinfo";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [{
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/pinfo",
            element: <Personalinfo></Personalinfo>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/skills',
            element: <Skills></Skills>
        },
        {
            path: '/projects',
            element: <Projects></Projects>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        ]
    },
]);