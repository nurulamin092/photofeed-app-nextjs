import PhotosList from "@/components/PhotosList";
import { getDictionary } from "./disctionaries";



export default async function Home() {
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();
  return (
    <>
      <PhotosList photos={photos} />
    </>
  );
}
