import Course from "./Course";


const MyLearning = () => {
    const myLearning = [1,2];
    const isLoading = false;
    return (
        <div className="max-w-4xl mx-auto my-10 md:px-0">
            <h1 className="max-w-4xl px-4 mx-auto font-bold md:px-0">
                MY LEARNING
            </h1>
            <div className="my-5">
                {
                    isLoading ? (
                        <MyLearningSkeleton />
                    ) : myLearning.length === 0 ? (
                        <p>You are not enrolled in any course.</p>
                    ) : (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {myLearning.map((_, index) => (
                                <Course key={index} />
                            ))}
                        </div>)
        }
            </div>
        </div>
    )
}

export default MyLearning

// Skeleton component for loading state
const MyLearningSkeleton = () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {[...Array(3)].map((_, index) => (
            <div
                key={index}
                className="h-40 bg-gray-300 rounded-lg dark:bg-gray-700 animate-pulse"
            ></div>
        ))}
    </div>
);