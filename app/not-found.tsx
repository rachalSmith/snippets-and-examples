import { ErrorPageLayout } from "./components/Error/ErrorPageLayout";
import HomeButton from "./components/Error/HomeButton";
import BackButton from "./components/Error/BackButton";

export default function NotFound() {
  return (
    <ErrorPageLayout
      statusCode={404}
      title="We can't find that page"
      description="Sorry, the page you are looking for doesn't exist or has been moved."
    >
      <div className="flex flex-col gap-y-3 md:hidden">
        <HomeButton />
        <BackButton />
      </div>
      <div className="hidden gap-x-3 md:flex">
        <BackButton />
        <HomeButton />
      </div>
    </ErrorPageLayout>
  );
}
