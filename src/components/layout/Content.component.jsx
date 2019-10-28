import React from 'react';
import Sidebar from './Sidebar.component';
import Tasks from '../Tasks.component';

const Content = () => {
  return (
    <section>
      <Sidebar />
      <Tasks />
    </section>
  );
};

export default Content;
