import React, {Fragment, useState} from "react";
import Card, {CardProps} from "./Card";
import CategoriesList from "./CategoryList";
import DropDown from "../components/DropDown";
import TemplatePage from "../pages/templates/[id]";


interface Props {
    cards: CardProps[];
}

const DEFAULT_SELECTED_TEMPLATE = new Map()
DEFAULT_SELECTED_TEMPLATE.set("social-media","a6dc-0f21-c102-6c22")
DEFAULT_SELECTED_TEMPLATE.set("marketing","eb38-d6a3-3b3c-d790")
DEFAULT_SELECTED_TEMPLATE.set("ecommerce","3b9e-c357-63fb-f7cb")
DEFAULT_SELECTED_TEMPLATE.set("tools","2f67-d52f-fc58-383d")

const CardGrid: React.FC<Props> = ({cards}) => {
    const [selectedCategory, setSelectedCategory] = useState("social-media");
    const [kind, setKind] = useState<string>("a6dc-0f21-c102-6c22");

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
