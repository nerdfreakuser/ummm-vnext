export default function CreateExpert() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Create Expert</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <input className="border rounded px-3 py-2" placeholder="Name" />
        <input className="border rounded px-3 py-2" placeholder="Tags (comma-separated)" />
        <textarea className="border rounded px-3 py-2 md:col-span-2" rows={6} placeholder="System Prompt" />
        <button className="px-3 py-2 border rounded md:col-span-2">Save</button>
      </div>
    </div>
  );
}
