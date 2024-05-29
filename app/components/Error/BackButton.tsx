"use client";

import router from "next/router";

export default function BackButton() {
  return <button onClick={() => router.back()}>Go Back</button>;
}
