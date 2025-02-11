"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
    if (pathname) {
      const pathSegments = pathname.split("/").filter(Boolean);

      const breadcrumbList = pathSegments.map((segment, index) => {
        const formattedName = formatBreadcrumbName(segment);
        return {
          name: formattedName,
          url: "/" + pathSegments.slice(0, index + 1).join("/"),
        };
      });

      setBreadcrumbs([{ name: "Home", url: "/" }, ...breadcrumbList]);
    }
  }, [pathname]);

  // Capitalizes words and replaces hyphens with spaces
  function formatBreadcrumbName(segment: string) {
    return segment
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words
  }

  // Generate structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://www.webteck.ca${crumb.url}`,
    })),
  };

  return (
    <>
      {/* Breadcrumb UI */}
      {/* <nav aria-label="Breadcrumb" className="text-sm text-gray-400 px-4 py-2">
        <ul className="flex flex-wrap items-center space-x-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="inline-flex items-center">
              <Link href={crumb.url} className="text-blue-500 hover:underline">
                {crumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && <span className="mx-2 text-gray-500">/</span>}
            </li>
          ))}
        </ul>
      </nav> */}

      {/* Breadcrumb Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
