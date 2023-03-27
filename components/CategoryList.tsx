import { useEffect, useState } from "react";

interface Category {
    id: string;
    label: string;
}

const categoriesData = [
    { id: "social-media", label: "社交媒体" },
    { id: "marketing", label: "营销广告" },
    { id: "ecommerce", label: "电商" },
    { id: "tools", label: "工具" },
];

// @ts-ignore
const CategoriesList = ({ onSelectedCategory }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState("social-media");

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
