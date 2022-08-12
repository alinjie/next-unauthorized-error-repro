export class UnauthorizedError extends Error {}

export default function UnauthorizedPage() {
  return <div>User should never see this, as they're unauthorized</div>
}

export async function getServerSideProps() {
  const userIsAuthorized = false

  if (!userIsAuthorized) {
    throw new UnauthorizedError()
  }

  return {
    props: { data: "Sensitive data" },
  }
}
