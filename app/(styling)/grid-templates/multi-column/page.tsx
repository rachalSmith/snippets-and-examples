import Image from "next/image";
import { Article, ArticleHeader } from "./Article";
import { loremIpsum } from "../data";

export default function MultiColumnPage() {
  const { title, text, heading1, heading2, heading3 } = loremIpsum;

  return (
    <>
      <header>
        <h1 className="w-full text-h4 md:pb-10 md:text-h3 text-[#424747] border-b border-[#bbc7c7]">
          {title}
        </h1>
      </header>
      <div className="grid gap-16 grid-cols-3 my-5 mx-auto">
        <Article className="grid items-start gap-16 border-b border-[#bbc7c7]">
          <Image
            priority
            src="/assets/img/roam-balloons.png"
            width="228"
            height="152"
            sizes="(min-width: 780px) calc(50vw - 80px), calc(50vw - 60px)"
            alt="Man and woman watching balloons rise over mountains."
            className="rounded-lg border-4 border-white w-full max-w-full"
          />
          <div>
            <ArticleHeader>{heading1}</ArticleHeader>
            <p>{text}</p>
          </div>
        </Article>
        <Article className=" sm:grid sm:items-start sm:gap-16 md:col-span-1 md:grid-cols-1 md:gap-4">
          <Image
            priority
            src="/assets/img/roam-balloons.png"
            width="228"
            height="152"
            sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
            alt="Man and woman watching balloons rise over mountains."
            className="rounded-lg border-4 border-white w-full max-w-full"
          />
          <div>
            <ArticleHeader>{heading2}</ArticleHeader>
            <p>{text}</p>
          </div>
        </Article>
        <Article className="sm:grid sm:items-start sm:gap-16 md:col-span-1 md:grid-cols-1 md:gap-4">
          <Image
            src="/assets/img/roam-boat.png"
            width="228"
            height="152"
            sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
            alt="Man and woman in a row boat on a clear, calm lake."
            className="rounded-lg border-4 border-white w-full max-w-full"
          />
          <div>
            <ArticleHeader>{heading2}</ArticleHeader>
            <p>{text}</p>
          </div>
        </Article>
        <Article className="sm:grid sm:items-start sm:gap-16 md:col-span-1 md:grid-cols-1 md:gap-4">
          <Image
            src="/assets/img/roam-van.png"
            width="228"
            height="152"
            sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
            alt="Van driving across the desert."
            className="rounded-lg border-4 border-white w-full max-w-full"
          />
          <div>
            <ArticleHeader>{heading3}</ArticleHeader>
            <p>{text}</p>
          </div>
        </Article>
      </div>
    </>
  );
}
