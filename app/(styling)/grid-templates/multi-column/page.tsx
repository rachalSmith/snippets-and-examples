import { Article, ArticleHeader } from "../Article";
import { loremIpsum } from "../data";
import { BalloonsImg, BoatImg, VanImg } from "../Images";

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
          <BalloonsImg
            priority
            width="228"
            height="152"
            className="w-full max-w-full"
          />
          <div>
            <ArticleHeader>{heading1}</ArticleHeader>
            <p>{text}</p>
          </div>
        </Article>
        <Article className=" sm:grid sm:items-start sm:gap-16 md:col-span-1 md:grid-cols-1 md:gap-4">
          <BalloonsImg
            priority
            width="228"
            height="152"
            className="w-full max-w-full"
          />
          <div>
            <ArticleHeader>{heading2}</ArticleHeader>
            <p>{text}</p>
          </div>
        </Article>
        <Article className="sm:grid sm:items-start sm:gap-16 md:col-span-1 md:grid-cols-1 md:gap-4">
          <BoatImg
            width="228"
            height="152"
            className="rounded-lg border-4 border-white w-full max-w-full"
          />
          <div>
            <ArticleHeader>{heading2}</ArticleHeader>
            <p>{text}</p>
          </div>
        </Article>
        <Article className="sm:grid sm:items-start sm:gap-16 md:col-span-1 md:grid-cols-1 md:gap-4">
          <VanImg
            width="228"
            height="152"
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
