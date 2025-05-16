import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Article {
  id: number
  title: string
  summary: string
  date: string
  category: string
}

interface NewsCardProps {
  article: Article
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline">{article.category}</Badge>
          <span className="text-xs text-gray-500">{article.date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="mb-2 text-lg font-semibold">{article.title}</h3>
        <p className="text-sm text-gray-600">{article.summary}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <button className="text-sm font-medium text-blue-600 hover:underline">Read more</button>
      </CardFooter>
    </Card>
  )
}
