import * as React from 'react';
import './style.css';

export default function App() {
  const [isVisable, setIsVisible] = React.useState(false);

  return (
    <div>
      <button
        className="menu-activator"
        onClick={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        Show me the context menu
      </button>
      {isVisable && (
        <div className="context-menu">
          <button>Item 1</button>
          <button>Item 2</button>
          <button>Item 3</button>
        </div>
      )}
    </div>
  );
}
