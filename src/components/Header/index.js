export default function Header() {
    return (
        <div className="flex flex-col items-center  space-y-2 md:space-y-0 md:flex-row md:justify-between bg-blue-500 p-4 md:px-12">
            <h1 className="text-white text-xl self-center">🌍 i18n-JSON-Translate</h1>
            <div className="flex flex-row space-x-4 justify-center">
                <a className="text-white text-xl font-light">README</a>
                <a className="text-white text-xl font-light">GitHub</a>
            </div>
        </div>
    );
}