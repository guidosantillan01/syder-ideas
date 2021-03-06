import React from 'react';

import MainSelector from './MainSelector';

const Main = ({ idea, menu }) => {
  return (
    <div className="message is-link">
      <MainSelector idea={idea} menu={menu} />
    </div>
  );
};

export default Main;
