import { useParams } from 'react-router-dom';
import ChaosMeter from '../components/ChaosMeter';
import ChatThread from '../components/ChatThread';
import InputBar from '../components/InputBar';

export default function RoomView() {
  const { id } = useParams();
  return (
    <div className="h-full flex flex-col">
      <header className="border-b p-3 flex items-center justify-between">
        <div>
          <div className="font-semibold">Room {id}</div>
          <div className="text-sm opacity-70">Topic: —</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-muted border" />
            <div className="w-8 h-8 rounded-full bg-muted border" />
          </div>
          <ChaosMeter value={0} />
        </div>
      </header>
      <div className="flex-1 overflow-y-auto">
        <ChatThread />
      </div>
      <footer className="border-t">
        <InputBar />
      </footer>
    </div>
  );
}
