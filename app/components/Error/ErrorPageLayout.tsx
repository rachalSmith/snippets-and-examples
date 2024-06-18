import Image from "next/image";
import { PropsWithChildren } from "react";

type ErrorPageLayoutProps = PropsWithChildren<{
  statusCode: 404 | 500;
  title: string;
  description: string;
}>;

export function ErrorPageLayout({
  statusCode,
  title,
  description,
  children,
}: ErrorPageLayoutProps) {
  return (
    <main className="grid h-full min-h-screen grid-rows-[min-content,1fr] px-5 py-6 md:p-10">
      <section className="mx-auto mt-[-3.25rem] w-full max-w-[75rem] self-center md:mt-[-5.5rem] md:flex">
        <div className="md:mr-auto">
          <header className="mb-8 md:mb-12">
            <p className="mb-2 text-sm font-normal text-primary-600 md:mb-3 md:text-md">
              <strong className="font-semibold md:font-medium">
                {statusCode}.
              </strong>{" "}
              That&apos;s an error
            </p>
            <h1 className="mb-4 text-h4 font-semibold md:mb-6 md:text-h1">
              {title}
            </h1>
            <p className="text-md text-grey-600 md:text-xl">{description}</p>
          </header>
          {children}
        </div>
        <Image
          priority
          src="/assets/icons/not-found.svg"
          width="298"
          height="217"
          alt=""
          className="hidden h-auto w-auto lg:block"
        />
      </section>
    </main>
  );
}
