import { Article, ArticleHeader } from "../Article";
import { loremIpsum } from "../data";
import { BalloonsImg } from "../Images";

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

      <Article className="md:col-span-3 md:border-r col-span-5 px-12 pt-8">
        <BalloonsImg
          priority
          width="228"
          height="152"
          className="w-full max-w-full"
        />
        <ArticleHeader className="py-4">{heading1}</ArticleHeader>
        <p>{text}</p>
      </Article>

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
