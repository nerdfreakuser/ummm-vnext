export default function Settings() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">Settings</h1>
      <section>
        <h2 className="text-sm uppercase opacity-60 mb-2">API Keys</h2>
        <div className="grid md:grid-cols-3 gap-3">
          {['OpenAI','xAI','Anthropic','Stability'].map(p => (
            <div key={p} className="border rounded p-3">
              <div className="font-medium">{p}</div>
              <button className="mt-2 px-3 py-1 border rounded text-sm">Connect</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
