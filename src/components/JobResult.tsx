import prisma from "@/lib/prisma";
import JobListitem from "./JobListitem";
import { JobFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";

interface JobResultsProps {
  filterValues: JobFilterValues;
}

export default async function JobResult({
  filterValues: { q, type, location, remote },
}: JobResultsProps) {
  const searchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFliter: Prisma.JobWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } },
          { companyName: { search: searchString } },
          { type: { search: searchString } },
          { locationType: { search: searchString } },
          { location: { search: searchString } },
        ],
      }
    : {};

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFliter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      { approved: true },
    ],
  };

  const jobs = await prisma.job.findMany({
    //   TODO CHANGEING WHERE TO ABOVE CREATED VALUE
    where,
    // where: {
    //   approved: true,
    // },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="grow space-y-4">
      {jobs.map((job) => (
        <JobListitem job={job} key={job.id} />
      ))}
      {jobs.length === 0 && (
        <p className="m-auto text-center text-gray-500 dark:text-gray-400">
          Sorry, the Job you are looking for doesn't exist or has been moved.
        </p>
      )}
    </div>
  );
}
