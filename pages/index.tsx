import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Header from "../src/components/Header";
import {
  FirstDiv,
  SectionText,
  Categories,
  Buttons,
  ListPosts,
  Post,
  Bt,
} from "../src/styles/HomeStyled";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await fetch(
    "https://testewp.granostudio.com.br/index.php/wp-json/wp/v2/categories",
    {
      method: "GET",
    }
  )
    .then((T) => T.json())
    .then((data) => {
      return data;
    });

  const posts = await fetch(
    "https://testewp.granostudio.com.br/index.php/wp-json/wp/v2/posts",
    {
      method: "GET",
    }
  )
    .then((T) => T.json())
    .then((data) => {
      return data;
    });

  const medias = await fetch(
    "https://testewp.granostudio.com.br/index.php/wp-json/wp/v2/media",
    {
      method: "GET",
    }
  )
    .then((T) => T.json())
    .then((data) => {
      return data;
    });
  return {
    props: {
      categories,
      posts,
      medias,
    },
  };
};

interface CategoryType {
  id: number;
  name: string;
}

interface PostType {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  featured_media: number;
  categories: Array<number>;
}

interface MediasType {
  id: number;
  guid: {
    rendered: string;
  };
  title: {
    rendered: string;
  };
}

interface Types {
  categories: CategoryType[];
  posts: PostType[];
  medias: MediasType[];
}

const Home = ({ categories, posts, medias }: Types) => {
  const [categoryId, setCategoryId] = useState(0);

  const setFilter = (id: number) => {
    if (categoryId === id) {
      setCategoryId(0);
    } else {
      setCategoryId(id);
    }
  };
  const filteredPosts = () => {
    if (categoryId > 0) {
      return posts.filter((post) =>
        post.categories.find((element) => element == categoryId)
      );
    } else {
      return posts;
    }
  };

  const ConvertDate = (date: string) => {
    const date_ = new Date(date).toDateString().split(" ");
    const dateFormated = `${date_[1]} ${date_[2]}, ${date_[3]}`;
    return dateFormated;
  };

  const GetMedia = (id: number) => {
    const media = medias.find((element) => element.id == id);
    return { url: media?.guid.rendered, alt: media?.title.rendered };
  };

  const verifySelected = (id: number) => {
    if (id == categoryId) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <Header />
      <FirstDiv>
        <SectionText>
          <h1>
            Hi, I'm
            <br />
            Font End Dev
          </h1>
          <label>
            On this blog I share tips and tricks, frameworks, projects,
            tutorials, ect
          </label>
          <div className="input_div">
            <input placeholder="Enter your email here..." type={"email"} />
            <button>Subscribe</button>
          </div>
        </SectionText>
        <div className="image">
          <Image src="/Group.png" width="453px" height="345px" alt="Logo" />
        </div>
      </FirstDiv>
      <Categories id="category">
        <h2>Browse The Category</h2>
        <Buttons>
          {categories?.map((category) => (
            <Bt
              key={category.id}
              onClick={() => setFilter(category.id)}
              active={verifySelected(category.id)}
            >
              {category.name}
            </Bt>
          ))}
          {categoryId != 0 ? (
            <>
              <br /> <br />
              <p>To deselect press the selected one.</p>
            </>
          ) : (
            <></>
          )}
        </Buttons>
      </Categories>
      <ListPosts>
        {filteredPosts().map((post) => (
          <Post key={post.id}>
            <img
              alt={GetMedia(post.featured_media).alt}
              src={GetMedia(post.featured_media).url}
            />
            <h2>{post.title.rendered}</h2>
            <div>
              {post.categories.map((num) => {
                const category = categories.filter(
                  (element) => element.id == num
                );
                return category.map((element) => (
                  <h4 key={element.id}>{element.name}</h4>
                ));
              })}

              <p>{ConvertDate(post.date)}</p>
            </div>
          </Post>
        ))}
        {filteredPosts().length == 0 ? (
          <h3>
            No posts found.
            <br />
            <br />
            <br />
          </h3>
        ) : (
          <></>
        )}
      </ListPosts>
    </>
  );
};

export default Home;
