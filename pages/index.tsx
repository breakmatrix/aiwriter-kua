import React from 'react';
import Layout from '../components/Layout';
import Head from "next/head";
import CardGrid from "../components/CardGrid";
import {TEMPLATES} from "../constants/templates";

const HomePage: React.FC = () => {

    return (
        <Layout title="">
            <Head>
                <title>跨境电商 ChatGPT 提示词生成器</title>      
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-4xl font-bold mt-10 ml-10">
                欢迎来到 <span className="text-blue-600">跨境电商 ChatGPT 提示词生成器</span>
                
            </h1>

            <h2 className="text-2xl font-light mt-5 ml-10">
                创建丰富 <strong className="text-blue-600"> 营销文案提示词</strong> （以下输入框建议输入英文）
            </h2>
            <CardGrid cards={TEMPLATES}/>
        </Layout>
    );
};

export default HomePage;
