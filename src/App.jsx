import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import {CORE_CONCEPTS} from "./data";
import TabButton from "./components/TabButton/TabButton";
import {useState} from "react";
import {EXAMPLES} from "./data";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(option) {
        setSelectedTopic(option)
    }

    let tableContent = <p>Please select a value</p>;

    if (selectedTopic) {
        tableContent =
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
    }

    return (
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                    {/*    <CoreConcepts title={CORE_CONCEPTS[0].title}*/}
                    {/*                  description={CORE_CONCEPTS[0].description}*/}
                    {/*                  image={CORE_CONCEPTS[0].image}>*/}
                    {/*    </CoreConcepts>*/}
                    {/*    <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>*/}
                    {/*    <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>*/}
                    {/*    <CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>*/}

                    {CORE_CONCEPTS.map(item =>  (<CoreConcepts key={item.title} {...item}></CoreConcepts>))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic==='components'} onSelect={() => handleClick('components')}>Const</TabButton>
                        <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic==='props'} onSelect={() => handleClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic==='state'} onSelect={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {tableContent}
                </section>
            </main>
        </div>
    );
}

export default App;
