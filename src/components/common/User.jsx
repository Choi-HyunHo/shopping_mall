import React from "react";

const User = ({ user }) => {
	const { photoURL, displayName } = user;
	return (
		<div className="flex items-center">
			<img
				className="w-10 h-10 rounded-full mr-2"
				src={photoURL}
				alt={displayName}
				referrerPolicy="no-referrer"
			/>
			<span className="hidden md:block">{displayName}</span>
		</div>
	);
};

export default User;
