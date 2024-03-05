export async function fetchAvailablePlaces() {
  try {
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch places.");
    }

    return resData.places;
  } catch (error) {
    throw error;
  }
}

export async function fetchUserPlaces() {
  try {
    const response = await fetch("http://localhost:3000/user-places");
    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch user places.");
    }

    return resData.places;
  } catch (error) {
    throw error;
  }
}

export async function updateUserPlace(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = response.json();

  if (!response.ok) {
    throw new Error("Failed to update user places.");
  }

  return resData.message;
}
