import { getPost, getPosts } from '@/lib/wordpress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.yoast_head_json?.title || post.title.rendered,
    description: post.yoast_head_json?.description,
    openGraph: {
      images: post.yoast_head_json?.og_image?.[0]?.url
        ? [post.yoast_head_json.og_image[0].url]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts(1, 100);
  return posts.map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-MX', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim();
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const heroImage = post.featured_image_src?.landsacpe?.[0] ||
                    post.featured_image_src?.full?.[0] || null;

  return (
    <>
      <Navbar />

      {/* HERO */}
      {heroImage && (
        <section className="relative h-[400px]" style={{ paddingTop: '108px' }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-10 w-full">
              <Link href="/blog" className="text-white/60 text-sm hover:text-white mb-4 inline-block">
                ← Volver al blog
              </Link>
              <h1 className="font-condensed font-black text-4xl lg:text-5xl uppercase text-white leading-tight">
                {stripHtml(post.title.rendered)}
              </h1>
              <p className="text-white/60 text-sm mt-3">{formatDate(post.date)}</p>
            </div>
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {!heroImage && (
            <div className="mb-8">
              <Link href="/blog" className="text-[#E8420C] text-sm hover:underline">
                ← Volver al blog
              </Link>
              <h1 className="font-condensed font-black text-4xl uppercase text-black mt-4 leading-tight">
                {stripHtml(post.title.rendered)}
              </h1>
              <p className="text-gray-400 text-sm mt-2">{formatDate(post.date)}</p>
            </div>
          )}

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-black prose-headings:text-black prose-headings:uppercase
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-[#E8420C] prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-none prose-img:w-full
              prose-ul:text-gray-700 prose-li:marker:text-[#E8420C]
              prose-strong:text-black"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#E8420C] font-semibold hover:underline"
            >
              ← Volver al blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
