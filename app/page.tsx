export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-card rounded-lg border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
          <p className="text-muted-foreground">Select a section from the sidebar to get started.</p>
        </div>
      </div>
    </div>
  );
}