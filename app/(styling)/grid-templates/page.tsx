export default function GridTemplatesPage() {
  return (
    <>
      <header className="mb-6 border-b border-grey-200">
        <h1 className="container flex items-center gap-x-3 py-8 text-h5 md:py-10 md:text-h4">
          Css Grid Layout Templates
        </h1>
      </header>
      <section className="container space-y-6 border m-auto">
        <ul className="grid grid-cols-3 gap-6 border justify-items-center">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </section>
    </>
  );
}
