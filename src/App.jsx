
import { CORE_CONCEPTS } from "./data";
import { CoreComponent } from "./components/CoreComponent";
import { Header } from "./components/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  
  const [selectedTopic,setSelectedTopic] =useState(null);
  const [isSelected,setIsSelected] = useState(true);
  const handleSelect = (selectedButton)=>{ 
    setSelectedTopic(selectedButton);
    setIsSelected(false);
    
  }
 
  return (
    <div>
      <Header value="Fundamental" />
      <main>
        <h2>Time to get started!</h2>
      
      <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
      {CORE_CONCEPTS.map((item)=><CoreComponent key={item.title} title={item.title} img={item.image} description={item.description}/>)}
      </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={()=>handleSelect("components")}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect("props")}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect("state")}>State</TabButton>
          
        </menu>
        {isSelected&&(<p>Please Select a topic you want...</p>)}
        {selectedTopic&&(<div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
{EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>)}
        
      </section>
      </main>
    </div>
  );
}

export default App;
