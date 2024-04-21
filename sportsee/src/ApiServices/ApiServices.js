export const fetchUserInfos = async (userId) => {
  const url = `http://localhost:3000/user/${userId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
export const fetchActivityData = async (userId) => {
    const url = `http://localhost:3000/user/${userId}/activity`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch activity data");
      }
      const data = await  response.json();  
      return data.data; 
   
    } catch (error) {
      console.error("Error fetching activity data:", error);
      return [];
    }
  };
  export const fetchAverageSessionsData = async (userId) => {
    const url = `http://localhost:3000/user/${userId}/average-sessions`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch activity data");
      }
      const data = await  response.json();  
      console.log(data.data);
      return data.data; 
  
    } catch (error) {
      console.error("Error fetching activity data:", error);
      return [];
    }
  };
  
  export const fetchPerformanceData = async (userId) => {
    const url = `http://localhost:3000/user/${userId}/performance`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch activity data");
      }
      const data = await  response.json();  
      console.log(data);
      return data.data; 
  
    } catch (error) {
      console.error("Error fetching activity data:", error);
      return [];
    }
  };