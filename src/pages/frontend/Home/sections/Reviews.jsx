// src/components/Reviews.jsx
import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

// --- FAKE DATA ---
// This data is self-contained within the component file as requested.
const reviewsData = [
  {
    id: 1,
    name: 'Katherine Johnson',
    title: 'Event Coordinator, The Big Retreat Festival',
    avatar: '/assets/images/avatars/avatar-1.jpg', // Replace with your actual image paths
    reviewText: "Ashar delivered an exceptional scheduling tool for our festival. The interface was smooth, filters worked flawlessly, and the printable view was a game changer for attendees. His attention to detail and user focused design really stood out.",
    rating: 5,
    isVerified: true,
    highlight: false,
  },
  {
    id: 2,
    name: 'Michael Reynolds',
    title: 'Marketing Manager, NES Power Systems',
    avatar: '/assets/images/avatars/avatar-2.jpg', // Replace with your actual image paths
    reviewText: "High performing landing page for our email campaign that perfectly balanced technical detail with user friendly design. The mobile optimization and smooth navigation truly enhanced engagement.",
    rating: 5,
    isVerified: true,
    highlight: true, // This card will have the purple border
  },
  {
    id: 3,
    name: 'Benjamin Smith',
    title: 'CEO, Manna Bitcoin Wallet',
    avatar: '/assets/images/avatars/avatar-3.jpg', // Replace with your actual image paths
    reviewText: "Ashar provided good quality work. He was very fast and knowledgeable. He responded very quickly and was always available. The language barrier was a challenge a few times, but we were able to work around that. I would definitely hire him again.",
    rating: 5,
    isVerified: true,
    highlight: false,
  },
];

// --- Sub-Components for Clarity ---

// StarRating Component: Renders a number of filled stars.
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
      ))}
    </div>
  );
};

// ReviewCard Component: Renders a single testimonial card.
const ReviewCard = ({ review }) => {
  return (
    <div
      className={`flex transition-all duration-300 hover:-translate-y-0.5 ease-in-out hover:border-purple-500/80 h-full flex-col border-gray-700/40 justify-between rounded-2xl border bg-[#1C1C1E] p-8`}
    >
      <div className="flex-grow">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img src={review.avatar} alt={review.name} className="h-12 w-12 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-white">{review.name}</p>
            <p className="text-sm text-gray-400">{review.title}</p>
          </div>
        </div>

        {/* Review Text with Quote */}
        <div className="relative mt-6">
          <p className="absolute -top-5 left-0 text-6xl font-bold text-gray-600/50 opacity-50">“</p>
          <p className="relative z-10 leading-relaxed text-gray-300">
            {review.reviewText}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-gray-700/40 pt-6">
        <div className="flex items-center justify-between">
          <StarRating rating={review.rating} />
          {review.isVerified && (
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <p className="text-sm font-medium text-green-500">Verified Client</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// --- Main Reviews Component ---

const Reviews = () => {
  return (
    <section className="bg-[#121212] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-400">
                Real feedback from people who have experienced our services.
            </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;