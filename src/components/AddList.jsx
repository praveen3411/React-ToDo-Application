import AddItem from "./Additem";

function AddList({ data, handleToggle, handleDelete }) {
  return (
    <div>
      {data.map((item) => (
        <AddItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
export default AddList;
