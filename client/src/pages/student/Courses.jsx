import { Skeleton } from "@/components/ui/skeleton";


const Courses = () => {
    const isLoading = true;

    return (
        <div className="bg-gray-50 dark:bg-[#141414]">
            <div className="p-6 mx-auto max-w-7xl">
                <h2 className="mb-10 text-3xl font-bold text-center">Our Courses</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {
                        isLoading ? <CourseSkeleton /> : " "
                    }
                </div>
            </div>
        </div>
    )
}

export default Courses

const CourseSkeleton = () => {
    return (
        <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <Skeleton className="w-full h-36" />
            <div className="px-5 py-4 space-y-3">
                <Skeleton className="w-3/4 h-6" />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Skeleton className="w-6 h-6 rounded-full" />
                        <Skeleton className="w-20 h-4" />
                    </div>
                    <Skeleton className="w-16 h-4" />
                </div>
                <Skeleton className="w-1/4 h-4" />
            </div>
        </div>
    );
};
