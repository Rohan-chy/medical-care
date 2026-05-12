'use client';

import { useRouter, useParams } from 'next/navigation';

type Category = {
  id: string;
  name: string;
};

export const CategorySidebar = ({ categories }: { categories: Category[] }) => {
  const router = useRouter();
  const params = useParams();

  const activeCategoryId = params?.id;

  return (
    <div className="border rounded-xl p-4">
      <h2 className="font-semibold mb-4">Categories</h2>

      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => router.push(`/client/shop-by-category/${cat.id}`)}
            className={`text-left px-3 py-2 rounded-lg transition
              ${
                activeCategoryId === cat.id
                  ? 'bg-green-800 text-white'
                  : 'hover:bg-gray-100'
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};
