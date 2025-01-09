import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



const Hero = () => {
  return (
    <div className='relative px-4 py-16 text-center bg-indigo-500 to bg-gradient-to-r from-blue-500 dark:from-gray-800 dark:to-gray-900'>
      <div className="max-w-3xl mx-auto">
        <h1 className='mb-4 text-4xl font-bold text-white' style={{ textTransform: "capitalize" }}>
          find best course for you
        </h1>
        <p className='mb-5 text-gray-200 dark:text-gray-400' >
          Discover, Learn, and Upskill with our wide range of courses
        </p>
        <form className="flex items-center max-w-xl mx-auto mb-6 overflow-hidden bg-white rounded-full shadow-lg dark:bg-gray-800">
          <Input
            type="text"
            value=""
            placeholder="Search Courses"
            className="flex-grow px-6 py-3 text-gray-900 placeholder-gray-400 border-none focus-visible:ring-0 dark:text-gray-100 dark:placeholder-gray-500"
          />
          <Button type="submit" className="px-6 py-3 text-white bg-blue-600 rounded-r-full dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800">Search</Button>
        </form>
        <Button className="text-blue-600 bg-white rounded-full dark:bg-gray-800 hover:bg-gray-200">Explore Courses</Button>
      </div>

    </div>
  )
}

export default Hero
