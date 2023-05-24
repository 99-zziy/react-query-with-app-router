export const getComments = async () => {
  const res = await fetch("http://localhost:4000/api/comments");
  const data = res.json();
  console.log(data);
};

export const postComments = async (text) => {
  const res = await fetch("http://localhost:4000/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    }),
  });
  const data = res.json();
  console.log(data);
};
