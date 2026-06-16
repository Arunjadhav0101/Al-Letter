export async function generateLetter(letterData: object) {
  try {
    const resp = await fetch("/api/generate-letter", {
      method: "POST",
      body: JSON.stringify(letterData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(!resp.ok){
        const errorData = await resp.json()
        return {error:errorData}
    }
    return await resp.json();
  } catch (error) {
    console.log("Error while letter generation", error)
    throw error
  }
}
