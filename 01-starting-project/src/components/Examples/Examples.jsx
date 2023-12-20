import TabButton from "../TabButton/TabButton";
import {useState} from "react";
import {EXAMPLES} from "../Data/data";
import Section from "../Section";
import Tabs from "../Tabs";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p> Please select a topic.</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
            </div>
        );
    }

    return (
        <Section title={"example"} id={"examples"}>
            <Tabs
                //Should start with capital letter
                //Replaced with default value in Tabs.jsx
                //ButtonsContainer = "menu"
                buttons={
                    <>
                        <TabButton isActive={selectedTopic === 'components'}
                                   onClick={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isActive={selectedTopic === 'jsx'}
                                   onClick={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isActive={selectedTopic === 'props'}
                                   onClick={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isActive={selectedTopic === 'state'}
                                   onClick={() => handleSelect('state')}>State</TabButton>
                    </>
                }

            > {tabContent} </Tabs>
        </Section>
    )
}