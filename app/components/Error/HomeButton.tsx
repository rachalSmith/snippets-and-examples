"use client";

import { ROUTES } from "@/app/lib/constants/routes";
import router from "next/router";

export default function HomeButton() {
  return (
    <button onClick={() => router.replace(ROUTES.HOME)}>Take me home</button>
  );
}
