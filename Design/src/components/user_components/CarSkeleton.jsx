import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CarSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="grid gap-1">
          <Skeleton width={340} height={200} />

          <Skeleton width={340} height={25} />
          <Skeleton width={340} height={40} />
        </div>
      </SkeletonTheme>
    </>
  );
};

export default CarSkeleton;
