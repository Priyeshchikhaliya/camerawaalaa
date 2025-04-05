import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newReview, setNewReview] = useState({
    name: "",
    location: "",
    rating: 5,
    text: "",
    project: "",
  });

  const [formVisible, setFormVisible] = useState(false);
  const reviewBgUrl = import.meta.env.VITE_S3_REVIEW_URL;

  // Fetch reviews from Firebase
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const q = query(
          collection(db, "reviews"),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        const reviewsData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Convert Firestore timestamp to JavaScript Date
          const date = data.createdAt
            ? new Date(data.createdAt.seconds * 1000).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )
            : new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

          reviewsData.push({
            id: doc.id,
            ...data,
            date,
          });
        });
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        toast.error("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleRatingChange = (rating) => {
    setNewReview({
      ...newReview,
      rating,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    if (!newReview.name || !newReview.text) {
      toast.error("Please fill in your name and review text", {
        position: "top-center",
      });
      return;
    }

    try {
      setLoading(true);
      // Add new review to Firestore
      const docRef = await addDoc(collection(db, "reviews"), {
        ...newReview,
        createdAt: serverTimestamp(),
      });

      // Format date for display
      const date = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Add to local state (no need to refetch)
      const reviewWithId = {
        ...newReview,
        id: docRef.id,
        date,
      };

      setReviews([reviewWithId, ...reviews]);
      setNewReview({
        name: "",
        location: "",
        rating: 5,
        text: "",
        project: "",
      });

      setFormVisible(false);
      toast.success("Thank you for your review!", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error adding review:", error);
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Reviews | Camerawaalaa</title>
        <meta
          name="description"
          content="Read reviews from Camerawaalaa clients and share your own experience with our photography and videography services."
        />
      </Helmet>
      <div
        className="min-h-screen w-full bg-cover bg-center pt-24 pb-16 px-4 md:px-6"
        style={{ backgroundImage: `url(${reviewBgUrl})` }}
      >
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}

        <div className="container mx-auto relative z-10 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-yellow-500 font-mythicalRomanceNormal select-none mb-4">
              Client Reviews
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto select-none">
              Discover what our clients say about their experience working with
              Camerawaalaa
            </p>
          </div>

          {/* Add Review Button - Only shown when form is not visible */}
          {!formVisible && (
            <div className="text-center mb-10">
              <button
                onClick={() => setFormVisible(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
              >
                Share Your Experience
              </button>
            </div>
          )}

          {/* Review Form */}
          {formVisible && (
            <div className="backdrop-blur-sm bg-black/40 rounded-xl border border-white/10 shadow-xl mb-12 p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-yellow-500 font-light select-none">
                  Write a Review
                </h2>
                <button
                  onClick={() => setFormVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-md bg-black/30 text-sm"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-yellow-500 text-sm mb-1 select-none"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newReview.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-yellow-500 text-sm mb-1 select-none"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={newReview.location}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-yellow-500 text-sm mb-1 select-none"
                  >
                    Project Type
                  </label>
                  <input
                    type="text"
                    id="project"
                    name="project"
                    value={newReview.project}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
                    placeholder="Wedding, Portrait, Event, etc."
                  />
                </div>

                <div>
                  <label className="block text-yellow-500 text-sm mb-1 select-none">
                    Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className="text-2xl focus:outline-none"
                      >
                        <span
                          className={
                            star <= newReview.rating
                              ? "text-yellow-500"
                              : "text-gray-500"
                          }
                        >
                          ★
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="text"
                    className="block text-yellow-500 text-sm mb-1 select-none"
                  >
                    Your Review <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    value={newReview.text}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
                    placeholder="Share your experience..."
                  ></textarea>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg transition-colors duration-300 disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit Review"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Reviews List */}
          {loading && reviews.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
              <p className="text-white">Loading reviews...</p>
            </div>
          ) : (
            <div
              className={`${
                reviews.length > 3
                  ? "max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"
                  : ""
              }`}
            >
              <div className="space-y-6">
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div
                      key={review.id}
                      className="backdrop-blur-sm bg-black/40 rounded-xl border border-white/10 shadow-xl p-6 select-none"
                    >
                      <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4 gap-2">
                        <div>
                          <h3 className="text-white text-xl font-medium">
                            {review.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {review.location}
                          </p>
                        </div>
                        <div className="flex flex-col sm:items-end">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={
                                  i < review.rating
                                    ? "text-yellow-500"
                                    : "text-gray-600"
                                }
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-500 text-xs sm:text-right mt-1">
                            {review.date}
                          </p>
                        </div>
                      </div>

                      <p className="text-white mb-3">{review.text}</p>

                      {review.project && (
                        <p className="text-yellow-500 text-sm">
                          Project: {review.project}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 backdrop-blur-sm bg-black/40 rounded-lg border border-white/10 select-none">
                    <p className="text-white text-lg mb-2">No reviews yet</p>
                    <p className="text-gray-400">
                      Be the first to share your experience!
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        theme="dark"
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="bg-black/90 border border-yellow-500/20 shadow-xl text-white"
      />
    </Layout>
  );
}

export default Review;
