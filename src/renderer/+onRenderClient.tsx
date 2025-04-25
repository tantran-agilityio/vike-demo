import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

const onRenderClient = async (pageContext) => {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById("root")!,
    <BrowserRouter>
      <Page {...pageContext.pageProps} />
    </BrowserRouter>
  );
};

export default onRenderClient;
