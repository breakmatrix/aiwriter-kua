import React, {Fragment, useState} from "react";
import {CardProps} from "./Card";
import CategoriesList from "./CategoryList";
import DropDown from "../components/DropDown";
import TemplatePage from "../pages/templates/[id]";


interface Props {
    cards: CardProps[];
}

const DEFAULT_SELECTED_TEMPLATE = new Map()
DEFAULT_SELECTED_TEMPLATE.set("audience","ab91-6218-4ed4-4374")
DEFAULT_SELECTED_TEMPLATE.set("email","ab91-6218-4ed4-4161")
DEFAULT_SELECTED_TEMPLATE.set("product-launch","ab91-6218-4ed4-4311")
DEFAULT_SELECTED_TEMPLATE.set("lead-nurturing","ab91-6218-4ed4-5364")
DEFAULT_SELECTED_TEMPLATE.set("blog-writing","f4b4-4dc9-38e4-4714")
DEFAULT_SELECTED_TEMPLATE.set("designing-ads","3b9e-c357-63fb-f7c1")
DEFAULT_SELECTED_TEMPLATE.set("social-media","2f67-d52f-fc58-383d")
DEFAULT_SELECTED_TEMPLATE.set("sales-scripts","72e8-66f6-1019-9e55")
DEFAULT_SELECTED_TEMPLATE.set("sales-email","72e8-66f6-1039-9e56")
DEFAULT_SELECTED_TEMPLATE.set("product-page","72e8-66f6-1039-9e66")
//DEFAULT_SELECTED_TEMPLATE.set("ecommerce","3b9e-c357-63fb-f7cb")
//DEFAULT_SELECTED_TEMPLATE.set("tools","2f67-d52f-fc58-383d")

const CardGrid: React.FC<Props> = ({cards}) => {
    const [selectedCategory, setSelectedCategory] = useState("audience");
    const [kind, setKind] = useState<string>("ab91-6218-4ed4-4374");

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
        //set default template kind: the first kind
        setKind( DEFAULT_SELECTED_TEMPLATE.get(category))

    };

    return (
        <Fragment>
            <div className="p-6 ">
                <CategoriesList onSelectedCategory={handleSelectCategory}/>
                <div className="w-full lg:w-1/4 bg-gray-50 border-r flex flex-col" >
                    <DropDown kinds={cards.filter((card) =>  card?.categories?.includes(selectedCategory)).map((card, index) => (
                        [card.title,card.id]
                    ))} kind={kind as string} setKind={(newKind) => setKind(newKind)} />
                </div>          
<br/>
          <div >
          <TemplatePage id={kind as string}/>
          </div>          
                
            </div>
        </Fragment>
    );
};

export default CardGrid;
