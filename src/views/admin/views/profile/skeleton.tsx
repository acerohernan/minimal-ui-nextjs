const ProfilePageSkeleton = () => {
  return (
    <div className="w-full grid gap-4 mt-4 lg:mt-14">
      <div className="bg-white card w-full h-[330px]" />
      <div className="bg-white card w-full h-[280px]" />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="grid gap-4">
          <div className="card h-[188px]" />
          <div className="card h-[106px]" />
        </div>
        <div className="card h-[226px] lg:h-full" />
      </div>
    </div>
  );
};

export default ProfilePageSkeleton;
