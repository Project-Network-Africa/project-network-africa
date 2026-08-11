import { notFound } from "next/navigation";

import { programPages } from "../../../data/programs";

import ProgramDetails from "../../../components/ProgramDetailsLayout";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;

  console.log("URL slug:", slug);

  const program = programPages.find((item) => item.slug === slug);

  console.log(program);

  if (!program) {
    notFound();
  }

  return <ProgramDetails program={program} />;
}
