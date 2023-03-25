// export const registerUser = async (username, password, email) => {
//     try {
//       console.log(username, password, email);
//       const response = await fetch("/api/users/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username,
//           password,
//           email,
//         }),
//       });
//       const result = await response.json();
//       console.log(result);
//       return result.token;
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   export const login = async (username, password) => {
//     try {
//       const verify = await fetch(`/api/users/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password, }),
//       });
//       const data = await verify.json();
//       // right here put the returned data.token into localStorage so that we can use it across our app.
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("username", data.user.username);
//       return data.token;
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   export const fetchMe = async (token) => {
//     try {
//       const response = await fetch(
//         `/api/users/me`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
  //************ PRODUCTS ************//
  
  export const getAllWines = async() => {
    try {
      const response = await fetch(
        `/api/wine`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        console.log("this is the response to getAllWines", response)
        const result = await response.json();
        console.log("And here is the result", result)
        return result;
    } catch (error) {
      console.log(error);
    }
  }

  export const testAPI = async() => {
    try {
      const response = await fetch(
        `/api/test`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        console.log("this is the response to testAPI", response)
        const result = await response.json();
        console.log("And here is the result", result)
        return result;
    } catch (error) {
      console.log(error)
    }
  }

  
  
    export const getWineById = async (id) => {
      try {
        const response = await fetch(
          `/api/wine/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        return result[0];
      } catch (error) {
        console.log(error);
      }
    };
  
  
  export const createWine = async (
    token,
    name,
    type,
    description,
    price,
    url
  ) => {
    try {
      const response = await fetch("/api/wine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          type,
          description,
          price,
          url,
        }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const updatewine = async (
    token,
    name,
    type,
    description,
    price,
    url,
    id
  ) => {
    try {
      const response = await fetch(`/api/wine/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          type,
          description,
          price,
          url,
        }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteWine = async (token, wineId) => {
    try {
      const response = await fetch(`/api/wine/${wineId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  
  //************ REVIEWS ************//
  
  export const addReview = async (userName, productId, rating, description) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("/api/reviews/reviews-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userName,
          productId,
          rating,
          description,
        }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  };
  
  
  export const getReviews = async () => {
    try {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export async function deleteReview(id, token) {
    const response = await fetch(`/api/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  }
  
   export const getReviewsBywineId = async (id) => {
      try {
        const response = await fetch(
          `/api/wine/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        return result[1];
      } catch (error) {
        console.log(error);
      }
    }; 
  
    