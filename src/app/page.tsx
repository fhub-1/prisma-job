import JobFilter from "@/components/JobFilter";
import JobResult from "@/components/JobResult";
import { JobFilterValues } from "@/lib/validation";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

export default async function Home({
  searchParams: { q, type, location, remote },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter lg:text-5xl">
          Developers jobs
        </h1>
        <p className="text-muted-foreground">Find your Dream Job</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilter defaulvalues={filterValues} />
        <JobResult filterValues={filterValues} />
      </section>
    </main>
  );
}
