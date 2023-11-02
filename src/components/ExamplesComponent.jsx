import React from 'react'
import TabButton from './TabButton'
import { EXAMPLES } from '../data'
import { useState } from "react";
import SectionComponent from './SectionComponent';

const ExamplesComponent = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [isSelected, setIsSelected] = useState(true);
    const handleSelect = (selectedButton) => {
        setSelectedTopic(selectedButton);
        setIsSelected(false);
    }
        return (
            <>
                <SectionComponent title="Examples" id="examples" >
                    
                    <menu>
                        <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect("state")}>State</TabButton>

                    </menu>
                    {isSelected && (<p>Please Select a topic you want...</p>)}
                    {selectedTopic && (<div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>)}

                </SectionComponent>
            </>
        )
    }


    export default ExamplesComponent
