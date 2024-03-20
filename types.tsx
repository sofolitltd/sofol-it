type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  };
  
  export interface Post extends Base {
    map(arg0: (post: { slug: { current: any; }; _id: import("react").Key | null | undefined; mainImage: any; categories: any[]; _createdAt: string | number | Date; title: string | number | boolean | import("react").ReactPortal | import("react").PromiseLikeOfReactNode | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined; }) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    // description: string;
  }
  
  interface Author extends Base {
    description: string;
    image: Image;
    name: string;
    slug: Slug;
  }
  
  interface Image {
    _type: "image";
    asset: Reference;
  }
  
  interface Reference {
    _type: "slug";
    current: string;
  }
  
  interface Slug {
    _type: "slug";
    current: string;
  }
  
  interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "bloackquote";
  }
  
  interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
  }
  
  export interface Category extends Base {
    _ref: any;
    description: string;
    title: string;
  }