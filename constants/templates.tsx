export type TemplateInput = {
    id: string;
    label: string;
    cnlabel: string;
    placeholder: string;
    type: "text" | "textarea" | "select";
    options?: string[];
};

export type Template = {
    id: string;
    title: string;
    description: string;
    command: string;
    inputs: TemplateInput[];
    icon: any;
    categories: string[];
};

export const TEMPLATES: Template[] = [
    

    {
        "id": "f4b4-4dc9-38e4-4714",
        "title": "Blog 文章主题想法",
        "description": "Generate new blog post topics that will engage readers and rank well on Google.",
        "command": "Generate new blog post topics that will engage readers and rank well on Google.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog-writing"],
        "inputs": [
            {
                "id": "brandName",
                "label": "Brand name",
                "cnlabel": "品牌名",
                "placeholder": "品牌名",
                "type": "text"
            },
            {
                "id": "productDescription",
                "label": "My product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
                "type": "textarea"
            },
            {
                "id": "audience",
                "label": "Audience",
                "cnlabel": "目标受众",
                "placeholder": "例如：Eco-conscious consumers, Sustainability advocates, Homeowners",
                "type": "textarea"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "cnlabel": "语气（Motivational,Informative, Friendly, Encouraging...）",
                "placeholder": "例如：激励，信息丰富，友好，鼓励...",
                "type": "text"
            }
        ]
    },
    {
        "id": "eb38-d6a3-3b3c-d790",
        "title": "Blog 文章大纲",
        "description": "Create outlines for articles.",
        "command": "Create outlines for a blog post: ",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog-writing"],
        "inputs": [
            {
                "id": "title",
                "label": "Blog post title/topic",
                "cnlabel": "文章标题/主题",
                "placeholder": "例如：Top 10 Remote Work Tools for Increased Productivity",
                "type": "text"
            },
            {
                "id": "audience",
                "label": "Audience",
                "cnlabel": "目标受众",
                "placeholder": "例如：Eco-conscious consumers, Sustainability advocates, Homeowners",
                "type": "textarea"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "cnlabel": "语气（Motivational,Informative, Friendly, Encouraging...）",
                "placeholder": "例如：激励，信息丰富，友好，鼓励...",
                "type": "text"
            }
        ]
    },
    {
        "id": "eb38-d6a3-3b3c-d890",
        "title": "Blog 文章",
        "description": "",
        "command": "Write an engaging and helpful blog post with a minimum of 1500 words, based on the following details.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog-writing"],
        "inputs": [
            {
                "id": "title",
                "label": "Blog post title/topic",
                "cnlabel": "文章标题/主题",
                "placeholder": "例如：Top 10 Remote Work Tools for Increased Productivity",
                "type": "text"
            },
            {
                "id": "audience",
                "label": "Audience",
                "cnlabel": "目标受众",
                "placeholder": "例如：Eco-conscious consumers, Sustainability advocates, Homeowners",
                "type": "textarea"
            },
            {
                "id": "outline",
                "label": "outline",
                "cnlabel": "大纲",
                "placeholder": "大纲",
                "type": "textarea"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "cnlabel": "语气（Motivational,Informative, Friendly, Encouraging...）",
                "placeholder": "例如：激励，信息丰富，友好，鼓励...",
                "type": "text"
            }
        ]
    },
    {
        "id": "8d27-85d1-d2bb-f6d8",
        "title": "Blog 文章开头介绍段落",
        "description": "Write an engaging opening paragraph for your blog post.",
        "command": "Write an engaging opening paragraph for your blog post.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog-writing"],
        "inputs": [
            {
                "id": "blogPostTitle",
                "label": "Blog post title",
                "cnlabel": "文章标题",
                "placeholder": "例如：Creative Ways to Save Money on a Tight Budget",
                "type": "text"
            },
            {
                "id": "audience",
                "label": "Audience",
                "cnlabel": "目标受众",
                "placeholder": "例如：Young professionals, Students, Budget-conscious individuals",
                "type": "textarea"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "cnlabel": "语气（Motivational,Informative, Friendly, Encouraging...）",
                "placeholder": "例如：激励，信息丰富，友好，鼓励...",
                "type": "text"
            }
        ]
    },
    
    {
        "id": "5df5-5b3a-d3a7-1610",
        "title": "Blog 文章结束段落",
        "description": "Wrap up your blog posts with an engaging conclusion paragraph.",
        "command": "Wrap up your blog posts with an engaging conclusion paragraph.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog-writing"],
        "inputs": [
            {
                "id": "blogPostMainPoints",
                "label": "main points or outline",
                "cnlabel": "文章要点或大纲",
                "placeholder": "例如：The importance of time management. Tips for better time management. Benefits of effective time management.",
                "type": "textarea"
            },
            {
                "id": "cta",
                "label": "Call to action",
                "cnlabel": "号召行动",
                "placeholder": "例如：Share your time management tips with us in the comments below!",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "cnlabel": "语气（Motivational,Informative, Friendly, Encouraging...）",
                "placeholder": "例如：激励，信息丰富，友好，鼓励...",
                "type": "text"
            }
        ]
    },
    
    
    {
        "id": "ab91-6218-4ed4-4374",
        "title": "创建完整的目标客户档案",
        "description": "创建完整的目标客户档案，准确定位目标消费群体",
        "command": "Create a comprehensive profile of my ideal customer, including demographic information, psychographic characteristics, and purchase behavior, that will help me identify and target the right people for my product.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["audience"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            }
        ]
    },
    {
        "id": "a0c6-7112-e2d8-07e1",
        "title": "建立详细的买家人设",
        "description": "建立详细的买家人设，优化营销策略",
        "command": "Develop a detailed buyer persona for my product that outlines the needs, interests, and challenges of my target audience, and use this to create more effective marketing campaigns.",
        "icon": "<i class='fas fa-lightbulb text-primary' ></i>",
        "categories": ["audience"],
        "inputs": [
            {
                "id": "form-field-description",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            }
        ]
    },
    {
        "id": "a0c6-7112-e2d8-07e2",
        "title": "分析市场并明确潜在客户群体",
        "description": "分析市场并明确潜在客户群体，制定策略吸引目标受众",
        "command": "Analyze the market and identify potential customer segments that are most likely to be interested in my product, and develop strategies to reach and engage them.",
        "icon": "<i class='fas fa-lightbulb text-primary' ></i>",
        "categories": ["audience"],
        "inputs": [
            {
                "id": "form-field-description",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            }
        ]
    },
    {
        "id": "a0c6-7112-e2d8-07e3",
        "title": "找出目标市场的核心影响者",
        "description": "找出目标市场的核心影响者，制定计划提高产品威望度",
        "command": "Identify the key influencers in my target market and create a plan to leverage their reach and influence to drive more qualified leads to my product.",
        "icon": "<i class='fas fa-lightbulb text-primary' ></i>",
        "categories": ["audience"],
        "inputs": [
            {
                "id": "form-field-description",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            }
        ]
    },
    
    {
        "id": "a0c6-7112-e2d8-07e4",
        "title": "分析竞争",
        "description": "分析竞争，寻找产品服务的差异化元素，更有效的营销推广",
        "command": "Analyze the competition and identify opportunities to differentiate my product from the rest of the market, and use this to create more effective marketing campaigns.",
        "icon": "<i class='fas fa-lightbulb text-primary' ></i>",
        "categories": ["audience"],
        "inputs": [
            {
                "id": "form-field-description",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            }
        ]
    },

    {
        "id": "ab91-6218-4ed4-4161",
        "title": "有效制造新品期待感",
        "description": "",
        "command": "Our PRODUCT is launching soon, and we need to send an email campaign to our TARGET AUDIENCE to create buzz and anticipation. Can you help me write an engaging subject line that stands out in their inbox and a message that highlights the UNIQUE FEATURE/BENEFIT and creates a sense of urgency? ",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["email"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "Our PRODUCT",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "TARGET AUDIENCE",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            },
            {
                "id": "form-field-feature",
                "type": "textarea",
                "label": "UNIQUE FEATURE/BENEFIT",
                "cnlabel": "独特卖点/好处",
                "placeholder": "详细的独特卖点/好处",
            },
            {
                "id": "form-field-voice",
                "type": "text",
                "label": "brand voice",
                "cnlabel": "品牌声音:PROFESSIONAL/FRIENDLY/CASUAL",
                "placeholder": "例如：专业/友好/休闲",
            },
            {
                "id": "form-field-convey",
                "type": "text",
                "label": "we want to convey",
                "cnlabel": "我们想传递：TRUST/ENTHUSIASM/INNOVATION",
                "placeholder": "例如：信任/热情/创新",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4262",
        "title": "创造销售主题，提高转化率",
        "description": "",
        "command": "We're planning to run a PROMOTIONAL sale, and we need to send a series of emails to our TARGETED email list. Can you suggest a theme for each email (e.g., gift ideas, discount codes, limited-time offers) and write compelling copy that persuades them to BUY? We want to include URGENCY elements in the emails to increase conversions.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["email"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4563",
        "title": "重建客户联系，撰写留存宣传文案",
        "description": "",
        "command": "We've noticed that some of our email subscribers haven't engaged with our recent newsletters, and we want to send a re-engagement email to win them back. Can you suggest a creative subject line that grabs their attention and a message that addresses their PAIN POINTS? We want to offer INCENTIVES to encourage them to open and click on the email.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["email"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            }
        ]
    },


    {
        "id": "ab91-6218-4ed4-5364",
        "title": "建立信任，实现目标行动",
        "description": "",
        "command": "Write an email sequence that will engage and nurture my target persona and establish trust and credibility in my product, leading them to take desired action.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["lead-nurturing"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-5365",
        "title": "教育受众，提供说服证据，促动转化",
        "description": "",
        "command": "Create an email sequence that educates my target persona on the value of my product and encourages them to take action by providing compelling evidence and persuasive language.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["lead-nurturing"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-5366",
        "title": "利用故事、社会证明和紧迫感，促动转化",
        "description": "",
        "command": "Write an email sequence that utilizes storytelling, social proof, and a sense of urgency to motivate my target persona to take action and purchase my product.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["lead-nurturing"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            }
        ]
    },     
    {
        "id": "ab91-6218-4ed4-6364",
        "title": "突出产品独特优势，引导受众实现目标",
        "description": "",
        "command": "Craft an email sequence that builds a strong connection with my target persona by highlighting the unique benefits of my product and how it can help them achieve their goals.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["lead-nurturing"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-6365",
        "title": "展示成功案例，提供行动指引",
        "description": "",
        "command": "Design an email sequence that showcases the success stories of similar target persona who have used my product to overcome pain point, and encourages them to take action now.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["lead-nurturing"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            },
            {
                "id": "form-field-pain",
                "type": "textarea",
                "label": "pain point",
                "cnlabel": "痛点",
                "placeholder": "pain point",
            }
        ]
    },                


    {
        "id": "ab91-6218-4ed4-4311",
        "title": "突出产品独特特性和优点",
        "description": "编写介绍邮件，突出产品独特特性和优点，明确目标人群的行动指引",
        "command": "Write an email that introduces my product to the market, emphasizing its unique features and benefits, and providing a clear call to action for my target persona.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["product-launch"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "my target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4312",
        "title": "阐述产品服务的价值",
        "description": "撰写邮件，阐述产品服务的价值，提供购买动力，营造紧迫感和兴奋感",
        "command": "Develop an email copy that outlines the value proposition of my product, provides a compelling reason to buy, and leaves the target persona with a sense of urgency and excitement.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["product-launch"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4313",
        "title": "利用故事叙述、社会证明、辩解力等技巧",
        "description": "利用故事叙述、社会证明、辩解力等技巧，编写邮件吸引受众并引起行动",
        "command": "Write an email that leverages the power of storytelling, social proof, and persuasive language to captivate my target persona and motivate them to take action.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["product-launch"],
        "inputs": [
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4314",
        "title": "用吸引眼球的主题行和邮件正文",
        "description": "用吸引眼球的主题行和邮件正文，阐述产品特点和优势，解决目标群体痛点，鼓励行动",
        "command": "Craft an attention-grabbing subject line and email body that explains the features and benefits of my product, addresses the target persona's pain points, and encourages them to take advantage of the offer.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["product-launch"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4315",
        "title": "有说服力的邮件",
        "description": "写出具有说服力的邮件，展示类似目标人群如何使用产品服务从痛点中走出，强调优惠的紧迫性和稀缺性",
        "command": "Write a persuasive email that showcases the success stories of similar target persona who have used my product to overcome pain point, and emphasize the urgency and scarcity of the offer.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["product-launch"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            },
            {
                "id": "form-field-pain",
                "type": "textarea",
                "label": "pain point",
                "cnlabel": "痛点",
                "placeholder": "pain point",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4316",
        "title": "呈现产品独特优势",
        "description": "呈现产品服务独特优势，提供目标受众行动步骤",
        "command": "Develop an email copy that highlights the unique advantages of my product over the competition, and provides a clear call to action for the target persona to take advantage of the offer.",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["product-launch"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },
            {
                "id": "form-field-persona",
                "type": "textarea",
                "label": "target persona",
                "cnlabel": "目标人群画像",
                "placeholder": "目标人群画像",
            },
        ]
    },          


    {
        "id": "3b9e-c357-63fb-f7c1",
        "title": "广告制作",
        "description": "",
        "command": "Create an ad that effectively communicates my product unique VALUE PROPOSITION to SPECIFIC AUDIENCE.",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": ["designing-ads"],
        "inputs": [
            {
                "id": "product-info",
                "label": "My Product Info",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
                "type": "textarea"
            },
            {
                "id": "product-benefits",
                "label": "VALUE PROPOSITION",
                "cnlabel": "价值主张",
                "placeholder": "价值主张",
                "type": "text"
            },
            {
                "id": "tone-of-voice",
                "label": "SPECIFIC AUDIENCE",
                "cnlabel": "目标受众",
                "placeholder": "目标受众",
                "type": "textarea"
            }
        ]
    },
    {
        "id": "3b9e-c357-63fb-f7c2",
        "title": "广告文案策划",
        "description": "",
        "command": "Suggest 3 variations of ad copy that speak to the SPECIFIC AUDIENCE, highlight SPECIFIC BENEFIT/FEATURE of my PRODUCT.",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": ["designing-ads"],
        "inputs": [
            {
                "id": "product-info",
                "label": "SPECIFIC AUDIENCE",
                "cnlabel": "目标受众",
                "placeholder": "目标受众",
                "type": "textarea"
            },            
            {
                "id": "product-benefits",
                "label": "My Product",
                "cnlabel": "产品信息",
                "placeholder": "我的产品优势",
                "type": "textarea"
            },
            {
                "id": "tone-of-voice",
                "label": "SPECIFIC BENEFIT/FEATURE",
                "cnlabel": "产品优点",
                "placeholder": "产品优点",
                "type": "textarea"
            }
        ]
    },
    {
        "id": "3b9e-c357-63fb-f7c3",
        "title": "广告视觉呈现",
        "description": "",
        "command": "Create SPECIFIC DESIGN ELEMENTS/VISUALS to make my SOCIAL MEDIA PLATFORM ad visually appealing and encourage buying among my TARGET AUDIENCE.",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": ["designing-ads"],
        "inputs": [
            {
                "id": "product-info",
                "label": "TARGET AUDIENCE",
                "cnlabel": "目标受众",
                "placeholder": "目标受众",
                "type": "textarea"
            },            
            {
                "id": "product-benefits",
                "label": "My Product",
                "cnlabel": "产品信息",
                "placeholder": "产品信息",
                "type": "textarea"
            },
            {
                "id": "tone-of-voice",
                "label": "SOCIAL MEDIA PLATFORM",
                "cnlabel": "社交媒体平台",
                "placeholder": "社交媒体平台",
                "type": "text"
            }
        ]
    },



    {
        "id": "2f67-d52f-fc58-383d",
        "title": "社交媒体内容灵感",
        "description": "",
        "command": "Suggest 5 content ideas for specific social media platform related to specific topic that can appeal to target audience. Also, provide a brief description of each idea and how to execute it. ",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": [ "social-media"],
        "inputs": [
            {
                "id": "storyPlot",
                "type": "text",
                "label": "specific social media platform",
                "cnlabel": "社媒平台（Facebook, Twitter, Instagram, TikTok）",
                "placeholder": "社媒平台",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "topic",
                "cnlabel": "主题",
                "placeholder": "主题",
            },
            {
                "id": "product-info",
                "label": "target audience",
                "cnlabel": "目标受众",
                "placeholder": "目标受众",
                "type": "textarea"
            },  
        ]
    },
    {
        "id": "1a79-8d7e-cc88-1e61",
        "title": "社交媒体展示策略",
        "description": "",
        "command": "Suggest some innovative and eye-catching ways to showcase my product on specific social media platform that can stand out from competitors and appeal to my target audience. Provide some examples and tips to make them more effective.",
        "icon": ``,
        "categories": [ "social-media"],
        "inputs": [
            {
                "id": "storyPlot2",
                "type": "text",
                "label": "specific social media platform",
                "cnlabel": "社媒平台（Facebook, Twitter, Instagram, TikTok）",
                "placeholder": "社媒平台",
            },
            {
                "id": "companyName2",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },           
            {
                "id": "tone2",
                "label": "my target audience",
                "cnlabel": "目标受众",
                "placeholder": "目标受众",
                "type": "textarea"
            }
        ]
    },
    {
        "id": "72e8-66f6-1009-9e55",
        "title": "引人入胜的文字描述",
        "description": "Share your company's story with a compelling bio.",
        "command": "Create engaging and creative captions that capture the attention of target audience for my product on specific social media platform. Provide some examples and tips to make them more effective.",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": ["social-media"],
        "inputs": [
            {
                "id": "storyPlot1",
                "type": "text",
                "label": "specific social media platform",
                "cnlabel": "社媒平台（Facebook, Twitter, Instagram, TikTok）",
                "placeholder": "社媒平台",
            },
            {
                "id": "companyName1",
                "type": "textarea",
                "label": "my product",
                "cnlabel": "产品信息",
                "placeholder": "尽可能多的产品信息",
            },           
            {
                "id": "tone1",
                "label": "my target audience",
                "cnlabel": "目标受众",
                "placeholder": "目标受众",
                "type": "textarea"
            }
        ]
    }
    
    ]
