import { useState } from 'react';
import QuestionsPanel from '../components/QuestionsPanel';

const tabs = ['Questions', 'Emotions', 'Votes', 'History'];

export default function RightSidebar() {
  const [active, setActive] = useState('Questions');

  return (
    <div className="h-full flex flex-col">
      <div className="border-b flex text-xs">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`flex-1 px-2 py-1 ${active === t ? 'border-b-2 border-foreground' : ''}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto p-3 text-sm">
        {active === 'Questions' && <QuestionsPanel />}
        {active === 'Emotions' && <div>Emotions stub</div>}
        {active === 'Votes' && <div>Votes stub</div>}
        {active === 'History' && <div>History stub</div>}
      </div>
    </div>
  );
}
