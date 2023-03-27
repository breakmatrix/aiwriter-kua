import React, {Fragment} from "react";


interface Props {
    children: React.ReactNode;
    title: string;
}
export const SIDEBAR_ITEMS: any = [
    {
        label: "Templates",
        url: "/",
    },
    {
        label: "Fork this repo",
        url: "https://github.com/yuvalsuede/jasper-alternative-gpt",
        target: "blank"
    },
    {
        label: "Follow me on LinkedIn",
        url: "https://www.linkedin.com/in/yuval-suede/",
        target: "blank"
    },
    {
        label: "Contact",
        url: "https://www.linkedin.com/in/yuval-suede/",
        target: "blank"
    },
];


const Layout: React.FC<Props> = ({ children, title }) => {

    return (
        <Fragment>
            <div className="min-h-screen relative w-full md:flex md:flex-row">
                
                <main className="w-full md:flex-grow">
                    { title && <h1 className="text-black text-2xl font-bold mb-4 mt-10 pr-4 pl-4 pt-4">{title}</h1> }
                    {children}
                </main>
                
            </div>
        </Fragment>
    );
};

export default Layout;
