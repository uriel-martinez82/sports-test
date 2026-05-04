import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const WP_API = 'https://sportsolutions.com.mx/wp-json/wp/v2';

export const dynamic = 'force-dynamic';

async function getPost(slug: string) {
  try {
    const res = await fetch(
      `${WP_API}/posts?slug=${slug}&_fields=id,slug,title,content,excerpt,date,featured_image_src,categories,yoast_head_json`,
      { cache: 'no-store' }
    );
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-MX', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').replace(/\[.*?\]/g, '').trim();
}

function cleanWordPressContent(html: string): string {
  return html
    // Remove Visual Composer shortcodes like [vc_row], [vc_column], [/vc_row] etc
    .replace(/\[\/?(vc_row|vc_column|vc_column_text|vc_row_inner|vc_column_inner|vc_section)[^\]]*\]/g, '')
    // Remove any other square bracket shortcodes
    .replace(/\[\/?[a-z_]+[^\]]*\]/g, '')
    .trim();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.yoast_head_json?.title || stripHtml(post.title.rendered),
    description: post.yoast_head_json?.description,
    openGraph: {
      images: post.yoast_head_json?.og_image?.[0]?.url ? [post.yoast_head_json.og_image[0].url] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const heroImage = post.featured_image_src?.landsacpe?.[0] ||
                    post.featured_image_src?.full?.[0] || null;

  return (
    <>
      <Navbar />

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

      {!heroImage && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-[140px] pb-8">
          <Link href="/blog" className="text-[#E8420C] text-sm hover:underline">
            ← Volver al blog
          </Link>
          <h1 className="font-condensed font-black text-4xl uppercase text-black mt-4 leading-tight">
            {stripHtml(post.title.rendered)}
          </h1>
          <p className="text-gray-400 text-sm mt-2">{formatDate(post.date)}</p>
        </div>
      )}

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-black prose-headings:text-black prose-headings:uppercase
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-[#E8420C] prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-none prose-img:w-full
              prose-ul:text-gray-700 prose-li:marker:text-[#E8420C]
              prose-strong:text-black"
            dangerouslySetInnerHTML={{ __html: cleanWordPressContent(post.content.rendered) }}
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
