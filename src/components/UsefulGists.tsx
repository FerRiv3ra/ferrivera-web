import { Gist } from './Gist';

export const UsefulGists = () => {
  const gists = [
    '7eb0d179d195c29e8e95e34ebcc694ce',
    'a0b750398412fb2271a7d5f286c76863',
    '1a4b815214b7305a50dd638fe232d3c9',
    '5e6df8f8fbb438ad4082d5c145b1e312',
    '98dae44cf7848beb267b27b93dbfefff',
    'a50ff99a94429054d1c4c910af2cd6c0',
  ];

  return (
    <div className="px-6 mb-10 flex flex-wrap justify-evenly">
      {gists.map((gist) => (
        <Gist gistId={gist} key={gist} />
      ))}
    </div>
  );
};
