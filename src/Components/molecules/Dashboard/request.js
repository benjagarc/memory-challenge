export const getCards = async () => {
  try {
    const response = await fetch(
      "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20", {
        method: "GET",
        cache: "force-cache"
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};
