import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from './layout/PublicLayout';
import { MainScreen } from './screens/MainScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<MainScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
