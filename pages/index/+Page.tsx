import { Counter } from "./Counter";
import InnerComponent from "../../components/InnerComponent";
import { Suspense } from "react";

const Page = () => {
  const dataPromise = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

  const componentType = typeof window === "undefined" ? "server" : "client";

  console.log("Type of component is: ", componentType);
  return (
    <>
      <h1>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
          <Suspense fallback={<div>loading...</div>}>
            <InnerComponent promise={dataPromise} />
          </Suspense>
        </li>
      </ul>
    </>
  );
};

export default Page;
