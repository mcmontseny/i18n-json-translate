import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import TranslateBox from "./components/TranslateBox";

function App() {
  const langs = [
    { key: "Spanish", value: "es" },
    { key: "English", value: "en" },
    { key: "German", value: "de" },
    { key: "French", value: "fr" },
    { key: "Dutch", value: "nl" },
    { key: "Italian", value: "it" },
    { key: "Portuguese", value: "pt" },
    { key: "Clean", value: null },
  ];

  const [fromLanguage, setFromLang] = useState(null);
  const [toLanguage, setToLang] = useState(null);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col space-y-10 flex-1 bg-white p-6 py-10 md:px-20 lg:px-44">
        
        <div className="flex flex-col space-y-10 justify-around xl:flex-row  xl:space-y-0  xl:space-x-32 flex-1">
          <TranslateBox
            title="Translate from:"
            text={inputText}
            placeholder="Insert your JSON object to translate."
            selectedLang={fromLanguage}
            onChangeSelectedLang={(lang) => setFromLang(lang)}
            onChangeText={(text) => setInputText(text)}
            {...{ langs }}
          />
          <TranslateBox
            title="Translate to:"
            text={outputText}
            placeholder="Click the button 'Translate JSON File' to translate the JSON object."
            selectedLang={toLanguage}
            onChangeSelectedLang={(lang) => setToLang(lang)}
            onChangeText={(text) => setOutputText(text)}
            {...{ langs }}
          />
        </div>
        <div className="text-center">
          <button className="bg-blue-500 text-white font-bold p-3 px-10 rounded-full shadow-md">
            🪄 Translate JSON File
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// {
//   "lazy": {
//       "title": "Angular l10n lazy loading",
//       "title": "Angular l10n lazy loading",
//       "title": "Angular l10n lazy loading",
//       "title": "Angular l10n lazy loading",
//       "title": "Angular l10n lazy loading",
//       "title": "Angular l10n lazy loading",
//       "title": "Angular l10n lazy loading",
//       "title": "Angular l10n lazy loading",
//       "title": "Angular l10n lazy loading"
//   }
// }

export default App;
