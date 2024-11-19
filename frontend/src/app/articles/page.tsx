"use client";

import Link from "next/link";
import { useState } from "react";
import { useCategory } from "@/context/CategoryContext";

import { Layout } from "@/components/layout/Layout";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { Pagination } from "@/components/Pagination";

import { data } from "@/types/dataTypes";

export default function ArticlePage() {
  const { selectedCategory } = useCategory();
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const articlesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = data.articles.filter((article) => {
    if (selectedCategory && selectedFeature) {
      return article.category_id === selectedCategory && article.features.includes(selectedFeature);
    }
    if (selectedCategory) {
      return article.category_id === selectedCategory;
    }
    if (selectedFeature) {
      return article.features.includes(selectedFeature);
    }
    return true;
  });

  const totalVisiblePages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentVisibleArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalVisiblePages) {
      setCurrentPage(page);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center mb-10 w-full">
        <FeaturedCategories selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature} />
      </div>

      <div className="flex flex-col items-start gap-5">
        {currentVisibleArticles.map((article) => (
          <div key={article.id} className="flex flex-col gap-2">
            <div className="flex flex-row items-center w-full justify-between">
              <Link href={`/articles/${article.id}`} passHref legacyBehavior>
                <h2 className="text-[25px] cursor-pointer">{article.title}</h2>
              </Link>
              <p className="text-[14px] py-[2px] truncate rounded-[20px] px-5 bg-black/5">
                {data.categories.find((category) => category.id === article.category_id)?.name || "Category"}
              </p>
            </div>
            <p>{article.content}</p>
          </div>
        ))}
        {currentVisibleArticles.length === 0 && (
          <div className="flex items-center justify-center w-full">
            <p>No articles found</p>
          </div>
        )}
      </div>
      {currentVisibleArticles.length != 0 && (
        <Pagination
          currentVisiblePage={currentPage}
          totalVisiblePages={totalVisiblePages}
          handlePageChange={handlePageChange}
        />
      )}
    </Layout>
  );
}
