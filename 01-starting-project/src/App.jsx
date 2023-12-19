import {CORE_CONCEPTS} from "./components/Data/data";
import {EXAMPLES} from "./components/Data/data";
import {Header} from "./components/Header/Header"
import {CoreConcept} from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import {useState} from "react"


function App() {

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
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concept</h2>
                    <ul>
                        {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item}/>)}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Example</h2>
                    <menu>
                        <TabButton isActive={selectedTopic === 'components'}
                                   onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isActive={selectedTopic === 'jsx'}
                                   onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isActive={selectedTopic === 'props'}
                                   onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isActive={selectedTopic === 'state'}
                                   onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
