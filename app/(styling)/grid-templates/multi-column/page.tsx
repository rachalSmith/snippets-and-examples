import Image from "next/image";

export default function MultiColumnPage() {
  return (
    <>
      <header>
        <h1 className="w-full text-h4 md:pb-10 md:text-h3 text-[#424747] border-b border-[#bbc7c7]">
          Globe Roamer
        </h1>
      </header>
      <div className="grid gap-16 grid-cols-3 my-5 mx-auto">
        <article className="col-span-3 grid sm:grid-cols-2 items-start gap-16 pb-10 border-b border-[#bbc7c7]">
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
            <h2 className="text-h5 md:text-h4 text-[#424747] mb-2">
              Rabbit Vegetation
            </h2>
            <p>
              Feet evil to hold long he open knew an no. Apartments occasional
              boisterous as solicitude to introduced. Or fifteen covered we
              enjoyed demesne is in prepare. In stimulated my everything it
              literature. Greatly explain attempt perhaps in feeling he. House
              men taste bed not drawn joy. Through enquire however do equally
              herself at. Greatly way old may you present improve. Wishing the
              feeling village him musical.
            </p>
          </div>
        </article>
        <article className="col-span-3 sm:grid sm:grid-cols-2 sm:items-start sm:gap-16 pb-10 md:col-span-1 md:grid-cols-1 md:gap-4">
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
            <h3 className="text-h5 md:text-h4 text-[#424747] mb-2">
              Rabbit Vegetation
            </h3>
            <p>
              Feet evil to hold long he open knew an no. Apartments occasional
              boisterous as solicitude to introduced. Or fifteen covered we
              enjoyed demesne is in prepare. In stimulated my everything it
              literature. Greatly explain attempt perhaps in feeling he. House
              men taste bed not drawn joy. Through enquire however do equally
              herself at. Greatly way old may you present improve. Wishing the
              feeling village him musical.
            </p>
          </div>
        </article>
        <article className="col-span-3 sm:grid sm:grid-cols-2 sm:items-start sm:gap-16 pb-10 md:col-span-1 md:grid-cols-1 md:gap-4">
          <Image
            src="/assets/img/roam-boat.png"
            width="228"
            height="152"
            sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
            alt="Man and woman in a row boat on a clear, calm lake."
            className="rounded-lg border-4 border-white w-full max-w-full"
          />
          <div>
            <h3 className="text-h5 md:text-h4 text-[#424747] mb-2">
              Unaware Axis
            </h3>
            <p>
              Old there any widow law rooms. Agreed but expect repair she nay
              sir silent person. Direction can dependent one bed situation
              attempted. His she are man their spite avoid. Her pretended
              fulfilled extremely education yet. Satisfied did one admitting
              incommode tolerably how are.
            </p>
          </div>
        </article>
        <article className="col-span-3 sm:grid sm:grid-cols-2 sm:items-start sm:gap-16 pb-10 md:col-span-1 md:grid-cols-1 md:gap-4">
          <Image
            src="/assets/img/roam-van.png"
            width="228"
            height="152"
            sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
            alt="Van driving across the desert."
            className="rounded-lg border-4 border-white w-full max-w-full"
          />
          <div>
            <h3 className="text-h5 md:text-h4 text-[#424747]">
              Lifestyle Measure
            </h3>
            <p>
              Cottage out enabled was entered greatly prevent message. No
              procured unlocked an likewise. Dear but what she been over gay
              felt body. Six principles advantages and use entreaties
              decisively. Eat met has dwelling unpacked see whatever followed.
              Court in of leave again as am. Greater sixteen to forming colonel
              no on be. So an advice hardly barton. He be turned sudden engage
              manner spirit.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
