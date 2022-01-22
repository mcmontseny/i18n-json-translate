export default function Footer() {
    return (
      <footer className="flex flex-row justify-between bg-blue-600 py-4 px-44">
          <span className="text-gray-300 font-sm self-center">
            © {getFullYear()} Drets reservats per i18n-JSON-Translate
          </span>
          <span className="text-gray-300 font-sm self-center">
            Web Design by{" "}
            <a
              className="text-white"
              href="https://github.com/mcmontseny"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mcmontseny
            </a>
          </span>
      </footer>
    );
  }
  
  function getFullYear() {
    return new Date().getFullYear();
  }
  