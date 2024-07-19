import { GetStaticProps, InferGetStaticPropsType } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps = (async (content) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetStaticProps<{
  repo: Repo;
}>;

export default function Product({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return repo.stargazers_count;
}
