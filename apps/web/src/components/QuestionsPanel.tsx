export default function QuestionsPanel() {
  return (
    <div className="space-y-2">
      <div className="p-2 rounded border text-sm">What’s our goal?</div>
      <div className="p-2 rounded border text-sm">Any blockers?</div>
      <button className="w-full mt-2 px-2 py-1 rounded border text-sm">+ Add Question</button>
      <button className="w-full px-2 py-1 rounded border text-sm">Send to Chat</button>
    </div>
  );
}
