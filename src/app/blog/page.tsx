import { getPosts, getCategories, getTotalPages } from '@/lib/wordpress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/\[.*?\]/g, '')  // remove WP shortcodes
    .replace(/&hellip;/g, '...')
    .replace(/&#8217;/g, "'")
    .trim();
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-MX', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page ?? 1);
  const categoryId = params.category ? Number(params.category) : undefined;

  const [posts, categories, totalPages] = await Promise.all([
    getPosts(currentPage, 9, categoryId),
    getCategories(),
    getTotalPages(9, categoryId),
  ]);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="relative h-[300px] flex items-center justify-center"
        style={{ paddingTop: '108px' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/casos/stages-0015.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-condensed font-black text-6xl uppercase text-white tracking-wide">
            Blog
          </h1>
        </div>
      </section>

      {/* TAGLINE */}
      <div className="bg-[#1a1a1a] py-4 text-center">
        <span className="text-white font-bold text-lg tracking-wider">
          #SomosSportSolutions
        </span>
      </div>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* ARTICLES GRID */}
            <div className="flex-1">
              {posts.length === 0 ? (
                <p className="text-gray-500">No hay artículos disponibles.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {posts.map((post) => {
                    const image = post.featured_image_src?.list?.[0] ||
                                  post.featured_image_src?.full?.[0] || null;
                    return (
                      <article key={post.id} className="flex flex-col">
                        {image && (
                          <Link href={`/blog/${post.slug}`}>
                            <div className="aspect-video overflow-hidden bg-gray-100">
                              <img
                                src={image}
                                alt={stripHtml(post.title.rendered)}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </Link>
                        )}
                        <div className="mt-3 flex flex-col flex-1">
                          <p className="text-[#E8420C] text-xs font-semibold uppercase tracking-wider">
                            {formatDate(post.date)}
                          </p>
                          <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-black font-bold text-base mt-1 hover:text-[#E8420C] transition-colors leading-snug">
                              {stripHtml(post.title.rendered)}
                            </h2>
                          </Link>
                          <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                            {stripHtml(post.excerpt.rendered)}
                          </p>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-[#E8420C] text-sm font-semibold mt-3 inline-block hover:underline"
                          >
                            Leer más →
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex items-center gap-2 mt-12">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={`/blog?page=${p}${categoryId ? `&category=${categoryId}` : ''}`}
                      className={`w-9 h-9 flex items-center justify-center text-sm font-semibold border transition-colors
                        ${p === currentPage
                          ? 'bg-[#E8420C] text-white border-[#E8420C]'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-[#E8420C] hover:text-[#E8420C]'
                        }`}
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-[120px]">
                {/* Search */}
                <div className="mb-8">
                  <form action="/blog" method="get">
                    <div className="flex">
                      <input
                        type="text"
                        name="search"
                        placeholder="Buscar..."
                        className="flex-1 border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#E8420C]"
                      />
                      <button
                        type="submit"
                        className="bg-[#E8420C] text-white px-3 py-2"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="font-black text-sm uppercase tracking-widest text-black mb-4 border-b border-gray-200 pb-2">
                    Categorías
                  </h3>
                  <div className="flex flex-col">
                    <Link
                      href="/blog"
                      className={`text-sm py-2 border-b border-gray-100 transition-colors ${!categoryId ? 'text-[#E8420C] font-semibold' : 'text-gray-600 hover:text-[#E8420C]'}`}
                    >
                      Todos los artículos
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/blog?category=${cat.id}`}
                        className={`text-sm py-2 border-b border-gray-100 transition-colors ${categoryId === cat.id ? 'text-[#E8420C] font-semibold' : 'text-gray-600 hover:text-[#E8420C]'}`}
                      >
                        {cat.name}
                        <span className="text-gray-400 text-xs ml-1">({cat.count})</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
