import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { SideBlock } from '../../features/blog/components/SideBlock';
import { SideList } from '../../features/blog/components/SideList';
import { SideAd } from '../../features/blog/components/SideAd';
import { BlogLink } from '../../features/blog/components/BlogLink';
import { MarkdownRenderer } from '../../features/blog/components/MarkdownRenderer';
import examplePost from '../../features/blog/components/example.json';

type Post = {
  title: string;
  slug: string;
  createdAt: string;
  categories: Array<string>;
  content: string;
  comments: Array<void>;
};
type PostLite = {
  title: string;
  slug: string;
  createdAt: string;
  categories: Array<string>;
};
type Props = {
  post: Post;
  recentlyPosts: Array<PostLite>;
  popularPosts: Array<PostLite>;
  categories: Array<{ name: string; postsCount: number }>;
  nextPost: { title: string; createdAt: string; slug: string } | null;
  prevPost: { title: string; createdAt: string; slug: string } | null;
};
const BlogPost = ({ post, popularPosts, recentlyPosts, categories, nextPost, prevPost }: Props) => {
  return (
    <div className={'w-screen h-full bg-gray-900 text-gray-200'}>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3738690345524161"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: ' window.onload = function () { (adsbygoogle = window.adsbygoogle || []).push({}); }',
          }}
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div style={{ width: '90%', margin: 'auto' }} className={'flex flex-col pb-8'}>
        <header className={'mt-8 md:mt-16'}>
          <h1 className={'text-3xl font-bold'}>れみゅーぶろぐ</h1>
          <h2 className={'text-sm'}>ブログのかんたんな説明をここに書きます</h2>
        </header>
        <div className={'mt-4 md:mt-8 flex gap-4 flex-col md:flex-row items-stretch md:items-start'}>
          <article className={'w-auto md:w-0 p-4 flex-1 divide-y divide-gray-300 bg-gray-700'}>
            <header>
              <time className={'text-sm'}>
                {format(utcToZonedTime(new Date(post.createdAt), 'Asia/Tokyo'), 'yyyy-MM-dd')}
              </time>
              <h1 className={'text-2xl font-bold'}>{post.title}</h1>
              <ul className={'flex gap-1 mt-2'}>
                {post.categories.map((category) => {
                  return (
                    <li key={category} className={'p-1 text-xs rounded bg-gray-500'}>
                      {category}
                    </li>
                  );
                })}
              </ul>
            </header>
            <main className={'mt-5 px-4'}>
              <MarkdownRenderer markdown={post.content} />
            </main>
            <footer className={'mt-5'}>
              <div className={'flex justify-between mt-5'}>
                {nextPost && (
                  <div className={'flex-grow flex justify-start'}>
                    <BlogLink href={`/blog/${nextPost.slug}`} className={'flex items-center'}>
                      <AiOutlineLeft />
                      <span>{nextPost.title}</span>
                    </BlogLink>
                  </div>
                )}
                {prevPost && (
                  <div className={'flex-grow flex justify-end'}>
                    <BlogLink href={`/blog/${prevPost.slug}`} className={'flex items-center'}>
                      <span>{prevPost.title}</span>
                      <AiOutlineRight className={'inline'} />
                    </BlogLink>
                  </div>
                )}
              </div>
            </footer>
          </article>
          <aside style={{ minWidth: 256 }} className={'flex-grow md:flex-grow-0 flex flex-col gap-4'}>
            <SideBlock title={'検索'}>
              <div>けんさくばー</div>
            </SideBlock>
            <SideList
              title={'最新記事'}
              items={recentlyPosts}
              getKey={(item, index) => index}
              itemRenderer={(item) => {
                return (
                  <>
                    <time className={'text-xs'}>
                      {format(utcToZonedTime(new Date(item.createdAt), 'Asia/Tokyo'), 'yyyy-MM-dd')}
                    </time>
                    <BlogLink href={`/blog/${item.slug}`}>
                      <p>{item.title}</p>
                    </BlogLink>
                    <ul className={'flex gap-1 mt-1'}>
                      {item.categories.map((category) => {
                        return (
                          <li key={category} className={'p-1 text-xs rounded bg-gray-500'}>
                            {category}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                );
              }}
            />
            <SideList
              title={'注目記事'}
              items={popularPosts}
              getKey={(item, index) => index}
              itemRenderer={(item) => {
                return (
                  <>
                    <time className={'text-xs'}>
                      {format(utcToZonedTime(new Date(item.createdAt), 'Asia/Tokyo'), 'yyyy-MM-dd')}
                    </time>
                    <BlogLink href={`/blog/${item.slug}`}>
                      <p>{item.title}</p>
                    </BlogLink>
                    <ul className={'flex gap-1 mt-1'}>
                      {item.categories.map((category) => {
                        return (
                          <li key={category} className={'p-1 text-xs rounded bg-gray-500'}>
                            {category}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                );
              }}
            />
            <SideAd />
            <SideList
              title={'カテゴリー'}
              items={categories}
              getKey={(item) => item.name}
              itemRenderer={(item) => {
                return (
                  <BlogLink href={`/blog/categories/${item.name}`}>
                    <span>{item.name}</span>
                    <span className={'text-sm ml-1'}>({item.postsCount})</span>
                  </BlogLink>
                );
              }}
            />
          </aside>
        </div>
      </div>
    </div>
  );
};
export default BlogPost;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  console.log(context.params);
  const postLite: PostLite = {
    createdAt: new Date('2020-01-02T03:04:05.000+09:00').toISOString(),
    slug: 'fuga',
    categories: ['かてごりー', 'TRPG'],
    title: '人気or最新記事の1つ',
  };
  return {
    props: {
      post: examplePost,
      recentlyPosts: [postLite, postLite, postLite, postLite, postLite],
      popularPosts: [postLite, postLite, postLite],
      categories: [
        {
          name: 'コミックマーケット',
          postsCount: 3,
        },
        {
          name: '日記',
          postsCount: 10,
        },
        {
          name: 'コスプレ',
          postsCount: 1,
        },
      ],
      nextPost: {
        title: 'つぎの記事',
        createdAt: new Date('2021-01-30T09:00:00.000+09:00').toISOString(),
        slug: 'next',
      },
      prevPost: {
        title: 'まえの記事',
        createdAt: new Date('2021-01-30T09:00:00.000+09:00').toISOString(),
        slug: 'prev',
      },
    },
  };
};
