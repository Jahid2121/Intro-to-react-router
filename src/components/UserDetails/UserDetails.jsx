import { useLoaderData, useSearchParams } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const {name, website} = user
    return (
        <div>
            <h2>Detail about User: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;