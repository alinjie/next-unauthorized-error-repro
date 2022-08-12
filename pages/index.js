import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <Link href="/unauthorized-server-error">
        <a>Server Side Error Page</a>
      </Link>
    </div>
  );
}
