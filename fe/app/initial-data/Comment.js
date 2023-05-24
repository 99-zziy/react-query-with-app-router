"use client";

import { getComments, postComments } from "@/api/comment";
import { useQuery } from "@tanstack/react-query";

export function Comment({ comments }) {
  console.log("comments", comments);
  /* const { data } = useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
    initialData: comments,
  }); */

  const handlePostComment = async () => {
    await postComments("안녕하세요");
  };

  return (
    <div>
      <h1>댓글</h1>
      {/* {data &&
        data.map((comment) => (
          <div key={comment.id}>
            <div>{comment.text}</div>
          </div>
        ))} */}
      <textarea name="content" placeholder="댓글" />
      <button onClick={handlePostComment}>댓글 작성</button>
    </div>
  );
}
