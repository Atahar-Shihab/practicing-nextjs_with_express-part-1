import React from 'react';

const UserPage = async () => {

    const res = await fetch('http://localhost:8000/users');
    const users = await res.json();
    console.log(users);

    return (
        <div>
            <h2 className="text-xl font-bold flex justify-center items-center h-[8vh]">No. of Users: {users.length}</h2>

            <div className="flex flex-wrap justify-center gap-4">
                {users.map((user) => (
                    <div key={user.id} className="w-64 p-4 border rounded shadow hover:cursor-pointer hover:shadow-lg
                    hover:bg-red-100 
                    hover:border-transparent
                     hover:scale-105 transition-all duration-300 rotate-[0.5deg] hover:rotate-[-0.5deg]">
                        <h3 className="text-lg font-semibold">{user.name}</h3>
                        <p className="text-gray-600">Email: {user.email}</p>
                        <p className="text-gray-600">Phone: {user.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPage;