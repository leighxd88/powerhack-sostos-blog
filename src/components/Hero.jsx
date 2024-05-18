import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const Hero = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    setLoading(true);
    console.log(loading);
    try {
      const { data } = await supabase.from("posts").select();
      if (data) setPosts(data);
      console.log(data);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-20 mx-4 md:mx-12 lg:mx-24">
      <h2 className="underline text-lg font-semibold text-green-500">
        Recent posts
      </h2>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching posts.</p>}
        {posts && (
          <div>
            {posts.length < 1 && <p>There are no posts</p>}
            {posts.map((post) => (
              <div key={post.id} className="border p-2 mb-2">
                <h3 className="font-semibold">{post.title}</h3>
                <p>{post.content}</p>
                <p
                  className={`text-sm ${
                    post.tag === "verified"
                      ? "text-green-500"
                      : post.tag === "not sure"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {post.tag}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
