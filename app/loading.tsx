export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-blue-500 font-medium text-lg">Loading...</p>
      </div>
    );
  }
  