import { Card, CardContent } from "@/components/ui/card"
import img from "../../assets/Java-Development.webp"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Badge } from "@/components/ui/badge"



const Course = () => {
  return (
    <Card className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl hover:scale-105">
      <div className="relative">
        <img
          src={img}
          alt="card thumbnail"
          className="object-cover w-full rounded-t-lg h-36" />
      </div>
      <CardContent className="px-5 py-4 space-y-3">
        <h1 className="text-lg font-bold truncate hover:underline">
          Next Js full course in hindi by udit chauhan
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile image" style={{ borderRadius: "50%" }} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-sm font-medium">
              Udit Chauhan
            </h1>
          </div>
          <Badge className="px-2 py-1 text-xs text-white bg-blue-600 rounded-full">
            Advance
          </Badge>
        </div>
        <div className="mt-2 text-sm font-bold">
          <span>499 INR</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default Course
