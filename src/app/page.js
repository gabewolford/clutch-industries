import Hero from "./components/Hero";
import ServicesDrawer from "./components/ServicesDrawer";
import Link from "next/link";
import teamPhoto from "../../public/images/clutch-team-photo.png";
import TheHomeHeader from "./components/Headers/TheHomeHeader";
import StatsSection from "./components/StatsSection";
import PhotoLeftTextRightSection from "./components/PhotoLeftTextRightSection";
import TextAndLinkSection from "./components/TextAndLinkSection";

export const metadata = {
  title: "Clutch Industries | Construction, Investment, Management",
  description:
    "Your full service construction experts in the Willamette Valley & beyond.",
  keywords:
    "Salem, Oregon, construction, property management, investment, full service, willamette valley",
  openGraph: {
    title: "Clutch Industries | Construction, Investment, Management",
    description:
      "Your full service construction experts in the Willamette Valley & beyond.",
    siteName: "Clutch Industries | Construction, Investment, Management",
    type: "website",
    locale: "en_US",
    url: "https://clutchindustries.com",
    images: [
      {
        url: "https://clutchindustries.com/images/og-image.png",
        alt: "Clutch Industries",
      },
    ],
  },
  images: [
    {
      url: "https://clutchindustries.com/images/og-image.png",
      alt: "Clutch Industries",
    },
  ],
};

export default function Home() {
  return (
    <>
      <TheHomeHeader />
      <main>
        <section className="h-svh relative">
          <Hero />
        </section>

        <StatsSection />

        <PhotoLeftTextRightSection
          id="about-us"
          photoUrl={teamPhoto}
          altText="Team photo"
          heading="Our Team"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sapien pellentesque habitant morbi tristique. Amet cursus sit
          amet dictum sit amet justo donec."
          buttonText="About Us"
          linkTo="/who-we-are"
          variant="light"
        />

        <section
          id="what-we-do"
          className="flex flex-col gap-6 lg:flex-row h-fit text-white bg-clutchBlue-900 px-5 lg:px-10 py-10 lg:py-20"
        >
          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="text-4xl md:text-7xl 2xl:text-8xl">Our Services</h2>
          </div>

          <div className="flex flex-col w-full lg:w-1/2">
            <ServicesDrawer
              service="Construction"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Amet cursus sit amet dictum sit amet justo donec."
              linkTo="/what-we-do/#construction"
            />
            <ServicesDrawer
              service="Investment"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Amet cursus sit amet dictum sit amet justo donec."
              linkTo="/what-we-do/#investment"
            />
            <ServicesDrawer
              service="Management"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Amet cursus sit amet dictum sit amet justo donec."
              linkTo="/what-we-do/#management"
            />
          </div>
        </section>

        <section
          id="our-properties"
          className="flex flex-col gap-6 lg:gap-10 h-fit"
        >
          <div className="flex flex-col lg:flex-row justify-between w-full">
            <Link
              href="/projects/#completed"
              className="flex w-full lg:w-1/3 bg-gray-400 hover:brightness-105 h-[350px] lg:h-[500px] p-5"
            >
              <h4 className="text-2xl font-medium text-white">
                Completed Projects
              </h4>
            </Link>
            <Link
              href="/projects/#current"
              className="flex w-full lg:w-1/3 bg-gray-500 hover:brightness-105 h-[350px] lg:h-[500px] p-5"
            >
              <h4 className="text-2xl font-medium text-white">
                Current Projects
              </h4>
            </Link>
            <Link
              href="/projects/#upcoming"
              className="flex w-full lg:w-1/3 bg-gray-600 hover:brightness-105 h-[350px] lg:h-[500px] p-5"
            >
              <h4 className="text-2xl font-medium text-white">
                Upcoming Projects
              </h4>
            </Link>
          </div>
        </section>

        <TextAndLinkSection
          id="contact"
          heading="Want to work with us?"
          buttonText="Get in touch"
          linkTo="/contact"
          variant="light"
        />
      </main>
    </>
  );
}
