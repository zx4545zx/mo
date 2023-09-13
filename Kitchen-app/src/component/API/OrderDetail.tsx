import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderDetail: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://restaurantapi.bubblethailand.com/order";

    // Make the API request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        setData(response.data.data);
        setLoading(false);
        console.log("data", response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  // Render your data here
  return (
    <>
      {data.map((item, index) => (
        <div>{item.orderDetail}</div>
      ))}
    </>
  );
};

export default OrderDetail;
