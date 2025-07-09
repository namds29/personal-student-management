import { Payment } from "@/shared/types/model";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489ac18d",
      amount: 250,
      status: "processing",
      email: "john@example.com",
    },
    {
      id: "573be91c",
      amount: 150,
      status: "success",
      email: "sarah@example.com",
    },
    {
      id: "962fd34e",
      amount: 75,
      status: "failed",
      email: "david@example.com",
    },
    {
      id: "845hp12k",
      amount: 300,
      status: "success",
      email: "emma@example.com",
    }
  ];
}
const Page = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default Page;
