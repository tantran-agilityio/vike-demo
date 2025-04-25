import { Route, Routes, Link } from "react-router";

const Page = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

const HomePage = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Example of client-side routing with React Router and SSR.</p>
      <p>
        This page is rendered to HTML, see the example
      </p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <>
      <h2>About</h2>
      <p>
        Note how the elapsed time above didn't reset when you switched to the
        about page.
      </p>
      <p>This page is rendered to HTML, see example</p>
    </>
  );
};

export default Page;
