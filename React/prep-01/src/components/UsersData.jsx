import React from "react";

const UsersData = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const URL = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		const getUsersData = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(URL);

				if (!response.ok) {
					throw new Error(`HTTP Error ${response.status}`);
				}
				const data = await response.json();

				setUsers(data);
			} catch (error) {
				setIsLoading(false);
				setError(true);
				console.log(error, "error");
			} finally {
				setIsLoading(false);
			}
		};

		getUsersData();
	}, []);

	if (isLoading) {
		return <p>Loading ....!</p>;
	}

	if (error) {
		return (
			<p>
				Error while fetching Data, Our support team is working on it, kindly
				allow some time
			</p>
		);
	}

	if (users.length === 0) {
		return <p>No users found</p>;
	}
	return (
		<div className="innerBox">
			{users.map(({ name, id }) => (
				<div
					style={{ border: "2px solid white", padding: "2px", margin: "5px" }}
					key={id}
				>
					<p>{name}</p>
				</div>
			))}
		</div>
	);
};

export default UsersData;
