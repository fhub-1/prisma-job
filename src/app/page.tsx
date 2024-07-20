import JobFilter from "@/components/JobFilter";
import JobListitem from "@/components/JobListitem";
import prisma from "@/lib/prisma";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter lg:text-5xl">
          Developers jobs
        </h1>
        <p className="text-muted-foreground">Find your Dream Job</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilter />
        <div className="grow space-y-4">
          {jobs.map((job) => (
            <JobListitem job={job} key={job.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
