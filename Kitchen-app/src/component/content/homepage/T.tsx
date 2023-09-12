// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// interface Zone {
//   message: string,
//   messageEn: string,
//   data: [
//     {
//       id:number,
//       name:string,
//       nameEn:string,
//       status:string,
//       diningId:
//         {
//           id:number,
//           name:string,
//           nameEn:string,
//           status:string,
//         }[]

//     }
//   ]

// }


// const T: React.FC = () => {
//   const [zones, setZones] = useState<Zone[]>([]);

//   useEffect(() => {

//     const fetchData = async () => {
//       try {
//         const response = await axios.get<Zone[]>('http://restaurantapi.bubblethailand.com/zones');
//         setZones(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };


//     fetchData();
//   }, []); 

//   return (
//     <div>
//       <h1>Zones:</h1>
//       <ul>
//         {zones.map((zone) => (
//           <li key={zone.id}>{zone.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default T;