import { Link } from 'react-router-dom';

export const Project = () => {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="https://dummyimage.com/1203x503"
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        Shooting Stars
      </h2>
      <p className="text-base leading-relaxed mt-2">
        Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed.
        Gastropub street art beard dreamcatcher neutra, ethical XOXO
        lumbersexual.
      </p>
      <Link
        to=""
        className="text-blue-950 hover:text-blue-900 inline-flex items-center mt-3"
      >
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};
