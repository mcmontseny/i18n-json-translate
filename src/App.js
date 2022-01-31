import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import TranslateBox from "./components/TranslateBox";
import Loader from "./components/Loader";

function App() {
  const API_USERNAME = process.env.REACT_APP_API_USERNAME
  const API_PASSWORD = process.env.REACT_APP_API_PASSWORD;
  
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
  const [loading, setLoading] = useState(false);

  const translateJSON = async () => {
    if (!inputText) {
      alert('Source text cannot be empty')
      return;
    }

    if (!chkTextIsValid()) {
      alert('Source text is not a valid JSON Object');
      return;
    }

    if (!chkLanguagesSelected()) {
      alert('Please select both languages ​​for translation');
      return;
    }

    const translatedObject = JSON.parse(inputText);

    for (const [key, value] of Object.entries(translatedObject)) {
      translatedObject[key] = await getAPITranslation(value);
    }

    setTranslation(translatedObject);
  };

  const chkTextIsValid = () => {
    try {
      JSON.parse(inputText);
      return true;
    } catch (e) { return false; }
  };

  const chkLanguagesSelected = () => { return fromLanguage && toLanguage }

  const getAPITranslation = (word) => {
    return new Promise(async (resolve, reject) => {
      try {
        const API_TRANSLATE_URL = "https://frengly.com/frengly/data/translateREST";
        const headers = { 'Content-Type': 'application/json' };
        const body = {
          "email": API_USERNAME,
          "password": API_PASSWORD,
          "text": word,
          "src": fromLanguage.value,
          "dest": toLanguage.value
        };

        setLoading(true);
        
        const response = await fetch(API_TRANSLATE_URL, {method: "POST", body: JSON.stringify(body), headers})
          .then((response) => response.json())
          .catch((err) => {
            console.log("Error Failed to get translation", err);
            throw err;
          });

        resolve(response.translation);
      } catch (error) {
        reject({ err: error });
      }
    });
  }

  const setTranslation = (translatedJSON) => {
    setOutputText(JSON.stringify(translatedJSON));
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Loader loading={loading} />
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
          <button onClick={() => translateJSON()} className="bg-blue-500 text-white font-bold p-3 px-10 rounded-full shadow-md">
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
