import ContactCard from "./components/ContactCard";
import { Typography } from "@/material";

export default function Contact() {
  return (
    <section className="py-10 mt-32 lg:mt-12 h-screen w-screen flex items-center justify-center bg-blue-gray-50 dark:bg-gray-900 sm:py-16 lg:py-24">
      <div
        className="absolute z-0 opacity-30 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, #f9e071 15.73%, #e6c456 15.74%, #a54b1e 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      />
      <div className="max-w-6xl  z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <div>
              <Typography
                variant="h2"
                className="text-blue-gray-800 dark:text-blue-gray-50"
              >
                If you are interested to Work with us or ask any question please get in touch!
              </Typography>
              <Typography
                variant="lead"
                className="max-w-xl mx-auto mt-4 text-blue-gray-600 dark:text-blue-gray-200"
              >
                You can also submit your project for financement or suscribe to the newsletter here.
              </Typography>
            </div>
          </div>
          <div className="lg:pl-12 mt-16 md:mt-0">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
}
