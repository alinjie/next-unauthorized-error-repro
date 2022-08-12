import { UnauthorizedError } from "./unauthorized-server-error"

function ErrorPage({ statusCode }) {
  if (statusCode === 401) {
    return <div>You are not authorized</div>
  }

  return <div>UAJUISDJIOASJDIOASJDIOJSIODJAS</div>
}

ErrorPage.getInitialProps = async ({ err, res }) => {
  const statusCode = err instanceof UnauthorizedError ? 401 : res.statusCode
  return { statusCode }
}

export default ErrorPage
