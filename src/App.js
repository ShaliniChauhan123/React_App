import React from "react";
import { Route, Routes } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import PatientTable from "./components/PatientTable/index.tsx";
const App = () => {
  const { error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Routes>
        <Route path="/" exact element={<PatientTable />} />
      </Routes>
    </div>
  );
};

export default App;
