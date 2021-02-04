import type * as Tina from "../.tina/types";
import { PageRenderer } from "./page-renderer";

/**
 *
 * Switch on the `__typename` to render the appropriate component
 *
 * Each of these cases map to a `section` found in the `.tina/settings.yml`
 *
 */
export const DocumentRenderer = (props: Tina.SectionDocumentUnion) => {
  switch (props.__typename) {
    case "Authors_Document":
      return <AuthorRenderer {...props.data} />;
    case "Pages_Document":
      return <PageRenderer {...props.data} />;
    case "Posts_Document":
      return <PostRenderer {...props.data} />;
    default:
      return <NoData />;
  }
};

const PostRenderer = (props: Tina.Article_Doc_Data) => {
  return <JSONDump {...props} />;
};

const AuthorRenderer = (props: Tina.Author_Doc_Data) => {
  return <JSONDump {...props} />;
};

const NoData = () => {
  console.error("Woops, this shouldn't be rendered!");
  return <pre>No data</pre>;
};

const JSONDump = (props: object) => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  );
};
