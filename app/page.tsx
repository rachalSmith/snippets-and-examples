import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ROUTES } from "./lib/constants/routes";

export const metadata: Metadata = {
  title: "Grid Layouts",
};

export default function Home() {
  redirect(ROUTES.GRID_TEMPLATES);
}
