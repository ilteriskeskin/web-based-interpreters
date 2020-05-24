import Home from "./components/Home";
import MarkdownComponent from "./components/MarkdownComponent";
import PythonComponent from "./components/PythonComponent";

import NotFoundComponent from "./components/NotFoundComponent";

export const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/markdown', component: MarkdownComponent, name: 'MarkdownComponent' },
    { path: '/python', component: PythonComponent, name: 'PythonComponent' },

    { path: '*', component: NotFoundComponent },
];