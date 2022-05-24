import { useDesserts } from '../data/useDesserts';
import { useUsers } from '../data/useUsers';

export const Details = () => {
  const { data: users, isLoading, error } = useUsers();
  const { data: dessert, isLoading: isLoadingDessert, error: dessertError } = useDesserts();

  if (isLoading || isLoadingDessert) return <div>Loading...</div>;
  if (error || dessertError) return <div>Error</div>;
  if (!users.length || !dessert) return <>No Data</>;

  console.log(isLoading || isLoadingDessert);

  return (
    <div>
      <h3>Users List</h3>
      <ul>
        {users.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
      <h3>Dessert Data</h3>
      <div>{dessert.variety}</div>
      <div>{dessert.flavor}</div>
    </div>
  );
};
