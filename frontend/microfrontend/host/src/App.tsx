import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Identity = React.lazy(() => import('identity/App'));
const Cards = React.lazy(() => import('cards/App'));
const Profile = React.lazy(() => import('profile/App'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/identity" element={<Identity />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
