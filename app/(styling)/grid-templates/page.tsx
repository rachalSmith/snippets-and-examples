import Link from "next/link";

export default function GridTemplatesPage() {
  return (
    <>
      <header className="mb-6 border-b border-grey-200">
        <h1 className="text-center gap-x-3 py-8 text-h5 md:py-10 md:text-h4">
          Css Grid Layout Templates
        </h1>
      </header>
      <section>
        <ul className="grid grid-cols-3 gap-6 justify-items-center p-6">
          <li className="bg-neutral-50 rounded-md p-4">
            <Link href="/grid-templates/multi-column">Multi Column</Link>
          </li>
          <li className="bg-neutral-50 rounded-md p-4">
            <Link href="/grid-templates/masonry">Masonry</Link>
          </li>
          <li className="bg-neutral-50 rounded-md p-4">
            <Link href="/grid-templates/holy-grail">Holy Grail</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
