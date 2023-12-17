import React from "react";
import "../styles/local.css"

const People = ({ peopleLength, PeopleData}) => {
	return (
		<section>
			{peopleLength > 0 ? (
				<section className="flex flex-col gap-4">
					{PeopleData.map((people) => (
						<section
							key={people.id}
							className={`flex gap-3 items-start py-3 px-5 rounded-lg cursor-pointer hover:bg-blue-100 ${people.status === "unread" ? "bg-lightGray" : "white"}`}
						>
							<img src={`./${people.profile}`} alt={`${people.name}`} className="w-12"/>
                            <section className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <h3 className="text-textGray font-bold">{people.name}</h3>
                                    <p className="text-lightTextGray font-light">{people.description}</p>
                                    <p className="font-extrabold" style={{color: people.color}}>{people.post}</p>
                                    {
                                        people.status === "unread" ? (
                                            <button className="bg-redColor w-2 h-2 rounded-full"></button>
                                        ) : (
                                            <button className="bg-blue-200 w-2 h-2 rounded-full"></button>
                                        )
                                    }
                                </div>
                                
                                <p className="text-gray-400 font-medium text-sm">{people.time}</p>

                                {people.dm && people.dm.length > 1 && (
                                    <p className="px-4 py-2 border border-gray-200 text-sm text-lightTextGray">
                                        {people.dm}
                                    </p>
                                )}
                            </section>
						</section>
					))}
				</section>
			) : (
				<span>Please come back later</span>
			)}
		</section>
	);
};

export default People;