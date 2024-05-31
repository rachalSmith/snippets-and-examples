import Image from "next/image";
import { loremIpsum } from "../data";
import Link from "next/link";

export default function MasonryPage() {
  const { title, heading1, shortText1 } = loremIpsum;
  return (
    <div className="text-center">
      <nav className="grid grid-cols-5 col-span-5 items-baseline border-b border-gray-100">
        <Link href={"/grid-templates/masonry"}>A</Link>
        <Link href={"/grid-templates/masonry"}>B</Link>
        <h1 className="w-full text-h4 md:pb-10 pb-4 md:text-h3 uppercase">
          <div className="tracking-widest font-semibold">
            {title.split(" ")[0]}
          </div>
          <div className="tracking-tight font-light">{title.split(" ")[1]}</div>
        </h1>
        <Link href={"/grid-templates/masonry"}>C</Link>
        <Link href={"/grid-templates/masonry"}>D</Link>
      </nav>

      <main className="py-10 flex flex-col flex-wrap h-[1250px] content-center gap-4 [&>*:nth-child(3n+1)]:order-1 [&>*:nth-child(3n+2)]:order-2 [&>*:nth-child(3n)]:order-3 ">
        <div className="bg-neutral-50 rounded-md p-4 w-1/4">
          <h3>{heading1}</h3>
          <p>{shortText1}</p>
        </div>
        <Image
          priority
          src="/assets/img/roam-balloons.png"
          width="228"
          height="152"
          sizes="(min-width: 780px) calc(50vw - 80px), calc(50vw - 60px)"
          alt="Man and woman watching balloons rise over mountains."
          className="rounded-lg drop-shadow-sm w-1/4"
        />
        <div className="bg-neutral-50 rounded-md p-4 w-1/4">
          <h3>{heading1}</h3>
          <p>{shortText1}</p>
        </div>
        <Image
          src="/assets/img/roam-forest.png"
          width="228"
          height="152"
          sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
          alt="Man overlooking a forest."
          className="rounded-lg drop-shadow-sm w-1/4"
        />
        <div className="bg-neutral-50 rounded-md p-4 w-1/4">
          <h3>{heading1}</h3>
          <p>{shortText1}</p>
        </div>{" "}
        <div className="bg-neutral-50 rounded-md p-4 w-1/4">
          <h3>{heading1}</h3>
          <p>{shortText1}</p>
        </div>
        <Image
          src="/assets/img/roam-van.png"
          width="228"
          height="152"
          sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
          alt="Van driving across the desert."
          className="rounded-lg drop-shadow-sm  w-1/4"
        />
        <Image
          src="/assets/img/roam-boat.png"
          width="228"
          height="152"
          sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
          alt="Man and woman in a row boat on a clear, calm lake."
          className="rounded-lg drop-shadow-sm w-1/4"
        />
        <Image
          src="/assets/img/roam-mountains.png"
          width="228"
          height="152"
          sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
          alt="Mountains and trees."
          className="rounded-lg drop-shadow-sm w-1/4"
        />
        <div className="bg-neutral-50 rounded-md p-4 w-1/4">
          <h3>{heading1}</h3>
          <p>{shortText1}</p>
        </div>
        <span className="basis-full w-0 m-0"></span>
        <span className="basis-full w-0 m-0"></span>
      </main>
    </div>
  );
}
