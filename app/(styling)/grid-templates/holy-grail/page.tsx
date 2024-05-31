import Image from "next/image";
import { ArticleHeader } from "../multi-column/Article";
import { loremIpsum } from "../data";

export default function HolyGrailPage() {
  const { title, text, heading1, heading2, shortText1, shortText2 } =
    loremIpsum;
  return (
    <div className="grid grid-cols-5 divide-y divide-gray-100">
      <header className="col-span-5 text-center">
        <h1 className="w-full text-h4 md:pb-10 pb-4 md:text-h3">{title}</h1>
      </header>

      <nav className="md:col-span-1 md:border-r p-4 col-span-5">
        <p className="mb-2">Categories</p>
        <ul className="flex justify-between md:flex-col gap-2">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </nav>

      <article className="md:col-span-3 md:border-r col-span-5 p-4">
        <Image
          priority
          src="/assets/img/roam-balloons.png"
          width="228"
          height="152"
          sizes="(min-width: 780px) calc(50vw - 80px), calc(50vw - 60px)"
          alt="Man and woman watching balloons rise over mountains."
          className="rounded-lg border-4 border-white w-full max-w-full"
        />

        <ArticleHeader className="py-4">{heading1}</ArticleHeader>
        <p>{text}</p>
      </article>

      <aside className="md:border-l md:col-span-1 p-4 col-span-5">
        <ul>
          <li>
            <strong>{heading1}: </strong> {heading2}
          </li>
          <li>{shortText1}.</li>
          <li>{shortText2}</li>
        </ul>
      </aside>

      <footer className="col-span-5 p-4 text-center">
        <p>{shortText2}</p>
      </footer>
    </div>
  );
}
