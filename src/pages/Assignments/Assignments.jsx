import { useLoaderData } from "react-router-dom";
import AssignmentsCard from "../AssignmentsCard/AssignmentsCard";
import { useEffect, useState } from "react";

const Assignments = () => {

    const loadedAssignments = useLoaderData();
    const [allAssignments, setAllAssignments] = useState(loadedAssignments);
    const [difficultyFilter, setDifficultyFilter] = useState("all");

    // useEffect(() => {
    //     if (user) {
    //       let fetchUrl = `http://localhost:5000/createsAssignments/difficulty/${fieldValue}`;

    //       // Append filter query based on customization option
    //       if (difficultyFilter !== "all") {
    //         fetchUrl = `http://localhost:5000/createsAssignments/difficulty/${fieldValue}`;
    //       }

    //       fetch(fetchUrl)
    //         .then((res) => res.json())
    //         .then((data) => {
    //           setUserTouristSpot(data);
    //         })
    //         .catch((error) => {
    //           console.error("Error fetching tourist spots:", error);
    //         });
    //     }
    //   }, [user, difficultyFilter]);
    //   console.log(difficultyFilter);

    return (
        <div>
            <h1 className="text-center text-4xl font-bold pt-10 text-black">All Assignments</h1>
            {/* Dropdown filter */}
            <div className="flex justify-center mt-4">
                <select
                    className="p-2 border rounded-md"
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="md: grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-2 gap-4">
                {
                    allAssignments.map(
                        assignment =>
                            <AssignmentsCard
                                key={assignment._id}
                                assignment={assignment}
                                allAssignments={allAssignments}
                                setAllAssignments={setAllAssignments}
                            >
                            </AssignmentsCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;