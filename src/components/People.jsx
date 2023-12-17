import React from "react";
import "../styles/local.css"

const People = ({ peopleLength, PeopleData}) => {
	return (
		<section>
			{peopleLength > 0 ? (
				<section className="flex flex-col gap-6">
					{PeopleData.map((people) => (
						<section
							key={people.id}
							className={`flex gap-3 items-center ${people.status ? "read" : "unread"}`}
						>
							<img src={`./${people.profile}`} alt={`${people.name}`} className="w-12"/>
                            <section className="flex flex-col gap-2">
                                <div className="flex gap-2 items-center">
                                    <h3 className="text-textGray font-bold">{people.name}</h3>
                                    <p className="text-lightTextGray font-light">{people.description}</p>
                                    <p className={`text-${people.color} font-bold`}>{people.post}</p>
                                    {
                                        people.status === "unread" ? (
                                            <button className="bg-redColor w-3 h-3 rounded-full"></button>
                                        ) : (
                                            <button className="bg-gray-100 w-3 h-3 rounded-full"></button>
                                        )
                                    }
                                </div>
                                
                                <p className="text-gray-400 font-medium text-sm">{people.time}</p>

                            </section>
						</section>
					))}
				</section>
			) : (
				<span className="span">We currently do not have any. We're still working on our menu. Please come back later</span>
			)}
		</section>
	);
};

export default People;