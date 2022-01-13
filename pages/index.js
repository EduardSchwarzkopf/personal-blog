import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import routes from "../config/routes";
import { GITHUB_USERNAME, TWITTER_USERNAME } from "../lib/constants";

function SectionTitle(props) {
  return (
    <p
      className="col-span-2 pt-8 text-lg font-extrabold text-black md:font-normal md:text-base md:pt-0 md:text-right md:text-opacity-40"
      {...props}
    />
  );
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />;
}

function TableRow({ href, title, subtitle, date }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex items-center space-x-4 group"
    >
      <span className="flex-none font-medium text-gray-1000">{title}</span>
      <span className="flex-shrink w-full border-t border-gray-300 border-dashed dark:border-gray-800" />
      {subtitle && (
        <span className="flex-none text-tertiary text-sm md:text-base">
          {subtitle}
        </span>
      )}
      {date && (
        <span className="flex-none font-mono text-quaternary">{date}</span>
      )}
    </a>
  );
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 gap-6 md:grid-cols-12 mb-10"
      {...props}
    />
  );
}

const externalLink = (label, url) => {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      {label}
    </a>
  );
};

const skillSetCategory = {
  programming: "Programming",
  design: "Design",
  language: "Language",
};

const skillSet = [
  {
    title: "Python",
    subtitle: skillSetCategory.programming,
  },
  {
    title: "PHP",
    subtitle: skillSetCategory.programming,
  },
  {
    title: "JavaScript",
    subtitle: skillSetCategory.programming,
  },
  {
    title: "Logodesign",
    subtitle: skillSetCategory.design,
  },
  {
    title: "Media Design",
    subtitle: skillSetCategory.design,
  },
  {
    title: "German",
    subtitle: skillSetCategory.language,
  },
  {
    title: "English",
    subtitle: skillSetCategory.language,
  },
  {
    title: "Russian",
    subtitle: skillSetCategory.language,
  },
];

const workHistory = [
  {
    title: "wrkbeat GmbH",
    subtitle: "Apprentice",
    date: "2019—\u00a0\u00a0",
  },
  {
    title: "Media Designer",
    subtitle: "Self-Employed",
    date: "2016—19",
  },
  {
    title: "Web Designer",
    subtitle: "Self-Employed",
    date: "2014—16",
  },
];

export default function Index() {
  return (
    <>
      <NextSeo
        title={routes.home.seo.title}
        description={routes.home.seo.description}
        openGraph={routes.home.seo.openGraph}
      />

      <Layout>
        <SectionContainer>
          <SectionTitle />
          <SectionContent>
            <div className="space-y-9">
              <p>
                Hey, I'm Eduard. I am a media designer, developer, husband and
                father. I am currently in an apprenticeship as a developer.
              </p>
              <p>
                Before that I was a self-employed media designer and helped my
                clients to give their companies a face. My focus was mainly on
                logos and print media.
              </p>
              <p>
                My interests in tech are still very far-reaching at the moment.
                I am very interested in web development, web 3.0, security and
                OSINT. Which area will be my favorite remains to be seen.
              </p>
              <p>
                On{" "}
                {externalLink(
                  "Twitter",
                  `https://twitter.com/${TWITTER_USERNAME}`
                )}{" "}
                I mainly chat with other developers about various topics and
                support where I can.{" "}
                {externalLink(
                  "GitHub",
                  `https://github.com/${GITHUB_USERNAME}`
                )}{" "}
                is mainly for my private repositories, so I'll be posting more
                publicly in the future.
              </p>
            </div>
          </SectionContent>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>Work</SectionTitle>
          <SectionContent>
            <div className="flex flex-col space-y-3">
              {workHistory.map((job, i) => (
                <TableRow
                  href={job.href}
                  title={job.title}
                  subtitle={job.subtitle}
                  date={job.date}
                  key={i}
                />
              ))}
            </div>
          </SectionContent>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>Skills</SectionTitle>
          <SectionContent>
            <div className="flex flex-col space-y-3">
              {skillSet.map((skill, i) => (
                <TableRow
                  title={skill.title}
                  subtitle={skill.subtitle}
                  key={i}
                />
              ))}
            </div>
          </SectionContent>
        </SectionContainer>
      </Layout>
    </>
  );
}
