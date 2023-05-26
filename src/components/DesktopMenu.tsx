import { Link } from 'react-router-dom';

interface Props {
  isOpen: boolean;
}

export const DesktopMenu = ({ isOpen }: Props) => {
  return (
    <div
      x-cloak
      className={`${
        isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
      } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
    >
      <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:-px-8">
        <Link
          className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
          to="/"
        >
          glasses Search
        </Link>
        <Link
          className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
          to="/"
        >
          How it works!
        </Link>
        <Link
          className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
          to="/"
        >
          Why us?
        </Link>
        <Link
          className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
          to="/"
        >
          Contact
        </Link>

        <button className="flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Get in touch
        </button>
      </div>
    </div>
  );
};
