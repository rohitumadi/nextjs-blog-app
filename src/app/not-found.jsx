import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry this page does not exist</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
