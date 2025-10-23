"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const images = [
  { src: "/gallery/blazer1.jpg", category: "Blazers", id: 1 }, // Added IDs for unique keys
  { src: "/gallery/blazer2.jpg", category: "Blazers", id: 2 },
  { src: "/gallery/blazer3.jpg", category: "Blazers", id: 3 },
  { src: "/gallery/blazer4.jpg", category: "Blazers", id: 4 },
   { src: "/gallery/blazer5.jpeg", category: "Blazers", id: 12 },
    { src: "/gallery/blazer7.jpg", category: "Blazers", id: 16 },
     { src: "/gallery/blazer6.jpg", category: "Blazers", id: 17 },
  { src: "/gallery/vehicle1.jpg", category: "Vehicles", id: 5 },
  { src: "/gallery/vehicle2.jpg", category: "Vehicles", id: 6 },
   { src: "/gallery/vehicle3.jpg", category: "Vehicles", id: 15 },
  { src: "/gallery/vehicle4.jpg", category: "Vehicles", id: 7 },
  { src: "/gallery/vehicle5.jpg", category: "Vehicles", id: 8 },
  { src: "/gallery/deco1.jpg", category: "Decorations", id: 9 },
  { src: "/gallery/deco2.jpeg", category: "Decorations", id: 10 },
  { src: "/gallery/deco3.jpg", category: "Decorations", id: 11 },
  { src: "/gallery/deco4.jpg", category: "Decorations", id: 13 },
   { src: "/gallery/deco5.jpeg", category: "Decorations", id: 14 },
  // Add more images as needed; assume chronological order (older first)
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [sortBy, setSortBy] = useState("Latest");

  // Reset visibleCount when filter changes
  useEffect(() => {
    setVisibleCount(8);
  }, [filter]);

  // Filter images
  const filtered =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  // Sort filtered images
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Latest") {
      return b.id - a.id; // Higher ID first (assuming newer)
    }
    return a.id - b.id; // Lower ID first
  });

  const displayed = sorted.slice(0, visibleCount);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="px-4 sm:px-8 py-10">
          <h2 className="text-3xl font-semibold text-center mb-8">GALLERY</h2>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-3">
              {["All", "Blazers", "Vehicles", "Decorations"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full border ${
                    filter === cat
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  } transition-colors`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center">
              <label className="text-sm mr-2 whitespace-nowrap">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded px-2 py-1 bg-"
              >
                <option>Latest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {displayed.map((img) => (
              <div
                key={img.id}
                className="relative w-full aspect-[4/3] rounded overflow-hidden shadow-md"
              >
                <Image
                  src={img.src}
                  alt={`${img.category} image`}
                  fill
                  className="object-cover"
                  loading="lazy" // Optimization: Lazy load images
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {displayed.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
              No images found for this filter.
            </p>
          )}

          {/* Show More Button */}
          {visibleCount < sorted.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Show more
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
