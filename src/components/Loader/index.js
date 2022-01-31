// css
import "./styles.css";

export default function Loader({ loading }) {
  return (
    <>
      {loading && (
        <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-800 opacity-75 flex flex-col items-center justify-center">
          <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <h2 class="text-center text-white text-xl font-semibold">
            Translating...
          </h2>
          <p class="w-1/3 text-center text-white">
            This may take a few seconds, please don't close this page.
          </p>
        </div>
      )}
    </>
  );
}
