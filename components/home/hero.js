import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Hello my name is Junhyeok
          <br className="hidden lg:inline-block" />
          One day One coding!
        </h1>
        <p className="mb-8 leading-relaxed">
          Hello! I am Junhyeok Kang, a skilled web developer specializing in
          responsive websites for delivery and tutoring services. I excel in
          optimizing performance for mobile and tablet versions. With expertise
          in Node.js and SPAs, I have developed a full-stack anonymous
          information-sharing website called D-lip. I implemented secure login
          using crypto and JWT, following the MVC pattern. Using mongodb, I
          tailored schema structures to meet the data of website requirements.
          Additionally, I have contributed to a group project, creating a
          reservation feature for a library website. Using PHP and MySQL, I
          built the necessary database and designed efficient data structures
          for seamless reservation management.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">See projects</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
