"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

interface RestaurantCardProps {
  restaurant: RestaurantProps;
}

interface RestaurantProps {
  id: string;
  name: string;
  image: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
}

function RestaurantCard({restaurant}: RestaurantCardProps) {
  const isFavourite = window.localStorage.getItem("favorites")?.includes(restaurant.id);

  return (
    <article key={restaurant.id}>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover"
        src={restaurant.image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <span>{restaurant.name}</span>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">({restaurant.ratings})</span>
        </small>
        <button
          className={`text-xl text-red-500 ${isFavourite ? "opacity-100" : "opacity-20"}`}
          type="button"
        >
          ♥
        </button>
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}

export default RestaurantCard;
