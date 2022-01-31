import Dropdown from "../Dropdown";

export default function TranslateBox({
  text,
  langs,
  selectedLang,
  onChangeSelectedLang,
  onChangeText,
  title,
  placeholder
}) {

  return (
    <div className="flex flex-col w-full h-80 xl:h-auto">
      <div className="flex flex-row space-x-4 content-center pb-3">
        <h2 className="text-black text-lg text-gray-400 self-center">
          {title}
        </h2>
        <Dropdown
          {...{ langs, selectedLang }}
          onChangeLang={(newLang) => onChangeSelectedLang(newLang)}
        />
      </div>
      <textarea 
      onChange={(event) => onChangeText(event.target.value)} 
      defaultValue={text} 
      placeholder={placeholder}
      className="p-6 h-full bg-[#f3f3f3] shadow-lg rounded-lg border-solid border-2 border-gray-200 focus:outline-gray-400">
      </textarea>
    </div>
  );
}
