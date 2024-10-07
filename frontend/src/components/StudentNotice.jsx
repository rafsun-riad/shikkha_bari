function StudentNotice() {
  const notice = '';

  return (
    <div className="flex items-center justify-center h-full w-full">
      {notice ? (
        <p></p>
      ) : (
        <p className="text-2xl text-center">Notice hasn&apos;t given yet!</p>
      )}
    </div>
  );
}

export default StudentNotice;
