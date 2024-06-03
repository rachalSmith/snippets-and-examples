import { loremIpsum } from "../data";
import Link from "next/link";
import {
  BalloonsImg,
  BoatImg,
  ForestImg,
  MountainsImg,
  VanImg,
} from "../Images";
import { HTMLAttributes } from "react";

function Card({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-neutral-50 rounded-md p-4 w-1/4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

const data = [
  { order: 1, text: loremIpsum.shortText1 },
  { order: 2, text: loremIpsum.shortText2 },
  {
    order: 3,
    img: <BalloonsImg priority width="228" height="152" className="w-full" />,
  },
  { order: 4, text: loremIpsum.shortText2 },
  {
    order: 5,
    img: <ForestImg priority width="228" height="152" className="w-full" />,
  },
  {
    order: 6,
    img: <VanImg priority width="228" height="152" className="w-full" />,
  },
  { order: 7, text: loremIpsum.shortText2 },
  { order: 8, text: loremIpsum.shortText2 },
  {
    order: 9,
    img: <BoatImg priority width="228" height="152" className="w-full" />,
  },
  {
    order: 10,
    img: <MountainsImg priority width="228" height="152" className="w-full" />,
  },
  { order: 11, text: loremIpsum.shortText2 },
];

export default function MasonryPage() {
  const { title } = loremIpsum;
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
        {data.map((d) => (
          <Card key={d.order}>
            <h3 className="font-bold mb-2">{d.order}</h3>
            {d.text && <p>{d.text}</p>}
            {d.img && <>{d.img}</>}
          </Card>
        ))}
        {/*Force columns*/}
        <span className="basis-full w-0 m-0"></span>
        <span className="basis-full w-0 m-0"></span>
      </main>
    </div>
  );
}
