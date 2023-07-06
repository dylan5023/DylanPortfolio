import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>Junhyeok Portfolio</title>
          <meta name="description" content="one day one coding!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">All Projects</h1>
        <div className="grid grid-cols-1 gap-8 p-20 md:grid-cols-2">
          {projects.results.map((dylanProject) => (
            <ProjectItem key={dylanProject.id} data={dylanProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "WorkPeriod",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  //   const projectIds = projects.results.map((aProject) => aProject.id);

  //   console.log(`projectIds : ${projectIds}`);

  const projectNames = projects.results.map(
    (dylanProject) => dylanProject.properties.이름.title[0].plain_text
  );

  console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects },
  };
}
