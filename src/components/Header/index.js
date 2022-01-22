export default function Header() {
    return (
        <div className="flex flex-row justify-between bg-blue-500 py-4 px-44">
            <h1 className="text-white text-xl">🌐 i18n-JSON-Translate</h1>
            <div className="flex flex-row space-x-6">
                <a className="text-white text-xl">API Docs</a>
                <a className="text-white text-xl">Github</a>
            </div>
        </div>
    );
}