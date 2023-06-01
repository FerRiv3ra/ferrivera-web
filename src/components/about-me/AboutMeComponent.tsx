import { useTranslation } from 'react-i18next';

export const AboutMeComponent = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white">
      <div className="relative flex">
        <div className="min-h-screen lg:w-1/3" />
        <div className="hidden w-3/4 min-h-screen bg-gray-100 lg:block"></div>

        <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            Fernando <span className="text-blue-800">Rivera</span> <br />
          </h1>

          <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
            <img
              className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
              src="https://res.cloudinary.com/fercloudinary/image/upload/v1685546396/FerRivera%20Web/mainPhoto_gspdi0.jpg"
              alt=""
            />

            <div className="mt-8 lg:px-10 lg:mt-0">
              <h1 className="text-2xl font-semibold text-gray-800 lg:w-72">
                {t('aboutMe.aboutMe')}
              </h1>

              <p className="max-w-lg mt-6 text-gray-500">
                {t('aboutMe.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
