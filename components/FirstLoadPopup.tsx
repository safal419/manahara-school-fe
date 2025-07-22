"use client";

import React, { useState, useEffect } from "react";
import { fetchPopupModal } from "@/lib/api";

function getImageUrl(imageObj: any) {
  if (!imageObj) return "";
  const formats = imageObj.formats || {};
  return formats.medium?.url || formats.small?.url || imageObj.url || "";
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [popupImageUrl, setPopupImageUrl] = useState<string>("");

  useEffect(() => {
    fetchPopupModal()
      .then((data) => {
        const imgUrl = getImageUrl(data?.data?.promotionImage);
        setPopupImageUrl(imgUrl);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading && open) {
      setTimeout(() => setFadeIn(true), 2000);
    }
  }, [loading, open]);

  return (
    <>
      {!loading && open && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
          <div
            className={`relative transition-opacity duration-500 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-1 hover:bg-black/80 text-2xl z-10"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={popupImageUrl || "/placeholder.svg"}
              alt="Admission Open"
              className="rounded-lg shadow-2xl max-w-[90vw] max-h-[80vh] sm:max-w-xl sm:max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
