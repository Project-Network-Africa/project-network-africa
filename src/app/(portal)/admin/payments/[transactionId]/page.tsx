import TransactionDetails from "@/src/components/portal/admin/(payments)/TransactionDetails";

interface TransactionDetailsPageProps {
  params: Promise<{
    transactionId: string;
  }>;
}

export default async function TransactionDetailsPage({
  params,
}: TransactionDetailsPageProps) {
  const { transactionId } = await params;

  return <TransactionDetails transactionId={transactionId} />;
}
