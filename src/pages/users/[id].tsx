import { useRouter } from "next/router";
import { api } from "../../utils/api";

const UserPage = () => {
  const { query } = useRouter();
  if (!query.id) {
    return <div>Missing id</div>;
  }
  if (typeof query.id !== "string") {
    return <div>Invalid id</div>;
  }

  const userQuery = api.users.getById.useQuery(query.id);

  return (
    <div>
      <h1>{userQuery.data?.name}</h1>
    </div>
  );
};

export default UserPage;
