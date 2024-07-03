import { useState } from "react";

export default function Tabs({ items }) {
  const [selectedTab, setSelectedTab] = useState(items[0]["label"]);
    
  return (
    <div>
      <div>
        {items.map(({ label }) => {
          const isActive = label === selectedTab;

          return (
            <button 
                key={label}
                className={isActive ? "selected" : null}
                onClick={() => setSelectedTab(label)}
                >
              {label}
            </button>
          );
        })}
      </div>
      <div>
        {items.map(({ label, content }) => 
            <p key={label} hidden={label !== selectedTab}>
                {content}
            </p>
        )}
      </div>
    </div>
  );
}
