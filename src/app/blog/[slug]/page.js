import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import RelatedPostsCarousel from "@/components/Blog/RelatedPostsCarousel";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Blog Post Not Found - Funderama" };
  return {
    title: `${post.title} - Funderama`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Header />

      <main>
        {/* Post Hero Section */}
        <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#e1f5fe_0%,#ffffff_100%)] pb-10 pt-12 sm:pb-14 sm:pt-16">
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay"
            style={{ backgroundImage: `url('https://funderama-llc.s3-eu-central-2.ionoscloud.com/blob-scene-wide-simple.svg')` }}
          />

          <div className="relative z-10 mx-auto max-w-[1000px] px-4 text-center sm:px-6">
            {/* Meta Category & Date */}
            <div className="flex items-center justify-center gap-3 font-['Inter',sans-serif] text-[15px] text-[#183059]">
              <Link
                href="/blog"
                className="transition-colors hover:text-[#00b0ff]"
              >
                Blog
              </Link>
              <span className="inline-block h-[14px] w-[1px] bg-[#00b0ff]/40" />
              <time className="text-[#183059]">{post.date}</time>
            </div>

            {/* Post Title */}
            <h1 className="mt-6 font-['Rubik',sans-serif] text-[30px] sm:text-[38px] lg:text-[46px] font-normal leading-[1.2] text-[#263238]">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Featured Image (Wide 1350px container matching Image 2, with full face visibility) */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto max-w-[1350px] overflow-hidden rounded-[8px]">
            <img
              src={post.image}
              alt={post.title}
              className="h-[420px] w-full object-cover object-[center_18%] sm:h-[520px] lg:h-[600px]"
            />
          </div>
        </section>

        {/* Post Content */}
        <article className="mx-auto max-w-[1000px] px-4 py-10 sm:px-6 sm:py-14">
          <div
            className="blog-content font-['Inter',sans-serif] text-[16px] sm:text-[17px] leading-[1.8] text-[#546e7a] [&_p]:mb-5 [&_b]:font-semibold [&_b]:text-[#263238] [&_b]:font-['Rubik',sans-serif] [&_b]:text-[18px] sm:[&_b]:text-[20px] [&_ul]:list-disc [&_ul]:list-inside [&_ul]:pl-0 [&_ul]:space-y-2.5 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:pl-0 [&_ol]:space-y-2.5 [&_a]:text-[#00b0ff] [&_a:not(.no-underline)]:underline hover:[&_a]:text-[#183059] [&_a.no-underline]:no-underline hover:[&_a.no-underline]:no-underline [&_a[href^='tel:']]:text-inherit hover:[&_a[href^='tel:']]:text-inherit [&_a[href^='tel:']]:no-underline hover:[&_a[href^='tel:']]:no-underline [&_a[href^='mailto:']]:text-inherit hover:[&_a[href^='mailto:']]:text-inherit [&_a[href^='mailto:']]:no-underline hover:[&_a[href^='mailto:']]:no-underline [&_img]:rounded-[8px] [&_img:not(.alignleft)]:my-6 [&_img.alignleft]:max-w-full sm:[&_img.alignleft]:max-w-[404px] sm:[&_img.alignleft]:float-left sm:[&_img.alignleft]:mr-7 sm:[&_img.alignleft]:mb-4 sm:[&_img.alignleft]:mt-1.5"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />

          {/* Share Section Card (Floating white card with hover lift & shadow) */}
          <div className="mt-14 rounded-[14px] border border-[#f0f3f6] bg-white p-6 shadow-[0_10px_35px_rgba(20,47,126,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#cbd5e1] hover:shadow-[0_18px_40px_rgba(20,47,126,0.16)] sm:rounded-[10px] sm:px-10 sm:py-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-center font-['Rubik',sans-serif] text-[16px] font-normal text-[#263238] sm:text-left">
                Share this post:
              </span>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://funderamallc.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#3b5998] bg-white py-2.5 px-4 text-[14px] font-medium text-[#3b5998] transition hover:bg-[#3b5998] hover:text-white sm:w-auto sm:border-[#e5e7eb] sm:py-1.5 sm:text-[13px]"
                >
                  <svg className="h-4 w-4 fill-current sm:h-3.5 sm:w-3.5" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                  <span>Facebook</span>
                </a>

                {/* Twitter */}
                <a
                  href={`https://twitter.com/intent/tweet?url=https://funderamallc.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#1da1f2] bg-white py-2.5 px-4 text-[14px] font-medium text-[#1da1f2] transition hover:bg-[#1da1f2] hover:text-white sm:w-auto sm:border-[#e5e7eb] sm:py-1.5 sm:text-[13px]"
                >
                  <svg className="h-4 w-4 fill-current sm:h-3.5 sm:w-3.5" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                  <span>Twitter</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://funderamallc.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#0077b5] bg-white py-2.5 px-4 text-[14px] font-medium text-[#0077b5] transition hover:bg-[#0077b5] hover:text-white sm:w-auto sm:border-[#e5e7eb] sm:py-1.5 sm:text-[13px]"
                >
                  <svg className="h-4 w-4 fill-current sm:h-3.5 sm:w-3.5" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title)}%20https://funderamallc.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#25d366] bg-white py-2.5 px-4 text-[14px] font-medium text-[#25d366] transition hover:bg-[#25d366] hover:text-white sm:w-auto sm:border-[#e5e7eb] sm:py-1.5 sm:text-[13px]"
                >
                  <svg className="h-4 w-4 fill-current sm:h-3.5 sm:w-3.5" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Discover More Articles Carousel (4 columns with prev/next arrows matching Image 2) */}
        <RelatedPostsCarousel posts={allPosts} />
      </main>

      <Footer />
    </div>
  );
}

