'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserPages() {

    // const response = await fetch("http://localhost:3000/api/git-users")
    // const users = await response.json();

    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/api/git-users")
        .then((response) => response.json())
        .then((response) => setUsers(response))
        .catch((erros) => console.log(erros))
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-extrabold">User Pages</h1>
            <ul className="flex flex-col">
                {users.map((user) => (
                    <li key={user.id}>
                        <figure className="flex gap-2">
                            <Image
                                src={user.avatar_url}
                                alt="Avatar"
                                width={50}
                                height={50}
                            />
                            <figcaption>{user.login}</figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </div>
    )
}