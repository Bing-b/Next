import { useRouter } from "next/router";

export default function ReadMore() {
  const router = useRouter();
  return <button onClick={() => router.push("/about")}> 了解更多 </button>;
}
