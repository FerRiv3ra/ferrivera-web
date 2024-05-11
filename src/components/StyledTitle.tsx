import { useAppContext } from '../context/AppContext';

interface Props {
  initial: string;
  text?: string;
}

export const StyledTitle = ({ initial, text }: Props) => {
  const { theme } = useAppContext();

  return (
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2
        className={`max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight ${
          theme === 'light' ? 'text-gray-900' : 'text-gray-100'
        } sm:text-4xl md:mx-auto`}
      >
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">{initial}</span>
        </span>{' '}
        {text}
      </h2>
    </div>
  );
};
