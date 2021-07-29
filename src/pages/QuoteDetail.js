import { useParams, Route } from "react-router";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const params = useParams();
    const url = `/quotes/${params.quoteId}/comments`;

  return (
    <section>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={url}>
          <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
