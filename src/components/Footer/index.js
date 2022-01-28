export default function Footer() {
    return (
      <footer className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:justify-between bg-blue-600 p-4 md:px-12">
          <span className="text-gray-300 font-sm text-center">
            © {getFullYear()} Rights reserved by <span className="text-white underline">i18n-JSON-Translate</span>
          </span>
          <span className="text-gray-300 font-sm text-center">
          ❤️ Designed with love by{" "}
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
  