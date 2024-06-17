"use client";
import Link from "next/link";
import { Campsite } from "../../types";
import { FC, useState } from "react";
import SingleCampEditModal from "./singleCampEditModal";
import SingleCampRemoveModal from "./singleCampRemoveModal";
import SingleCampEditDeleteButton from "./singleCampEditDeleteButtons";
import { useScopedI18n } from "../../locales/client";

interface ICamp {
  camp: Campsite;
  satisfactionPercentage: number;
  reviewCount: number;
}

const SingleCampHeader: FC<ICamp> = ({
  camp,
  satisfactionPercentage,
  reviewCount,
}) => {
  const [modal, setModal] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const t = useScopedI18n("singleCamp");
  const onClose = () => {
    setModal(false);
  };
  const onDeleteClose = () => {
    setModal(false);
  };
  const editOpen = () => {
    setModal(true);
  };
  const deleteOpen = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="single-camp-header">
      <div className="single-camp-header-navigation">
        <Link href={`/campsites`}>{t("campingSpots")}</Link>{" "}
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7071 12.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L13.5858 12L10.2929 8.70711C9.90237 8.31658 9.90237 7.68342 10.2929 7.29289C10.6834 6.90237 11.3166 6.90237 11.7071 7.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071Z"
            fill="currentColor"
          ></path>
        </svg>
        <span>{camp.name}</span>
      </div>
      <h1 className="single-camp-title">{camp.name}</h1>
      <div className="single-camp-header-review-location">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="12px"
          width="12px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path>
        </svg>{" "}
        {satisfactionPercentage ? satisfactionPercentage.toFixed(0) : "100"} % •
        <span>
          {reviewCount} {t("review(s)")}
        </span>{" "}
        • <span>{camp.location}</span>
      </div>
      <SingleCampEditDeleteButton
        deleteOpen={deleteOpen}
        editOpen={editOpen}
        camp={camp}
      />
      <div className="single-camp-share">
        <div>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 256 256"
            enable-background="new 0 0 256 256"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  fill="#000000"
                  d="M100.8,230.4c-20.7,20.7-54.5,20.7-75.3,0c-20.7-20.7-20.7-54.5,0-75.2l53.3-53.3c20.7-20.7,54.5-20.7,75.3,0c0.6,0.6,1.1,1.1,1.6,1.7c0.3,0.3,0.6,0.5,0.9,0.8c0.8,0.8,1.5,1.8,2.1,2.7c0.1,0.1,0.1,0.2,0.2,0.3c0,0,0,0,0,0c2.6,4.8,1.8,10.9-2.3,15c-4.1,4.1-10.3,4.8-15.1,2.2c-0.3,0.4-3.7-3-5.4-4.7l0,0C125.3,109,107.8,109,97,119.8l-53.4,53.4c-10.8,10.8-10.8,28.4,0,39.2l0,0c10.8,10.8,28.4,10.8,39.2,0l32.2-32.2c11.2,5.5,24.3,5.7,35.5,0.5L100.8,230.4L100.8,230.4L100.8,230.4z M230.4,100.8l-53.3,53.3c-20.7,20.7-54.5,20.7-75.3,0c-0.6-0.6-1.1-1.1-1.6-1.7c-0.3-0.3-0.6-0.5-0.9-0.8c-0.8-0.8-1.5-1.8-2.1-2.7c-0.1-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0,0c-2.6-4.8-1.8-10.9,2.3-15c4.1-4.1,10.3-4.8,15.1-2.2c0.3-0.4,3.7,3,5.4,4.7l0,0c10.8,10.8,28.3,10.9,39.1,0.1l53.4-53.4c10.8-10.8,10.8-28.4,0-39.2v0c-10.8-10.8-28.4-10.8-39.2,0l-32.2,32.1c-11.1-5.4-24.3-5.7-35.5-0.5l49.7-49.7c20.7-20.7,54.5-20.7,75.3,0C251.2,46.3,251.2,80.1,230.4,100.8L230.4,100.8L230.4,100.8z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Fblog%2F10&amp;quote=samsasmasmasm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            fill="#000000"
            height="25px"
            width="25px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 310 310"
            xmlSpace="preserve"
          >
            <g id="XMLID_834_">
              <path
                id="XMLID_835_"
                d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064     c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996     V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545     C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703     c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
              ></path>
            </g>
          </svg>
        </a>
        <a href="https://x.com/intent/tweet?text=samsasmasmasm: http://localhost:3000/blog/10">
          <svg
            width="25"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 462.799"
          >
            <path
              fillRule="nonzero"
              d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
            ></path>
          </svg>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            width="25"
            height="25"
            clipRule="evenodd"
            viewBox="0 0 510 512.459"
          >
            <path
              fill="#111B21"
              d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z"
            ></path>
          </svg>
        </a>
      </div>
      {modal && <SingleCampEditModal onClose={onClose} camp={camp} />}
      {isDeleteModalOpen && (
        <>
          <div
            className="main-product-card-modal-container-bg"
            onClick={() => setIsDeleteModalOpen(false)}
          ></div>
          <SingleCampRemoveModal camp={camp} onClose={onDeleteClose} />
        </>
      )}
    </div>
  );
};

export default SingleCampHeader;
