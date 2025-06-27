import { Briefcase, Sparkles, BookOpen } from "lucide-react"

export const getIcon = (iconType: string) => {
  switch (iconType) {
    case "briefcase":
      return <Briefcase className="h-5 w-5 text-white" />
    case "sparkles":
      return <Sparkles className="h-5 w-5 text-white" />
    case "book":
      return <BookOpen className="h-5 w-5 text-white" />
    default:
      return <Briefcase className="h-5 w-5 text-white" />
  }
}
