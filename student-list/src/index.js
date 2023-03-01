import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import StudentTable from './StudentTable';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <StudentTable />
    <App />
  </div>
);
// do margin: auto; nen khi hien thi ra trinh duyet component bi chong len nhau
