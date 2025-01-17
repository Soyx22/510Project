import "./App.css";

import { useState, useRef } from "react";
import { data } from "./data";
import { Dropdown } from "semantic-ui-react";

function App() {
  const [selected, setSelected] = useState(null);
  const selectValue = useRef({});

  const getTranslate = (value) => {
    let a = data.filter((item) => {
      if (item.value === value) return item;
      return false;
    });
    selectValue.current = a[0];
    setSelected(value);
    return a;
  };

  return (
    <div className="App">
      <div className="app_container">
        <header className="header">
          <h3>Encyclopaedia for Household Items</h3>
        </header>
        <section className="section-drop">
          <Dropdown
            placeholder="Select Item"
            fluid
            search={(options, value) => {
              return options.filter((item) => item.text.includes(value));
            }}
            selection
            onChange={(l, { value }) => getTranslate(value)}
            options={data}
          />
        </section>
        <section className="data-containerX">
          {selected !== null && (
            <>
              <h2 className="text">
                Searched Text: {selectValue.current.text}
              </h2>
              <h2 className="translate">
                Translation in{" "}
                {selectValue.current.english ? "Yoruba" : "English"}:{" "}
                {selectValue.current.translate}
              </h2>
              <h2
                dangerouslySetInnerHTML={{
                  __html: `Yoruba transcription: /${selectValue.current.transcribe}/`,
                }}></h2>
            </>
          )}
          {selected && (
            <div>
              <div className="image">
                <img src={require(`./images/${selected}.png`).default} alt="" />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
