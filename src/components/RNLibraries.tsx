import { Library } from './Library';

export const RNLibraries = () => {
  const libraries = [
    'rn-inkpad',
    'rn-custom-alert-prompt',
    'rn-segmented-tab-controls',
  ];

  return (
    <div className="px-6 mb-10 flex flex-wrap justify-evenly">
      {libraries.map((gist) => (
        <Library libraryId={gist} key={gist} />
      ))}
    </div>
  );
};
