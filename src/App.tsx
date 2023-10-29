import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';

import i18n from './translations/in18Config';
import PublicLayout from './layout/PublicLayout';
import { MainScreen } from './pages/MainScreen';
import { Portfolio } from './pages/Portfolio';
import { GetInTouch } from './pages/GetInTouch';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { NotFound } from './pages/NotFound';
import { AppProvider } from './context/AppContext';
import { AccountDeletion } from './pages/AccountDeletion';
import { AboutMe } from './pages/AboutMe';
import { DeletionIntructions } from './pages/DeletionIntructions';
import { ProjectScreen } from './pages/ProjectScreen';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<MainScreen />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="portfolio/:projectId" element={<ProjectScreen />} />
              <Route path="about-me" element={<AboutMe />} />
              <Route path="account-deletion" element={<AccountDeletion />} />
              <Route
                path="account-deletion/:app"
                element={<DeletionIntructions />}
              />
              <Route path="get-in-touch" element={<GetInTouch />} />
              <Route path="apps-privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </I18nextProvider>
  );
};

export default App;
