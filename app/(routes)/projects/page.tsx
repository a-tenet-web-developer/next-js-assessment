export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-card rounded-lg border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Project List</h2>
          <p className="text-muted-foreground">Your projects will appear here.</p>
        </div>
      </div>
    </div>
  );
}