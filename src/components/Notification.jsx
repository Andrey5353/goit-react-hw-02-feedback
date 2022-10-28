export const Notification = ({ message, total }) => {
  return (
    <>
      {total === 0 && (
        <div>
          <h3>{message}</h3>
        </div>
      )}
    </>
  );
};
