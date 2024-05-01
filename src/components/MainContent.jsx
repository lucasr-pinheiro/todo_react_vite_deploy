import React from 'react';

function MainContent() {
  return (
    <div className="inner-layout">
      <div id="top-menu" className="top-menu">
        {/* Top menu content goes here */}
      </div>
      <div className="dashboard-wrapper">
        <div id="dashboard-container" className="dashboard-container">
          <div className="meu-conteudo-isolado">
            {/* Dynamic content would be rendered here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
