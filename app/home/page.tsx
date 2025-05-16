import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NewsCard } from "@/components/news-card"

export default function HomePage() {
  // Sample news data
  const newsArticles = [
    {
      id: 1,
      title: "New Technology Breakthrough Promises Faster Computing",
      summary:
        "Researchers have developed a new quantum computing technique that could revolutionize processing speeds.",
      date: "May 15, 2025",
      category: "Technology",
    },
    {
      id: 2,
      title: "Global Climate Summit Reaches Historic Agreement",
      summary: "World leaders have agreed to ambitious new targets for reducing carbon emissions over the next decade.",
      date: "May 14, 2025",
      category: "Environment",
    },
    {
      id: 3,
      title: "Stock Markets Hit Record High Amid Economic Recovery",
      summary: "Major indices reached unprecedented levels as consumer confidence grows and unemployment falls.",
      date: "May 13, 2025",
      category: "Finance",
    },
    {
      id: 4,
      title: "New Study Reveals Benefits of Mediterranean Diet",
      summary:
        "Research confirms that following a Mediterranean diet can significantly reduce the risk of heart disease.",
      date: "May 12, 2025",
      category: "Health",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">News Feed</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, User</span>
            <Link href="/">
              <Button variant="outline" size="sm">
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 py-8">
        <h2 className="mb-6 text-2xl font-bold">Today's Headlines</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  )
}
