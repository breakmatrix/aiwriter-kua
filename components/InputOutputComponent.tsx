import React, {useState} from 'react';
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import {Template, TemplateInput} from "../constants/templates";

// @ts-ignore
const InputOutputComponent = ({template}) => {
    const [output, setOutput] = useState("");


    const handleClearOutput = () => {
        setOutput("")
    }

    const createInstruction = (inputs: TemplateInput[], inputsData: { [key: string]: string }): string => {
        return inputs.map((input) => `${input.label}: ${inputsData[input.id]}`).join("\n");
    };

    const generateOutputHandler = async (template: Template, inputsData: { [key: string]: string }) => {
        /*const result: any = await fetch("/api/chatgpt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                template,
                inputsData
            }),
        });
        const {reply} = await result.json()
        setOutput(reply || '');*/

        const instruction = createInstruction(template.inputs, inputsData);
        const mainGoal = template.command;
        const content =  `You are a creative marketing expert. \n\nYour task is: "${mainGoal}".\n\nHere are the details:\n${instruction}. ` 
        setOutput( content );

    };
    return (
        <div className="flex flex-col lg:flex-row w-full h-full">

            <InputComponent
                template={template}
                generateOutput={generateOutputHandler}
            />
            <OutputComponent
                onClearOutput={handleClearOutput}
                generatedOutput={output}/>
        </div>
    );
};

export default InputOutputComponent;
