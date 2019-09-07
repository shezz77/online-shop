import HomeComponent from './../views/home';

export const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        redirect: true,
        path: "*",
        to: "/"
    }

];