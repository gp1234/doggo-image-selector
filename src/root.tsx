import { SearchBar } from "./components/searchbar/searchbar";
import "./index.css";
import "./background.css";
export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Dogos searcher</title>
      </head>
      <body class="background-gradient">
        <main class="flex">
          <div class="container mx-auto my-6 ">
            <h1 class="text-white text-3xl text-center font-bold">
              Hey I am a dogo image searcher 🦮
            </h1>
            <div class="container my-12 ">
              <SearchBar />
            </div>
          </div>
        </main>
      </body>
    </>
  );
};
