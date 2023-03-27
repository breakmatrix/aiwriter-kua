import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/images/aiwriter.png"/>
                    <meta name="title" content="AI文案助手: 中国第一AI文案助手"/>
                    <meta name="description" content="Ai生成广告&营销文案
Ai生成短视频&直播脚本
Ai生成商品卖点&评价文案
小红书风格内容
帮你自动生成小红书风格文案
商品痛点文案
输入商品，自动生成带场景的痛点文案
小红书风格标题
不用动脑，帮你生成小红书风格标题
第一人称商品点评文案
自动生成真实感满满的商品用户评价
社交电商一句话标题
帮你提炼卖点，生成优质文案标题"/>
                    <meta property="og:site_name" content="aiwriter.com"/>

                    <meta property="og:title" content="AI文案助手: 中国第一AI文案助手"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content="AI文案助手: 中国第一AI文案助手"/>
                    <meta
                        name="twitter:description"
                        content="Ai生成广告&营销文案
                        Ai生成短视频&直播脚本
                        Ai生成商品卖点&评价文案
                        小红书风格内容
                        帮你自动生成小红书风格文案
                        商品痛点文案
                        输入商品，自动生成带场景的痛点文案
                        小红书风格标题
                        不用动脑，帮你生成小红书风格标题
                        第一人称商品点评文案
                        自动生成真实感满满的商品用户评价
                        社交电商一句话标题
                        帮你提炼卖点，生成优质文案标题"
                    />
                    <meta
                        property="og:image"
                        content="https://aiwriter.com/aiwriter.png"
                    />
                    <meta
                        name="twitter:image"
                        content="https://aiwriter.com/aiwriter.png"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
