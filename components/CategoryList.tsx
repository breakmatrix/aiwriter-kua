import { useEffect, useState } from "react";

interface Category {
    id: string;
    label: string;
}

const categoriesData = [
    { id: "audience", label: "目标受众定义" },
    { id: "email", label: "邮件营销" },
    { id: "product-launch", label: "产品发布邮件" },
    { id: "lead-nurturing", label: "潜在客户培养邮件" },
    { id: "blog-writing", label: "blog写作" },    
    { id: "designing-ads", label: "广告设计" },
    { id: "social-media", label: "社交媒体" },
    { id: "sales-scripts", label: "销售脚本" },
    { id: "sales-email", label: "销售邮件" },
    { id: "product-page", label: "产品页面" },
    

    /*{ id: "ecommerce", label: "电商" },
    { id: "tools", label: "工具" },*/
];

// @ts-ignore
const CategoriesList = ({ onSelectedCategory }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState("audience");

    useEffect(() => {
        onSelectedCategory(selectedCategoryId);
    }, [selectedCategoryId]);

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategoryId(categoryId);
    };

    return (
        <div className="flex flex-wrap gap-2 justify-start my-6">
            {categoriesData.map((category: Category) => (
                <button
                    key={category.id}
                    className={`cursor-pointer border inline-flex items-center justify-center mr-2 mb-2 px-3.5 py-1 text-sm font-medium rounded-full ${
                        selectedCategoryId === category.id
                            ? "border-blue-400 bg-blue-400 text-white hover:bg-opacity-100"
                            : "border-gray-300 bg-white text-gray-600 hover:text-gray-800 hover:shadow hover:ring-gray-200"
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                >
                    {category.label}
                </button>
            ))}
        </div>
    );
};

export default CategoriesList;
