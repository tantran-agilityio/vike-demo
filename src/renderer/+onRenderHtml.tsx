import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { escapeInject, dangerouslySkipEscape } from "vike/server";

const onRenderHtml = async (pageContext) => {
  const { Page, pageProps, urlPathname } = pageContext;
  const pageHtml = renderToString(
    <StaticRouter location={urlPathname}>
      <Page {...pageProps} />
    </StaticRouter>
  );
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export default onRenderHtml;
