import Layout from "../components/layout";

function SectionTitle(props) {
  return (
    <p
      className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:font-normal md:text-base md:pt-0 md:text-right md:text-opacity-40"
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
      <span className="flex-none font-medium text-gray-1000 group-hover:underline group-hover:text-blue-600 dark:group-hover:text-blue-500 dark:text-gray-100">
        {title}
      </span>
      <span className="flex-shrink w-full border-t border-gray-300 border-dashed dark:border-gray-800" />
      {subtitle && <span className="flex-none text-tertiary">{subtitle}</span>}
      {date && (
        <span className="flex-none font-mono text-quaternary">{date}</span>
      )}
    </a>
  );
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 gap-6 md:grid-cols-12"
      {...props}
    />
  );
}

const workHistory = [
  {
    href: "https://github.com/mobile",
    title: "GitHub",
    subtitle: "Product Designer",
    date: "2018—\u00a0\u00a0",
  },
  {
    href: "https://designdetails.fm",
    title: "Design Details Podcast",
    subtitle: "Co-host",
    date: "2014—\u00a0\u00a0",
  },
  {
    href: "https://github.com/withspectrum/spectrum",
    title: "Spectrum.chat",
    subtitle: "Co-founder",
    date: "2017—18",
  },
  {
    href: "https://facebook.com",
    title: "Facebook",
    subtitle: "Product Designer",
    date: "2015—17",
  },
  {
    href: "https://buffer.com",
    title: "Buffer",
    subtitle: "Product Designer",
    date: "2013—15",
  },
];

export default function Index() {
  return (
    <>
      <Layout>
        <div className="w-full max-w-3xl px-4 py-8 pb-10 mx-auto md:px-8">
          <div className="pb-24 space-y-8 md:space-y-16">
            <SectionContainer>
              <SectionTitle />
              <SectionContent>UPPER CONTENT</SectionContent>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Work</SectionTitle>
              <SectionContent>
                <div className="flex flex-col space-y-3">
                  {workHistory.map((job) => (
                    <TableRow
                      href={job.href}
                      title={job.title}
                      subtitle={job.subtitle}
                      date={job.date}
                      key={job.href}
                    />
                  ))}
                </div>
              </SectionContent>
            </SectionContainer>
          </div>
        </div>
      </Layout>
    </>
  );
}
