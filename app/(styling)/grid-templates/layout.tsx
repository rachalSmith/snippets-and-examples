import { ReactNode } from "react";

export default function GridTemplatesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <main className="p-5 md:p-10">{children}</main>
    </>
  );
}
