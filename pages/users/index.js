import React from 'react';
import Link from 'next/link'

const index = ({ users }) => {
    return (
        <div>
            <h2>This is main page</h2>
            <h3>Users : {users.length}</h3>
            {
                users.map(user =>
                    <div
                        style={{ background: "orange" }}
                        key={user.id}>
                        <h2>
                            Name: {user.name}
                            <Link href={`/users/${user.id}`}>
                                <button>Explore</button>
                            </Link>
                        </h2>
                    </div>)
            }
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }, // will be passed to the page component as props
    }
}