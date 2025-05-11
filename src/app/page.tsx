import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>

        <div>
          <h1>Loc&apos;s Computer <br /> Repair Shop </h1>
          <address>
            11135 249, Houston, 77690
          </address>
          <p>
            Open Daily: 9am to 5pm
          </p>
          <Link href="tel:555555555" className="hover:underline">555-555-5555</Link>
        </div>

      </main>

    </div>
  );
}
