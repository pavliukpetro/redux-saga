import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../redux/actions';

function UsersList() {
    const { users, error, loading } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    if (error) {
        return <p>{error.message}</p>;
    }

    if (loading) {
        console.log('Loading');

        return <p>Loading ...</p>;
    }

    return (
        <ul className="users">
            {users?.map((user) => (
                <li className="user" key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    );
}

export default UsersList;
