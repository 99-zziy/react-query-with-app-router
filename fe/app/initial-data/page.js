import { getComments } from "@/api/comment";
import { Comment } from "@/app/initial-data/Comment";

export default async function Home() {
  const initialData = await getComments();

  return <Comment comments={initialData} />;
}
