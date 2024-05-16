import React, { useEffect, useState } from "react";
import Skeleton from "../skeleton/Skeleton";

const ShowEntry = ({ entry }) => {
  const { empImg, emp_id, emp_name, emp_ph } = entry;

  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && (
        <div className="cardSkeleton">
          <div className="cardSkeletonImage">
            <Skeleton width="150px" height="100px" variant="square" />
          </div>
          <div className="cardSkeletonTitle">
            <Skeleton width="25%" height="20px" />
            <Skeleton width="75%" height="25px" />
            <Skeleton width="75%" height="25px" />
          </div>
        </div>
      )}

      <div style={loading ? { display: "none" } : { display: "block" }}>
        <div>
          <img
            className="showImg"
            src={empImg}
            alt=""
            onLoad={() => setLoading(false)}
          />
        </div>
        <div className="cardSkeletonTitle">
          <p>
            Employee ID: <strong>{emp_id}</strong>
          </p>
          <p>
            Name: <strong>{emp_name}</strong>
          </p>
          <p>
            Phone: <strong>{emp_ph}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowEntry;
