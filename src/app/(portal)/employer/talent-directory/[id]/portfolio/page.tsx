import { notFound } from "next/navigation";
import { candidates } from "@/src/data/employer/candidates";
import CandidatePortfolio from "@/src/components/portal/employer/(talent-directory)/CandidatePortfolio";

interface PortfolioPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { id } = await params;

  const candidate = candidates.find((item) => item.id === id);

  if (!candidate) {
    notFound();
  }

  return <CandidatePortfolio candidate={candidate} />;
}
